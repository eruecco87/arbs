import { Component, OnInit } from '@angular/core';

// Interfaces
import { RosterForceInterface } from '@interfaces';

@Component({
  selector: 'app-roster-force',
  templateUrl: './roster-force.page.html',
  styleUrls: ['./roster-force.page.scss'],
})
export class RosterForcePage implements OnInit {

  /**
   * Holds the data for the roster's force
   */
  public force: RosterForceInterface;

  /**
   * RostersForcePage Constructor
   */
  constructor() { }

  /**
   * OnInit LifeCycle Hook
   */
  ngOnInit() {}

  /**
   * ViewDidEnter LifeCycle Hook
   */
  ionViewDidEnter() {

    this.force = window.history.state.force;

  }
}
