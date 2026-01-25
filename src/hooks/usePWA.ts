/**
 * PWA Hooks
 * Service worker registration, install prompts, and offline detection
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Service Worker Registration State
 */
interface ServiceWorkerState {
  isSupported: boolean;
  isRegistered: boolean;
  isUpdateAvailable: boolean;
  registration: ServiceWorkerRegistration | null;
  error: Error | null;
}

/**
 * Hook for Service Worker Registration
 */
export function useServiceWorker() {
  const [state, setState] = useState<ServiceWorkerState>({
    isSupported: 'serviceWorker' in navigator,
    isRegistered: false,
    isUpdateAvailable: false,
    registration: null,
    error: null,
  });

  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);

  // Register service worker
  const register = useCallback(async () => {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });

      registrationRef.current = registration;

      setState((prev) => ({
        ...prev,
        isRegistered: true,
        registration,
      }));

      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;

        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (
              newWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              setState((prev) => ({
                ...prev,
                isUpdateAvailable: true,
              }));
            }
          });
        }
      });

      // Check if already updated
      if (registration.waiting) {
        setState((prev) => ({
          ...prev,
          isUpdateAvailable: true,
        }));
      }

      console.log('[PWA] Service worker registered');
    } catch (error) {
      console.error('[PWA] Service worker registration failed:', error);
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error : new Error('Registration failed'),
      }));
    }
  }, []);

  // Unregister service worker
  const unregister = useCallback(async () => {
    if (registrationRef.current) {
      await registrationRef.current.unregister();
      setState((prev) => ({
        ...prev,
        isRegistered: false,
        registration: null,
      }));
    }
  }, []);

  // Skip waiting and activate new service worker
  const update = useCallback(async () => {
    if (registrationRef.current?.waiting) {
      registrationRef.current.waiting.postMessage({ type: 'SKIP_WAITING' });

      // Reload page to use new service worker
      window.location.reload();
    }
  }, []);

  // Check for updates manually
  const checkForUpdate = useCallback(async () => {
    if (registrationRef.current) {
      await registrationRef.current.update();
    }
  }, []);

  // Register on mount
  useEffect(() => {
    register();

    // Listen for controller change (new SW activated)
    const handleControllerChange = () => {
      window.location.reload();
    };

    navigator.serviceWorker?.addEventListener(
      'controllerchange',
      handleControllerChange
    );

    return () => {
      navigator.serviceWorker?.removeEventListener(
        'controllerchange',
        handleControllerChange
      );
    };
  }, [register]);

  return {
    ...state,
    register,
    unregister,
    update,
    checkForUpdate,
  };
}

/**
 * BeforeInstallPrompt Event
 */
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

/**
 * Install Prompt State
 */
interface InstallPromptState {
  isInstallable: boolean;
  isInstalled: boolean;
  isIOS: boolean;
}

/**
 * Hook for PWA Install Prompt
 */
export function useInstallPrompt() {
  const [state, setState] = useState<InstallPromptState>({
    isInstallable: false,
    isInstalled: false,
    isIOS: false,
  });

  const deferredPromptRef = useRef<BeforeInstallPromptEvent | null>(null);

  // Check if already installed
  useEffect(() => {
    // Check if running as PWA
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

    // Check if iOS
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    setState((prev) => ({
      ...prev,
      isInstalled: isStandalone,
      isIOS,
    }));

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPromptRef.current = e as BeforeInstallPromptEvent;
      setState((prev) => ({
        ...prev,
        isInstallable: true,
      }));
    };

    // Listen for app installed
    const handleAppInstalled = () => {
      deferredPromptRef.current = null;
      setState((prev) => ({
        ...prev,
        isInstallable: false,
        isInstalled: true,
      }));
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Trigger install prompt
  const promptInstall = useCallback(async (): Promise<boolean> => {
    if (!deferredPromptRef.current) {
      return false;
    }

    try {
      await deferredPromptRef.current.prompt();
      const { outcome } = await deferredPromptRef.current.userChoice;

      if (outcome === 'accepted') {
        deferredPromptRef.current = null;
        setState((prev) => ({
          ...prev,
          isInstallable: false,
        }));
        return true;
      }

      return false;
    } catch (error) {
      console.error('[PWA] Install prompt failed:', error);
      return false;
    }
  }, []);

  return {
    ...state,
    promptInstall,
  };
}

/**
 * Online/Offline Status
 */
interface OnlineState {
  isOnline: boolean;
  wasOffline: boolean;
}

/**
 * Hook for Online/Offline Detection
 */
export function useOnlineStatus() {
  const [state, setState] = useState<OnlineState>({
    isOnline: navigator.onLine,
    wasOffline: false,
  });

  useEffect(() => {
    const handleOnline = () => {
      setState((prev) => ({
        isOnline: true,
        wasOffline: !prev.isOnline,
      }));
    };

    const handleOffline = () => {
      setState({
        isOnline: false,
        wasOffline: true,
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return state;
}

/**
 * Background Sync Helper
 */
export function useBackgroundSync() {
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    navigator.serviceWorker?.ready.then((registration) => {
      registrationRef.current = registration;
    });
  }, []);

  // Request background sync
  const requestSync = useCallback(async (tag: string): Promise<boolean> => {
    if (!registrationRef.current || !('sync' in registrationRef.current)) {
      return false;
    }

    try {
      await (registrationRef.current as ServiceWorkerRegistration & {
        sync: { register: (tag: string) => Promise<void> };
      }).sync.register(tag);
      return true;
    } catch (error) {
      console.error('[PWA] Background sync registration failed:', error);
      return false;
    }
  }, []);

  // Queue progress data for sync
  const queueProgressSync = useCallback(async (data: unknown): Promise<void> => {
    // Store in IndexedDB for background sync
    const db = await openDatabase();
    const transaction = db.transaction('pending-progress', 'readwrite');
    const store = transaction.objectStore('pending-progress');

    await new Promise<void>((resolve, reject) => {
      const request = store.add({
        id: `progress-${Date.now()}`,
        data,
        timestamp: Date.now(),
      });
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });

    // Request sync
    await requestSync('progress-sync');
  }, [requestSync]);

  return {
    requestSync,
    queueProgressSync,
  };
}

// IndexedDB helper
function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('speakaussie-offline', 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('pending-progress')) {
        db.createObjectStore('pending-progress', { keyPath: 'id' });
      }
    };
  });
}

/**
 * Combined PWA Hook
 */
export function usePWA() {
  const serviceWorker = useServiceWorker();
  const installPrompt = useInstallPrompt();
  const onlineStatus = useOnlineStatus();
  const backgroundSync = useBackgroundSync();

  return {
    // Service Worker
    isServiceWorkerSupported: serviceWorker.isSupported,
    isServiceWorkerRegistered: serviceWorker.isRegistered,
    isUpdateAvailable: serviceWorker.isUpdateAvailable,
    updateServiceWorker: serviceWorker.update,
    checkForUpdate: serviceWorker.checkForUpdate,

    // Install
    isInstallable: installPrompt.isInstallable,
    isInstalled: installPrompt.isInstalled,
    isIOS: installPrompt.isIOS,
    promptInstall: installPrompt.promptInstall,

    // Online Status
    isOnline: onlineStatus.isOnline,
    wasOffline: onlineStatus.wasOffline,

    // Background Sync
    requestSync: backgroundSync.requestSync,
    queueProgressSync: backgroundSync.queueProgressSync,
  };
}
