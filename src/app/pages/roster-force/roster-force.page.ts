import { Component } from '@angular/core';

// Interfaces
import { RosterForceInterface, RosterForceSelectionInterface, RosterForceCategoryInterface } from '@interfaces';

// Services
import { SelectionService } from '@services';

@Component({
  selector: 'app-roster-force',
  templateUrl: './roster-force.page.html',
  styleUrls: ['./roster-force.page.scss']
})
export class RosterForcePage {

  /**
   * Holds the roster force categories
   */
  public categories: RosterForceCategoryInterface[] = [];

  /**
   * RostersForcePage Constructor
   *
   * @param selectionService
   */
  constructor(
    public selectionService: SelectionService,
  ) { }

  /**
   * ViewDidEnter LifeCycle Hook
   */
  ionViewDidEnter() {

    this.categories = this.getCategoriesWithSelectionsAndCosts();

  }

  /**
   * Returns the force from the router's state
   */
  public getImmutableForce(): RosterForceInterface {

    return Object.assign({}, window.history.state.force);

  }

  /**
   * Returns the force's selections
   */
  public getImmutableForceSelections(): RosterForceSelectionInterface[] {

    return [...window.history.state.force.selections];

  }

  /**
   * Return the force's primary categories with their selections
   */
  public getCategoriesWithSelections(): RosterForceCategoryInterface[] {

    return this.selectionService.getSelectionsByPrimaryCategory(this.getImmutableForceSelections());

  }

  /**
   * Return the force's primary categories with their selections and Calculated Costs
   */
  public getCategoriesWithSelectionsAndCosts(): RosterForceCategoryInterface[] {

    return this.getCategoriesWithSelections().map(category => {

      category.selections = category.selections.map(selection => {

        selection.costs = this.selectionService.getCosts([selection]);

        return selection;

      });

      return category;

    });

  }
}
