import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found - SpeakAussie';
  }, []);

  return (
    <main className="not-found-container">
      <div className="not-found-content">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-message">
          G'day mate! Looks like you've wandered off the beaten track.
          This page doesn't exist.
        </p>
        <Link to="/" className="not-found-link">
          Head back home
        </Link>
      </div>
    </main>
  );
}
