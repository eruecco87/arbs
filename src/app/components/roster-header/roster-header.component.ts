import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { RosterInterface } from '@interfaces';

@Component({
  selector: 'app-roster-header',
  templateUrl: './roster-header.component.html',
  styleUrls: ['./roster-header.component.scss'],
})
export class RosterHeaderComponent implements OnInit {

  /**
   * Holds the roster data to be displayed.
   */
  @Input() public roster: RosterInterface;

  /**
   * RosterHeaderComponent constructor
   */
  constructor() { }

  /**
   * OnInit Lifecycle Hook
   */
  ngOnInit() {}
}
