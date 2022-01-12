import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { RosterForceInterface, RosterCostInterface } from '@interfaces';

// Services
import { SelectionService } from '@services';

@Component({
  selector: 'app-force-header',
  templateUrl: './force-header.component.html',
  styleUrls: ['./force-header.component.scss'],
})
export class ForceHeaderComponent implements OnInit {

  /**
   * Holds the data for the roster's force.
   */
  @Input() force: RosterForceInterface;

  /**
   * Holds the data for the force selections cost.
   */
  public selectionsCosts: RosterCostInterface[];

  /**
   * ForceHeaderComponent constructor.
   *
   * @param selectionService
   */
  constructor(
    private selectionService: SelectionService
  ) {}

  /**
   * OnInit LifeCycle Hook.
   */
  ngOnInit() {

    this.selectionsCosts = this.selectionService.getCosts(this.force.selections);

  }
}
