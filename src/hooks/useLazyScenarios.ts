/**
 * Lazy Loading Hook for Scenarios
 * Provides on-demand loading of scenarios by category with caching
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Scenario, ScenarioCategory } from '../data/scenarios';

interface ScenarioCache {
  all: Scenario[] | null;
  byCategory: Map<ScenarioCategory, Scenario[]>;
  lastFetch: number;
}

interface UseLazyScenariosReturn {
  scenarios: Scenario[];
  isLoading: boolean;
  error: Error | null;
  loadAllScenarios: () => Promise<Scenario[]>;
  loadScenariosByCategory: (category: ScenarioCategory) => Promise<Scenario[]>;
  getScenarioById: (id: string) => Promise<Scenario | undefined>;
  prefetchCategory: (category: ScenarioCategory) => void;
  clearCache: () => void;
}

// Module-level cache for scenarios (shared across all instances)
const scenarioCache: ScenarioCache = {
  all: null,
  byCategory: new Map(),
  lastFetch: 0,
};

// Cache duration: 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;

// Lazy import the scenarios module
const loadScenariosModule = () => import('../data/scenarios');

export function useLazyScenarios(): UseLazyScenariosReturn {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const loadingPromiseRef = useRef<Promise<Scenario[]> | null>(null);

  // Check if cache is valid
  const isCacheValid = useCallback((): boolean => {
    return Date.now() - scenarioCache.lastFetch < CACHE_DURATION;
  }, []);

  // Load all scenarios
  const loadAllScenarios = useCallback(async (): Promise<Scenario[]> => {
    // Return from cache if valid
    if (scenarioCache.all && isCacheValid()) {
      setScenarios(scenarioCache.all);
      return scenarioCache.all;
    }

    // Avoid duplicate requests
    if (loadingPromiseRef.current) {
      return loadingPromiseRef.current;
    }

    setIsLoading(true);
    setError(null);

    loadingPromiseRef.current = (async () => {
      try {
        const module = await loadScenariosModule();
        const loadedScenarios = module.scenarios;

        // Update cache
        scenarioCache.all = loadedScenarios;
        scenarioCache.lastFetch = Date.now();

        setScenarios(loadedScenarios);
        return loadedScenarios;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load scenarios');
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
        loadingPromiseRef.current = null;
      }
    })();

    return loadingPromiseRef.current;
  }, [isCacheValid]);

  // Load scenarios by category
  const loadScenariosByCategory = useCallback(
    async (category: ScenarioCategory): Promise<Scenario[]> => {
      // Return from category cache if valid
      if (scenarioCache.byCategory.has(category) && isCacheValid()) {
        const cached = scenarioCache.byCategory.get(category)!;
        setScenarios(cached);
        return cached;
      }

      // If we have all scenarios cached, filter from there
      if (scenarioCache.all && isCacheValid()) {
        const filtered = scenarioCache.all.filter((s) => s.category === category);
        scenarioCache.byCategory.set(category, filtered);
        setScenarios(filtered);
        return filtered;
      }

      setIsLoading(true);
      setError(null);

      try {
        const module = await loadScenariosModule();
        const allScenarios = module.scenarios;

        // Update main cache
        scenarioCache.all = allScenarios;
        scenarioCache.lastFetch = Date.now();

        // Filter and cache by category
        const filtered = allScenarios.filter((s) => s.category === category);
        scenarioCache.byCategory.set(category, filtered);

        setScenarios(filtered);
        return filtered;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load scenarios');
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [isCacheValid]
  );

  // Get a single scenario by ID
  const getScenarioById = useCallback(
    async (id: string): Promise<Scenario | undefined> => {
      // Check cache first
      if (scenarioCache.all && isCacheValid()) {
        return scenarioCache.all.find((s) => s.id === id);
      }

      // Load all scenarios and find
      const allScenarios = await loadAllScenarios();
      return allScenarios.find((s) => s.id === id);
    },
    [loadAllScenarios, isCacheValid]
  );

  // Prefetch a category in the background
  const prefetchCategory = useCallback(
    (category: ScenarioCategory): void => {
      // Only prefetch if not already cached
      if (!scenarioCache.byCategory.has(category) || !isCacheValid()) {
        // Load in background without affecting loading state
        loadScenariosModule().then((module) => {
          const filtered = module.scenarios.filter((s) => s.category === category);
          scenarioCache.byCategory.set(category, filtered);
          scenarioCache.all = module.scenarios;
          scenarioCache.lastFetch = Date.now();
        });
      }
    },
    [isCacheValid]
  );

  // Clear cache
  const clearCache = useCallback((): void => {
    scenarioCache.all = null;
    scenarioCache.byCategory.clear();
    scenarioCache.lastFetch = 0;
    setScenarios([]);
  }, []);

  return {
    scenarios,
    isLoading,
    error,
    loadAllScenarios,
    loadScenariosByCategory,
    getScenarioById,
    prefetchCategory,
    clearCache,
  };
}

/**
 * Hook for prefetching scenarios on mount
 * Use this in parent components to warm up the cache
 */
export function usePrefetchScenarios(categories?: ScenarioCategory[]): void {
  useEffect(() => {
    // Prefetch after a small delay to not block initial render
    const timer = setTimeout(() => {
      loadScenariosModule().then((module) => {
        scenarioCache.all = module.scenarios;
        scenarioCache.lastFetch = Date.now();

        // If specific categories provided, cache those too
        if (categories) {
          categories.forEach((category) => {
            const filtered = module.scenarios.filter((s) => s.category === category);
            scenarioCache.byCategory.set(category, filtered);
          });
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}

/**
 * Utility to get cached scenarios synchronously
 * Returns null if not cached
 */
export function getCachedScenarios(): Scenario[] | null {
  if (scenarioCache.all && Date.now() - scenarioCache.lastFetch < CACHE_DURATION) {
    return scenarioCache.all;
  }
  return null;
}

/**
 * Utility to get cached scenarios by category synchronously
 * Returns null if not cached
 */
export function getCachedScenariosByCategory(
  category: ScenarioCategory
): Scenario[] | null {
  if (
    scenarioCache.byCategory.has(category) &&
    Date.now() - scenarioCache.lastFetch < CACHE_DURATION
  ) {
    return scenarioCache.byCategory.get(category) || null;
  }
  return null;
}
