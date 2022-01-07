import { Component, OnInit } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Interfaces
import { RosterInterface } from '@interfaces';

// Services
import { RosterService } from '@services';

@Component({
  selector: 'app-roster-list',
  templateUrl: './roster-list.component.html',
  styleUrls: ['./roster-list.component.scss'],
})
export class RosterListComponent implements OnInit {

  /**
   * Roster list observable from RosterService
   */
  public rosters: Observable<RosterInterface[]> = this.rosterService.all();

  /**
   * RosterListComponent Constructor
   *
   * @param rosterService
   */
  constructor(
    public rosterService: RosterService,
  ) { }

  /**
   * OnInit Lifecycle Hook
   */
  ngOnInit() {}
}
