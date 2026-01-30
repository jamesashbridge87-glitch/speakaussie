// Aggregated scenarios from all phases
// This file combines the base scenarios with all phase expansions

import { scenarios as baseScenarios, categories as baseCategories, type Scenario, type CategoryInfo, type ScenarioCategory } from './scenarios';
import { phase1Scenarios } from './scenarios-phase1';
import { phase2Scenarios } from './scenarios-phase2';
import { phase3Scenarios } from './scenarios-phase3';
import { phase4Scenarios } from './scenarios-phase4';
import { phase5Scenarios } from './scenarios-phase5';
import { phase6Scenarios } from './scenarios-phase6';
import { networkingScenarios } from './scenarios-networking';
import { phoneVideoScenarios } from './scenarios-phone-video';
import { leadershipScenarios } from './scenarios-leadership';
import { preArrivalScenarios } from './scenarios-pre-arrival';
import { humorScenarios } from './scenarios-humor';
import { hospitalityScenarios } from './scenarios-hospitality';
import { constructionScenarios } from './scenarios-construction';
import { educationScenarios } from './scenarios-education';
import { financeScenarios } from './scenarios-finance';
import { strategicSettlerScenarios } from './scenarios-strategic-settler';

// Combine all scenarios - fix category type casting
const fixCategories = (scenarios: Scenario[]): Scenario[] => {
  return scenarios.map(s => ({
    ...s,
    category: s.category as ScenarioCategory
  }));
};

// All scenarios combined
export const allScenarios: Scenario[] = [
  ...baseScenarios,
  ...fixCategories(phase1Scenarios),
  ...fixCategories(phase2Scenarios),
  ...fixCategories(phase3Scenarios),
  ...fixCategories(phase4Scenarios),
  ...fixCategories(phase5Scenarios),
  ...fixCategories(phase6Scenarios),
  ...fixCategories(networkingScenarios),
  ...fixCategories(phoneVideoScenarios),
  ...fixCategories(leadershipScenarios),
  ...fixCategories(preArrivalScenarios),
  ...fixCategories(humorScenarios),
  ...fixCategories(hospitalityScenarios),
  ...fixCategories(constructionScenarios),
  ...fixCategories(educationScenarios),
  ...fixCategories(financeScenarios),
  ...fixCategories(strategicSettlerScenarios),
];

// All categories combined (base categories already include new ones from update)
export const allCategories: CategoryInfo[] = baseCategories;

// Re-export helper functions that use the expanded data
export function getAllScenariosByCategory(category: ScenarioCategory): Scenario[] {
  return allScenarios.filter(s => s.category === category);
}

export function getAllScenarioById(id: string): Scenario | undefined {
  return allScenarios.find(s => s.id === id);
}

export function getAllCategoryInfo(category: ScenarioCategory): CategoryInfo | undefined {
  return allCategories.find(c => c.id === category);
}

// Summary stats
export const scenarioStats = {
  total: allScenarios.length,
  byCategory: allCategories.reduce((acc, cat) => {
    acc[cat.id] = allScenarios.filter(s => s.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>),
  categories: allCategories.length,
};
