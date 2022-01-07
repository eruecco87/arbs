import { Injectable } from '@angular/core';

// RXJS
import { from, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

// Ionic
import { Storage } from '@ionic/storage-angular';
import { AlertController, NavController } from '@ionic/angular';

// Interfaces
import { RosterInterface } from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  /**
   * Emits the roster data as an Observable
   *
   * @private
   */
  private rosters$: Subject<RosterInterface[]> = new Subject();

  /**
   * RosterService Constructor
   *
   * @param storage
   * @param alertController
   * @param navController
   */
  constructor(
    private storage: Storage,
    private alertController: AlertController,
    private navController: NavController
  ) { }

  /**
   * Adds a new roster to the local storage
   *
   * @param roster
   */
  public save(roster: RosterInterface): Observable<RosterInterface> {

    return from(this.storage.set(`roster-${ roster.id }`, roster)).pipe(
      tap(() => this.all())
    );

  }

  /**
   * Gets a roster from the local storage
   *
   * @param id
   */
  public get(id: string): Observable<RosterInterface> {

    return from(this.storage.get(`roster-${ id }`));

  }

  /**
   * Gets all rosters from the local storage
   */
  public all(): Observable<RosterInterface[]> {

    const ROSTERS: RosterInterface[] = [];

    this.storage.keys().then((keys: string[]) => {

      keys.forEach((key: string) => {

        if (key.includes('roster-')) {

          this.storage.get(key).then((roster: RosterInterface) => {

            ROSTERS.push(roster);

          });

        }

      });

      this.rosters$.next(ROSTERS);

    });

    return this.rosters$;

  }

  /**
   * Displays an ionic alert to confirm the deletion of a roster
   *
   * @param id
   * @param redirect
   */
  public async showDeleteConfirmation(id: string, redirect = false): Promise<void> {

    const ALERT = await this.alertController.create({
      header: 'Delete Roster',
      message: 'Are you sure you want to delete this roster?',
      buttons: [{
        text: 'CANCEL',
        role: 'cancel'
      }, {
        text: 'OK',
        handler: () => {

          this.delete(id);

          if (redirect) {

            this.navController.back();

          }

        },
      }]
    });

    ALERT.present();

  }

  /**
   * Deletes a roster from the local storage
   *
   * @param id
   */
  public delete(id: string): Observable<RosterInterface[]> {

    this.storage.remove(`roster-${ id }`).then(() => this.all());
    return this.rosters$;

  }
}
