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
  value: number;
}

/**
 * Cost Interface
 */
export interface RosterCostInterface {
  name: string;
  value: number;
}

/**
 * Force Interface
 */
export interface RosterForceInterface {
  name: string;
  catalogueName: string;
  rules: RosterForceRuleInterface[];
  selections: RosterForceSelectionInterface[];
}

/**
 * Force Category Interface
 */
export interface RosterForceCategoryInterface {
  name: string;
  primary: boolean;
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
  category: RosterForceCategoryInterface[];
  cost: RosterCostInterface[];
  rules: RosterForceRuleInterface[];
  selections: RosterForceSelectionInterface[];
  profiles: RosterForceProfileInterface[];
}

