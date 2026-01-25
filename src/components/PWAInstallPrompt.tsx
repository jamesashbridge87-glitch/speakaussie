/**
 * PWA Install Prompt Component
 * Shows install banner for installable PWA
 */

import { useState, useEffect } from 'react';
import { usePWA } from '../hooks/usePWA';
import './PWAInstallPrompt.css';

interface PWAInstallPromptProps {
  delay?: number; // Delay before showing prompt (ms)
  dismissable?: boolean;
  storageKey?: string;
}

export function PWAInstallPrompt({
  delay = 30000, // Show after 30 seconds by default
  dismissable = true,
  storageKey = 'pwa-install-dismissed',
}: PWAInstallPromptProps) {
  const { isInstallable, isInstalled, isIOS, promptInstall } = usePWA();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  // Check if user previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem(storageKey);
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      // Re-show after 7 days
      if (Date.now() - dismissedAt > 7 * 24 * 60 * 60 * 1000) {
        localStorage.removeItem(storageKey);
      } else {
        setIsDismissed(true);
      }
    }
  }, [storageKey]);

  // Show prompt after delay
  useEffect(() => {
    if (!isInstallable || isInstalled || isDismissed) {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInstallable, isInstalled, isDismissed, delay]);

  const handleInstall = async () => {
    setIsInstalling(true);
    const installed = await promptInstall();
    setIsInstalling(false);

    if (installed) {
      setIsVisible(false);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    if (dismissable) {
      localStorage.setItem(storageKey, Date.now().toString());
    }
  };

  // Don't render if not visible or already installed
  if (!isVisible || isInstalled) {
    return null;
  }

  // Show iOS-specific instructions
  if (isIOS) {
    return (
      <div className="pwa-install-prompt pwa-install-prompt-ios" role="dialog" aria-labelledby="pwa-install-title">
        <div className="pwa-install-content">
          <button
            className="pwa-install-close"
            onClick={handleDismiss}
            aria-label="Close install prompt"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="pwa-install-icon">
            <img src="/icon-192.png" alt="" width="48" height="48" />
          </div>

          <h3 id="pwa-install-title" className="pwa-install-title">
            Install SpeakAussie
          </h3>

          <p className="pwa-install-description">
            Install this app on your device for the best experience:
          </p>

          <ol className="pwa-install-steps">
            <li>
              Tap the Share button
              <svg className="pwa-share-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </li>
            <li>Scroll down and tap "Add to Home Screen"</li>
          </ol>
        </div>
      </div>
    );
  }

  // Standard install prompt for other browsers
  return (
    <div className="pwa-install-prompt" role="dialog" aria-labelledby="pwa-install-title">
      <div className="pwa-install-content">
        <button
          className="pwa-install-close"
          onClick={handleDismiss}
          aria-label="Close install prompt"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="pwa-install-icon">
          <img src="/icon-192.png" alt="" width="48" height="48" />
        </div>

        <div className="pwa-install-text">
          <h3 id="pwa-install-title" className="pwa-install-title">
            Install SpeakAussie
          </h3>
          <p className="pwa-install-description">
            Get quick access and practice offline!
          </p>
        </div>

        <div className="pwa-install-actions">
          <button
            className="pwa-install-btn pwa-install-btn-secondary"
            onClick={handleDismiss}
          >
            Not Now
          </button>
          <button
            className="pwa-install-btn pwa-install-btn-primary"
            onClick={handleInstall}
            disabled={isInstalling}
          >
            {isInstalling ? 'Installing...' : 'Install'}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Update Available Banner
 */
export function PWAUpdateBanner() {
  const { isUpdateAvailable, updateServiceWorker } = usePWA();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isUpdateAvailable) {
      setIsVisible(true);
    }
  }, [isUpdateAvailable]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="pwa-update-banner" role="alert">
      <p className="pwa-update-text">
        A new version is available!
      </p>
      <button
        className="pwa-update-btn"
        onClick={updateServiceWorker}
      >
        Update Now
      </button>
      <button
        className="pwa-update-dismiss"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss update notification"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

/**
 * Offline Indicator
 */
export function OfflineIndicator() {
  const { isOnline, wasOffline } = usePWA();
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    if (isOnline && wasOffline) {
      setShowReconnected(true);
      const timer = setTimeout(() => setShowReconnected(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (isOnline && !showReconnected) {
    return null;
  }

  return (
    <div
      className={`pwa-offline-indicator ${isOnline ? 'pwa-online' : 'pwa-offline'}`}
      role="status"
      aria-live="polite"
    >
      {isOnline ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>Back online</span>
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
          <span>You're offline</span>
        </>
      )}
    </div>
  );
}

export default PWAInstallPrompt;
