import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// RXJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Ionic
import { LoadingController } from '@ionic/angular';

// Interfaces
import { RosterInterface } from '@interfaces';

// Services
import { RosterService } from '@services';

@Component({
  selector: 'app-roster-details',
  templateUrl: './roster-details.page.html',
  styleUrls: ['./roster-details.page.scss'],
})
export class RosterDetailsPage implements OnInit {

  /**
   * Holds an ionic loading controller instance
   */
  public loader: HTMLIonLoadingElement;

  /**
   * Holds the roster data as an Observable
   */
  public roster: Observable<RosterInterface>;

  /**
   * RosterDetailsPage Constructor
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private loadingController: LoadingController,
    public rosterService: RosterService,
  ) {}

  /**
   * OnInit LifeCycle Hook
   */
  ngOnInit() {}

  /**
   * ViewDidEnter LifeCycle Hook
   */
  async ionViewDidEnter() {

    this.loader = await this.loadingController.create({
      message: 'Loading Roster...',
    });

    this.loader.present();

    this.roster = this.rosterService.get(this.activatedRoute.snapshot.params.id).pipe(
      tap(() => this.loader.dismiss())
    );

  }
}
