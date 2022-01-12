import { Injectable } from '@angular/core';

// Interfaces
import { RosterCostInterface, RosterForceSelectionInterface, RosterForceCategoryInterface } from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  /**
   * ForceService Constructor.
   */
  constructor() { }

  /**
   * Compiles a list of primary categories and their children selections from a selections array.
   *
   * @param selections
   */
  public getSelectionsByPrimaryCategory(selections: RosterForceSelectionInterface[]): RosterForceCategoryInterface[] {

    const CATEGORIES: RosterForceCategoryInterface[] = [];

    selections.forEach((selection: RosterForceSelectionInterface) => {

      selection.categories.forEach((category: RosterForceCategoryInterface) => {

        const CATEGORY_INDEX: number = CATEGORIES.findIndex((c: RosterForceCategoryInterface) => c.name === category.name);

        if (CATEGORY_INDEX === -1 && category.primary) {

          CATEGORIES.push(Object.assign({}, category, { selections: [selection] }));

        } else if (CATEGORY_INDEX > -1) {

          CATEGORIES[CATEGORY_INDEX].selections.push(selection);

        }

      });

    });

    return CATEGORIES;

  }

  /**
   * Calculates the total cost of a force based on the selection's individual costs .
   *
   * @param selections
   * @param costs
   */
  public getCosts(selections: RosterForceSelectionInterface[], costs?: RosterCostInterface[]): RosterCostInterface[] {

    // Initialize the total costs array
    let total: RosterCostInterface[] = costs && costs.length ? [...costs] : [];

    // Loop through the selections
    [...selections].forEach((selection: RosterForceSelectionInterface) => {

      // Loop through the costs
      selection.costs.forEach((cost: RosterCostInterface) => {

        total = this.addCosts(cost, total);

      });

      // If the selection has a sub-selection, add the costs of the sub-selection
      if (selection.selections && selection.selections.length) {

        total = this.getCosts(selection.selections, total);

      }

    });

    return total;

  }

  /**
   * Adds the cost object to the total costs array.
   *
   * @param cost
   * @param currentTotal
   */
  private addCosts(cost: RosterCostInterface, currentTotal: RosterCostInterface[]): RosterCostInterface[] {

    // Find an existing cost with the same name
    const COST_EXIST = currentTotal.findIndex((c: RosterCostInterface) => c.name === cost.name);

    if (COST_EXIST === -1) {

      return [...currentTotal, cost];

    } else {

      currentTotal[COST_EXIST].value = (parseFloat(currentTotal[COST_EXIST].value) + parseFloat(cost.value)).toString();
      return [...currentTotal];

    }

  }
}
