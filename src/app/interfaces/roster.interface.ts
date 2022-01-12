/**
 * Roster Interface
 */
export interface RosterInterface {
  id: string;
  name: string;
  system: string;
  revision: string;
  bsVersion: string;
  costLimits: RosterCostLimitInterface[];
  costs: RosterCostInterface[];
  forces: RosterForceInterface[];
}

/**
 * Cost Limit Interface
 */
export interface RosterCostLimitInterface {
  name: string;
  value: string;
}

/**
 * Cost Interface
 */
export interface RosterCostInterface {
  name: string;
  value: string;
}

/**
 * Force Interface
 */
export interface RosterForceInterface {
  name: string;
  catalogueName: string;
  catalogueRevision: string;
  rules: RosterForceRuleInterface[];
  selections: RosterForceSelectionInterface[];
}

/**
 * Force Category Interface
 */
export interface RosterForceCategoryInterface {
  name: string;
  primary: boolean;

  /**
   * This property is not part of the originally parsed roster, this is being
   * populated by the SelectionService.getPrimaryCategories() method as a convenience
   * to have all the related selections available in one place when getting the primary categories.
   */
  costs?: RosterCostInterface[];

  /**
   * This property is not part of the originally parsed roster, this is being
   * populated by the SelectionService.getPrimaryCategories() method as a convenience
   * to have all the related selections available in one place when getting the primary categories.
   */
  selections?: RosterForceSelectionInterface[];
}

/**
 * Force Rule Interface
 */
export interface RosterForceRuleInterface {
  name: string;
  description: string;
  hidden: boolean;
}

/**
 * Force Profile Interface
 */
export interface RosterForceProfileInterface {
  name: string;
  hidden: boolean;
  typeName: string;
  characteristics: RosterForceProfileCharacteristicInterface[];
}

/**
 * Force Profile Characteristic Interface
 */
export interface RosterForceProfileCharacteristicInterface {
  name: string;
  value: string;
}

/**
 * Force Selection Interface
 */
export interface RosterForceSelectionInterface {
  name: string;
  type: string;
  categories: RosterForceCategoryInterface[];
  costs: RosterCostInterface[];
  rules: RosterForceRuleInterface[];
  selections: RosterForceSelectionInterface[];
  profiles: RosterForceProfileInterface[];
}

