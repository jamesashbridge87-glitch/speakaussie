import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-illustration">
          <span className="not-found-emoji">🦘</span>
          <span className="not-found-code">404</span>
        </div>

        <h1 className="not-found-title">Crikey! Page not found</h1>

        <p className="not-found-message">
          Looks like this page has hopped away like a kangaroo!
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="not-found-suggestions">
          <p className="not-found-suggestions-title">Here's what you can do:</p>
          <ul className="not-found-suggestions-list">
            <li>Check the URL for typos</li>
            <li>Head back to the practice area</li>
            <li>Learn some Aussie slang while you're here</li>
          </ul>
        </div>

        <div className="not-found-actions">
          <Link to="/app" className="not-found-btn not-found-btn-primary">
            Start Practicing
          </Link>
          <Link to="/slang" className="not-found-btn not-found-btn-secondary">
            Learn Slang
          </Link>
        </div>

        <div className="not-found-fun-fact">
          <span className="fun-fact-icon">💡</span>
          <p className="fun-fact-text">
            <strong>Aussie Tip:</strong> When something goes missing in Australia,
            we say it's "gone walkabout" - just like this page!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
