import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// Interfaces
import { RosterForceInterface, RosterCostInterface } from '@interfaces';

// Services
import { SelectionService } from '@services';

@Component({
  selector: 'app-force-header',
  templateUrl: './force-header.component.html',
  styleUrls: ['./force-header.component.scss'],
})
export class ForceHeaderComponent implements OnChanges {

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
    public selectionService: SelectionService
  ) {}

  /**
   * OnChanges LifeCycle Hook.
   */
  ngOnChanges(changes: SimpleChanges) {

    if (changes && changes.force.currentValue) {

      this.selectionsCosts = this.selectionService.getCosts(changes.force.currentValue.selections);

    }

  }
}
