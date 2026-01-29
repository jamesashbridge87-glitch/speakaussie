import { useState, useMemo, useCallback } from 'react';
import { categories, getScenariosByCategory, Scenario, ScenarioCategory, scenarios } from '../data/scenarios';
import { useScenarioProgress } from '../hooks/useScenarioProgress';
import './ScenarioSelector.css';

interface ScenarioSelectorProps {
  onSelectScenario: (scenario: Scenario) => void;
  disabled?: boolean;
}

type FilterMode = 'all' | 'favorites' | 'review';

export function ScenarioSelector({ onSelectScenario, disabled = false }: ScenarioSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<ScenarioCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<FilterMode>('all');

  const {
    toggleFavorite,
    isFavorite,
    getFavoriteScenarios,
    isDueForReview,
    getScenariosDueForReview,
    getReviewCount,
    favoriteCount,
  } = useScenarioProgress();

  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    return scenarios.filter(
      scenario =>
        scenario.title.toLowerCase().includes(query) ||
        scenario.shortDescription.toLowerCase().includes(query) ||
        scenario.category.toLowerCase().includes(query) ||
        scenario.setting.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Clear category selection when searching
    if (e.target.value) {
      setSelectedCategory(null);
      setFilterMode('all');
    }
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const handleCategoryClick = (category: ScenarioCategory) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setFilterMode('all');
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    setFilterMode('all');
  };

  const handleScenarioClick = (scenario: Scenario) => {
    onSelectScenario(scenario);
  };

  const handleFavoriteClick = (e: React.MouseEvent, scenarioId: string) => {
    e.stopPropagation();
    toggleFavorite(scenarioId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#22c55e';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const totalReviewCount = getReviewCount();
  const favoriteScenarios = getFavoriteScenarios();
  const reviewScenarios = getScenariosDueForReview();

  // Render scenario card with favorite and review badges
  const renderScenarioCard = (scenario: Scenario) => {
    const isFav = isFavorite(scenario.id);
    const isDue = isDueForReview(scenario.id);

    return (
      <button
        key={scenario.id}
        className={`scenario-card ${isDue ? 'due-for-review' : ''}`}
        onClick={() => handleScenarioClick(scenario)}
        disabled={disabled}
      >
        <div className="scenario-card-header">
          <span className="scenario-icon">{scenario.icon}</span>
          <div className="scenario-meta">
            {isDue && (
              <span className="review-badge" title="Due for review">
                Review
              </span>
            )}
            <span
              className="difficulty-badge"
              style={{ backgroundColor: getDifficultyColor(scenario.difficulty) }}
            >
              {scenario.difficulty}
            </span>
            <span className="duration">{scenario.durationMinutes} min</span>
          </div>
        </div>
        <div className="scenario-card-content">
          <span className="scenario-title">{scenario.title}</span>
          <span className="scenario-description">{scenario.shortDescription}</span>
        </div>
        <button
          className={`favorite-btn ${isFav ? 'favorited' : ''}`}
          onClick={(e) => handleFavoriteClick(e, scenario.id)}
          aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
          title={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFav ? '\u2665' : '\u2661'}
        </button>
      </button>
    );
  };

  // Render the search box
  const renderSearchBox = () => (
    <div className="search-section">
      <div className="search-box">
        <span className="search-icon">&#128269;</span>
        <input
          type="text"
          placeholder="Search scenarios..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        {searchQuery && (
          <button className="search-clear" onClick={clearSearch}>
            &#x2715;
          </button>
        )}
      </div>
    </div>
  );

  // Render the filter tabs
  const renderFilterTabs = () => (
    <div className="filter-tabs">
      <button
        className={`filter-tab ${filterMode === 'all' ? 'active' : ''}`}
        onClick={() => setFilterMode('all')}
      >
        All
      </button>
      <button
        className={`filter-tab ${filterMode === 'favorites' ? 'active' : ''}`}
        onClick={() => setFilterMode('favorites')}
      >
        Favorites ({favoriteCount})
      </button>
      <button
        className={`filter-tab ${filterMode === 'review' ? 'active' : ''}`}
        onClick={() => setFilterMode('review')}
      >
        Review ({totalReviewCount})
      </button>
    </div>
  );

  // Show search results
  if (searchQuery && searchResults.length > 0) {
    return (
      <div className="scenario-selector">
        {renderSearchBox()}

        <div className="search-results-header">
          <span>{searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found</span>
          <button className="clear-search-btn" onClick={clearSearch}>
            Clear search
          </button>
        </div>

        <div className="scenario-list">
          {searchResults.map(renderScenarioCard)}
        </div>
      </div>
    );
  }

  // Show favorites view
  if (filterMode === 'favorites') {
    return (
      <div className="scenario-selector">
        {renderSearchBox()}
        {renderFilterTabs()}

        <h3>Your Favorites</h3>
        {favoriteScenarios.length === 0 ? (
          <div className="empty-state">
            <p>No favorites yet.</p>
            <p className="empty-hint">Tap the heart icon on any scenario to add it to your favorites.</p>
          </div>
        ) : (
          <div className="scenario-list">
            {favoriteScenarios.map(renderScenarioCard)}
          </div>
        )}
      </div>
    );
  }

  // Show review view
  if (filterMode === 'review') {
    return (
      <div className="scenario-selector">
        {renderSearchBox()}
        {renderFilterTabs()}

        <h3>Due for Review</h3>
        {reviewScenarios.length === 0 ? (
          <div className="empty-state">
            <p>No scenarios due for review.</p>
            <p className="empty-hint">Complete a scenario and rate your performance to schedule reviews.</p>
          </div>
        ) : (
          <div className="scenario-list">
            {reviewScenarios.map(renderScenarioCard)}
          </div>
        )}
      </div>
    );
  }

  // Show scenarios in selected category
  if (selectedCategory) {
    const categoryInfo = categories.find(c => c.id === selectedCategory);
    const categoryScenarios = getScenariosByCategory(selectedCategory);

    return (
      <div className="scenario-selector">
        <button className="back-button" onClick={handleBack} disabled={disabled}>
          &#x2190; Back to categories
        </button>

        <div className="category-header">
          <span className="category-header-icon">{categoryInfo?.icon}</span>
          <div>
            <h3>{categoryInfo?.title}</h3>
            <p className="selector-subtitle">{categoryInfo?.description}</p>
          </div>
        </div>

        <div className="scenario-list">
          {categoryScenarios.map(renderScenarioCard)}
        </div>
      </div>
    );
  }

  // Show categories (default view)
  return (
    <div className="scenario-selector">
      {renderSearchBox()}
      {renderFilterTabs()}

      <h3>Your Confidence Journey</h3>
      <p className="selector-subtitle">Practice real conversations. Build real confidence.</p>

      <div className="category-grid">
        {sortedCategories.map((category) => {
          const scenarioCount = getScenariosByCategory(category.id).length;
          const categoryReviewCount = getReviewCount(category.id);
          return (
            <button
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.id)}
              disabled={disabled}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-title">{category.title}</span>
              <span className="category-description">{category.description}</span>
              <div className="category-badges">
                <span className="category-count">{scenarioCount} scenario{scenarioCount !== 1 ? 's' : ''}</span>
                {categoryReviewCount > 0 && (
                  <span className="category-review-badge">{categoryReviewCount} to review</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
