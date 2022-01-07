import { Injectable } from '@angular/core';

// RXJS
import { Subject } from 'rxjs';

// XMLS2JS
import * as xml2js from 'xml2js';

// Interfaces
import {
  RosterInterface,
  RosterCostLimitInterface,
  RosterCostInterface,
  RosterForceInterface,
  RosterForceRuleInterface,
  RosterForceCategoryInterface,
  RosterForceSelectionInterface,
  RosterForceProfileInterface,
  RosterForceProfileCharacteristicInterface
} from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class BattlescribeParserService {

  /**
   * Creates a FileReader instance
   */
  private fileReader: FileReader = new FileReader();

  /**
   * Creates an xml2js parser instance
   */
  private parser = new xml2js.Parser({ strict: false, trim: true });

  /**
   * BattlescribeParserService Constructor
   */
  constructor() { }

  /**
   * Maps the roster's cost limits data.
   */
  private static mapCostLimits(costLimits: any): RosterCostLimitInterface[] {

    return costLimits.map((costLimit: any) => ({
      name: costLimit.NAME,
      value: costLimit.VALUE
    }));

  }

  /**
   * Maps the roster's cost limits data.
   */
  private static mapCosts(costs: any): RosterCostInterface[] {

    return costs.map((cost: any) => ({
      name: cost.NAME,
      value: cost.VALUE
    }));

  }

  /**
   * Maps the roster's forces data.
   */
  private static mapForces(forces: any): RosterForceInterface[] {

    return forces.map((force: any) => ({
      name: force.NAME,
      catalogueName: force.CATALOGUENAME,
      catalogueRevision: force.CATALOGUEREVISION,
      categories: force.CATEGORIES ? this.mapForcesCategories(force.CATEGORIES[0].CATEGORY) : [],
      rules: force.RULES ? this.mapForcesRules(force.RULES[0].RULE) : [],
      selections: force.SELECTIONS ? this.mapForcesSelections(force.SELECTIONS[0].SELECTION) : []
    }));

  }

  /**
   * Maps the roster force's rule data.
   */
  private static mapForcesRules(rules: any): RosterForceRuleInterface[] {

    return rules.map((rule: any) => ({
      name: rule.NAME,
      description: rule.DESCRIPTION,
      hidden: rule.NAMEN
    }));

  }

  /**
   * Maps the roster force's category data.
   */
  private static mapForcesCategories(categories: any): RosterForceCategoryInterface[] {

    return categories.map((category: any) => ({
      name: category.NAME,
      primary: category.PRIMARY
    }));

  }

  /**
   * Maps the roster force's profile data.
   */
  private static mapForcesProfile(profiles: any): RosterForceProfileInterface[] {

    return profiles.map((profile: any) => ({
      name: profile.NAME,
      hidden: profile.HIDDEN,
      typeName: profile.TYPENAME,
      characteristics: profile.CHARACTERISTICS ? this.mapForcesProfileCharacteristics(profile.CHARACTERISTICS[0].CHARACTERISTIC) : [],
    }));

  }

  /**
   * Maps the roster force profile's characteristic data.
   */
  private static mapForcesProfileCharacteristics(characteristics: any): RosterForceProfileCharacteristicInterface[] {

    return characteristics.map((characteristic: any) => ({
      name: characteristic.NAME,
      value: characteristic._
    }));

  }

  /**
   * Maps the roster force's selection data.
   */
  private static mapForcesSelections(selections: any): RosterForceSelectionInterface[] {

    return selections.map((selection: any) => ({
      name: selection.NAME,
      type: selection.TYPE,
      categories: selection.CATEGORIES ? this.mapForcesCategories(selection.CATEGORIES[0].CATEGORY) : [],
      costs: this.mapCosts(selection.COSTS[0].COST),
      rules: selection.RULES ? this.mapForcesRules(selection.RULES[0].RULE) : [],
      selections: selection.SELECTIONS ? this.mapForcesSelections(selection.SELECTIONS[0].SELECTION) : [],
      profiles: selection.PROFILES ? this.mapForcesProfile(selection.PROFILES[0].PROFILE) : [],
    }));

  }

  /**
   * Handles BattleScribe roster file parsing
   *
   * @param rosterFile
   * @private
   */
  public parse(rosterFile: File): Subject<RosterInterface> {

    const SUBJECT = new Subject<any>();

    // Reads the file contents as plain text
    this.fileReader.readAsText(rosterFile);

    // Once the file is loaded parse the XML into JSON
    this.fileReader.onloadend = () => {

      this.parser.parseString(this.fileReader.result, (err: any, result: any) => {

        if (err) {

          SUBJECT.error(err);

        } else {

          console.log('SELECTED ROSTER | ', result);
          SUBJECT.next(this.mapRoster(this.flattenDollarSignProperties(result.ROSTER)));
          SUBJECT.complete();

        }

      });

    };

    return SUBJECT;

  }

  /**
   * Removes all the $ signs properties from the object and append it's children to the parent
   *
   * @param item
   */
  private flattenDollarSignProperties(item: { [key: string]: any } | any[]): { [key: string]: any } | any[] {

    if (typeof item === 'object' && item !== null) {

      let mappedItem = {};

      // Loop through the object properties
      Object.keys(item).forEach((key: string) => {

        // If the property starts with a $ sign
        if (key === '$' && !Array.isArray(item[key])) {

          // Add the contents of the property to the parent
          mappedItem = Object.assign(mappedItem, item[key]);

        } else {

          // Copy the property to the new object
          mappedItem[key] = !Array.isArray(item[key]) ? item[key] : item[key].map((i: any) => this.flattenDollarSignProperties(i));

        }

      });

      return mappedItem;

    }

    // Return the item if it's not an object
    return item;

  }

  /**
   * Maps the roster data to a format that can be consumed by the application
   */
  private mapRoster(roster: any): RosterInterface {

    const ROSTER = {
      id: roster.ID,
      name: roster.NAME,
      system: roster.GAMESYSTEMNAME,
      revision: roster.GAMESYSTEMREVISION,
      bsVersion: roster.BATTLESCRIBEVERSION,
      costLimits: BattlescribeParserService.mapCostLimits(roster.COSTLIMITS[0].COSTLIMIT),
      costs: BattlescribeParserService.mapCosts(roster.COSTS[0].COST),
      forces: BattlescribeParserService.mapForces(roster.FORCES[0].FORCE)
    };

    return ROSTER;

  }
}
