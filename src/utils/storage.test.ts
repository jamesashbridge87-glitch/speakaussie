import { describe, it, expect, vi, beforeEach } from 'vitest';
import { safeGetItem, safeSetItem, safeRemoveItem } from './storage';

describe('storage utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset localStorage mock
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReset();
    (localStorage.setItem as ReturnType<typeof vi.fn>).mockReset();
    (localStorage.removeItem as ReturnType<typeof vi.fn>).mockReset();
  });

  describe('safeGetItem', () => {
    it('should return raw string from localStorage', () => {
      const testValue = 'some-stored-value';
      (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(testValue);

      const result = safeGetItem('test-key');

      expect(result).toBe(testValue);
      expect(localStorage.getItem).toHaveBeenCalledWith('test-key');
    });

    it('should return null when key does not exist', () => {
      (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(null);

      const result = safeGetItem('missing-key');

      expect(result).toBeNull();
    });

    it('should return JSON string as-is (caller must parse)', () => {
      const testData = { foo: 'bar', count: 42 };
      const jsonString = JSON.stringify(testData);
      (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(jsonString);

      const result = safeGetItem('json-key');

      expect(result).toBe(jsonString);
      expect(JSON.parse(result!)).toEqual(testData);
    });
  });

  describe('safeSetItem', () => {
    it('should store string value in localStorage', () => {
      safeSetItem('test-key', 'test-value');

      expect(localStorage.setItem).toHaveBeenCalledWith('test-key', 'test-value');
    });

    it('should not throw on localStorage error', () => {
      (localStorage.setItem as ReturnType<typeof vi.fn>).mockImplementation(() => {
        throw new Error('Storage full');
      });

      expect(() => safeSetItem('key', 'value')).not.toThrow();
    });
  });

  describe('safeRemoveItem', () => {
    it('should remove item from localStorage', () => {
      safeRemoveItem('test-key');

      expect(localStorage.removeItem).toHaveBeenCalledWith('test-key');
    });
  });
});
