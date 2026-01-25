import { useState } from 'react';
import { categories, getScenariosByCategory, Scenario, ScenarioCategory } from '../data/scenarios';
import './ScenarioSelector.css';

interface ScenarioSelectorProps {
  onSelectScenario: (scenario: Scenario) => void;
  onSelectCustom?: () => void;
  disabled?: boolean;
}

export function ScenarioSelector({ onSelectScenario, onSelectCustom, disabled = false }: ScenarioSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<ScenarioCategory | null>(null);

  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  const handleCategoryClick = (category: ScenarioCategory) => {
    if (category === 'custom' && onSelectCustom) {
      onSelectCustom();
    } else {
      setSelectedCategory(category);
    }
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  const handleScenarioClick = (scenario: Scenario) => {
    onSelectScenario(scenario);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#22c55e';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  // Show categories
  if (!selectedCategory) {
    return (
      <div className="scenario-selector">
        <h3>Your Workplace Journey</h3>
        <p className="selector-subtitle">From interview to thriving in your role</p>

        <div className="category-grid">
          {sortedCategories.map((category) => {
            const isCustom = category.id === 'custom';
            const scenarioCount = getScenariosByCategory(category.id).length;
            return (
              <button
                key={category.id}
                className={`category-card ${isCustom ? 'custom-category' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
                disabled={disabled}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-title">{category.title}</span>
                <span className="category-description">{category.description}</span>
                <span className="category-count">
                  {isCustom ? 'Your job details' : `${scenarioCount} scenario${scenarioCount !== 1 ? 's' : ''}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Show scenarios in selected category
  const categoryInfo = categories.find(c => c.id === selectedCategory);
  const categoryScenarios = getScenariosByCategory(selectedCategory);

  return (
    <div className="scenario-selector">
      <button className="back-button" onClick={handleBack} disabled={disabled}>
        ← Back to categories
      </button>

      <div className="category-header">
        <span className="category-header-icon">{categoryInfo?.icon}</span>
        <div>
          <h3>{categoryInfo?.title}</h3>
          <p className="selector-subtitle">{categoryInfo?.description}</p>
        </div>
      </div>

      <div className="scenario-list">
        {categoryScenarios.map((scenario) => (
          <button
            key={scenario.id}
            className="scenario-card"
            onClick={() => handleScenarioClick(scenario)}
            disabled={disabled}
          >
            <div className="scenario-card-header">
              <span className="scenario-icon">{scenario.icon}</span>
              <div className="scenario-meta">
                <span
                  className="difficulty-badge"
                  style={{ backgroundColor: getDifficultyColor(scenario.difficulty) }}
                >
                  {scenario.difficulty}
                </span>
                <span className="duration">{scenario.durationMinutes} min</span>
              </div>
            </div>
            <span className="scenario-title">{scenario.title}</span>
            <span className="scenario-description">{scenario.shortDescription}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
