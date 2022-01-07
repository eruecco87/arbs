import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// RXJS
import { Observable } from 'rxjs';

// Ionic
import { NavController } from '@ionic/angular';

// Interfaces
import { RosterInterface, RosterForceInterface } from '@interfaces';

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
   *
   * @param activatedRoute
   * @param navController
   * @param rosterService
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
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

    this.roster = this.rosterService.get(this.activatedRoute.snapshot.params.id);

  }

  /**
   * Navigates to selected force
   *
   * @param force
   */
  public goToForce(force: RosterForceInterface): void {

    this.navController.navigateForward(['tab1', 'force'], { state: { force } });

  }
}
