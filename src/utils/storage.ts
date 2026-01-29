/**
 * Safe localStorage wrapper with in-memory fallback
 * Handles cases where localStorage is unavailable (private browsing, disabled, etc.)
 */

// In-memory fallback storage
const memoryStorage: Record<string, string> = {};

/**
 * Check if localStorage is available
 */
function isLocalStorageAvailable(): boolean {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const storageAvailable = isLocalStorageAvailable();

/**
 * Safely get an item from localStorage with in-memory fallback
 * @param key - The storage key
 * @returns The stored value or null if not found
 */
export function safeGetItem(key: string): string | null {
  try {
    if (storageAvailable) {
      return localStorage.getItem(key);
    }
    return memoryStorage[key] ?? null;
  } catch (error) {
    console.warn(`Failed to get item from storage: ${key}`, error);
    return memoryStorage[key] ?? null;
  }
}

/**
 * Safely set an item in localStorage with in-memory fallback
 * @param key - The storage key
 * @param value - The value to store
 * @returns true if successful, false otherwise
 */
export function safeSetItem(key: string, value: string): boolean {
  try {
    if (storageAvailable) {
      localStorage.setItem(key, value);
    }
    memoryStorage[key] = value;
    return true;
  } catch (error) {
    console.warn(`Failed to set item in storage: ${key}`, error);
    memoryStorage[key] = value;
    return false;
  }
}

/**
 * Safely remove an item from localStorage with in-memory fallback
 * @param key - The storage key
 * @returns true if successful, false otherwise
 */
export function safeRemoveItem(key: string): boolean {
  try {
    if (storageAvailable) {
      localStorage.removeItem(key);
    }
    delete memoryStorage[key];
    return true;
  } catch (error) {
    console.warn(`Failed to remove item from storage: ${key}`, error);
    delete memoryStorage[key];
    return false;
  }
}
