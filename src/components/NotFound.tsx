import { Link } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-message">
          G'day mate! Looks like you've wandered off the beaten track.
          This page doesn't exist.
        </p>
        <Link to="/" className="not-found-link">
          Head back home
        </Link>
      </div>
    </div>
  );
}
