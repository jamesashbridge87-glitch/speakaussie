import { describe, it, expect } from 'vitest';
import {
  slangData,
  categories,
  categoryNames,
  difficulties,
  difficultyNames,
  sentenceTemplates,
} from './slangData';

describe('slangData', () => {
  it('should have at least 100 slang terms', () => {
    expect(slangData.length).toBeGreaterThanOrEqual(100);
  });

  it('should have unique IDs for all terms', () => {
    const ids = slangData.map(term => term.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have valid categories for all terms', () => {
    slangData.forEach(term => {
      expect(categories).toContain(term.category);
    });
  });

  it('should have valid difficulties for all terms', () => {
    slangData.forEach(term => {
      expect(difficulties).toContain(term.difficulty);
    });
  });

  it('should have required properties for all terms', () => {
    slangData.forEach(term => {
      expect(term).toHaveProperty('id');
      expect(term).toHaveProperty('term');
      expect(term).toHaveProperty('meaning');
      expect(term).toHaveProperty('example');
      expect(term).toHaveProperty('category');
      expect(term).toHaveProperty('difficulty');
    });
  });

  it('should have non-empty strings for all required properties', () => {
    slangData.forEach(term => {
      expect(term.term.trim()).not.toBe('');
      expect(term.meaning.trim()).not.toBe('');
      expect(term.example.trim()).not.toBe('');
    });
  });
});

describe('categories', () => {
  it('should have names for all categories', () => {
    categories.forEach(category => {
      expect(categoryNames[category]).toBeDefined();
      expect(categoryNames[category].trim()).not.toBe('');
    });
  });

  it('should have at least 5 categories', () => {
    expect(categories.length).toBeGreaterThanOrEqual(5);
  });
});

describe('difficulties', () => {
  it('should have names for all difficulties', () => {
    difficulties.forEach(difficulty => {
      expect(difficultyNames[difficulty]).toBeDefined();
      expect(difficultyNames[difficulty].trim()).not.toBe('');
    });
  });

  it('should have exactly 3 difficulty levels', () => {
    expect(difficulties.length).toBe(3);
  });
});

describe('sentenceTemplates', () => {
  it('should have at least 10 sentence templates', () => {
    expect(sentenceTemplates.length).toBeGreaterThanOrEqual(10);
  });

  it('should have required properties for all templates', () => {
    sentenceTemplates.forEach(template => {
      expect(template).toHaveProperty('sentence');
      expect(template).toHaveProperty('answer');
      expect(template).toHaveProperty('hint');
    });
  });

  it('should have unique sentences for all templates', () => {
    const sentences = sentenceTemplates.map(t => t.sentence);
    const uniqueSentences = new Set(sentences);
    expect(uniqueSentences.size).toBe(sentences.length);
  });

  it('should have placeholder in sentence text', () => {
    sentenceTemplates.forEach(template => {
      expect(template.sentence).toContain('_');
    });
  });
});
