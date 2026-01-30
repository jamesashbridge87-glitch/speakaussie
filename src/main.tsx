import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { initSentry } from './lib/sentry';
import { trackSessionStart, trackPageView } from './lib/analytics';
import './styles/variables.css';
import './index.css';

// Initialize error tracking before rendering
initSentry();

// Initialize analytics
trackSessionStart();
trackPageView();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
