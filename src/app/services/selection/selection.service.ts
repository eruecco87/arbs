import { Injectable } from '@angular/core';

// Interfaces
import { RosterCostInterface, RosterForceSelectionInterface } from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  /**
   * ForceService Constructor.
   */
  constructor() { }

  /**
   * Calculates the total cost of a force base on the selection's individual costs .
   *
   * @param selections
   * @param costs
   */
  public getCosts(selections: RosterForceSelectionInterface[], costs?: RosterCostInterface[]): RosterCostInterface[] {

    // Initialize the total costs array
    const TOTAL: RosterCostInterface[] = costs && costs.length ? costs : [];

    // Loop through the selections
    selections.forEach((selection: RosterForceSelectionInterface) => {

      // Loop through the costs
      selection.costs.forEach((cost: RosterCostInterface) => {

        this.addCosts(cost, TOTAL);

      });

      // If the selection has a sub-selection, add the costs of the sub-selection
      if (selection.selections && selection.selections.length) {

        this.getCosts(selection.selections, TOTAL);

      }

    });

    return TOTAL;

  }

  /**
   * Adds the cost object to the total costs array.
   *
   * @param cost
   * @param currentTotal
   */
  private addCosts(cost: RosterCostInterface, currentTotal: RosterCostInterface[]) {

    // Find an existing cost with the same name
    const COST_EXIST = currentTotal.find((c: RosterCostInterface) => c.name === cost.name);

    if (!COST_EXIST) {

      currentTotal.push(cost);

    } else {

      COST_EXIST.value = (parseFloat(COST_EXIST.value) + parseFloat(cost.value)).toString();

    }

  }
}
