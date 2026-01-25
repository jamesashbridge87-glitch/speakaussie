import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthProvider, AuthProvider } from './hooks/useAuth';
import { useOnboarding } from './hooks/useOnboarding';
import { ErrorBoundary, ToastProvider, LoadingOverlay, SkipLink } from './components/ui';
import { OnboardingFlow } from './components/onboarding';
import { PWAInstallPrompt, PWAUpdateBanner, OfflineIndicator } from './components/PWAInstallPrompt';

// Lazy load route components for code splitting
const AussieEnglishPractice = lazy(() =>
  import('./components/AussieEnglishPractice').then((module) => ({
    default: module.AussieEnglishPractice,
  }))
);

const SpeakFreePage = lazy(() =>
  import('./components/SpeakFreePage').then((module) => ({
    default: module.SpeakFreePage,
  }))
);

const SlangPage = lazy(() =>
  import('./components/slang/SlangPage').then((module) => ({
    default: module.SlangPage,
  }))
);

const NotFoundPage = lazy(() =>
  import('./components/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  }))
);

function AppContent() {
  const {
    hasCompletedOnboarding,
    completeOnboarding,
  } = useOnboarding();

  // Show onboarding for new users
  if (!hasCompletedOnboarding) {
    return (
      <OnboardingFlow
        onComplete={completeOnboarding}
        onSkip={() => completeOnboarding({
          skillLevel: 'intermediate',
          dailyGoal: 10,
          focusAreas: ['workplace'],
          industryFocus: null,
        })}
      />
    );
  }

  return (
    <Suspense fallback={<LoadingOverlay message="Loading..." />}>
      <Routes>
        <Route path="/app" element={
          <div className="app">
            <AussieEnglishPractice />
          </div>
        } />
        <Route path="/speak" element={<SpeakFreePage />} />
        <Route path="/slang" element={<SlangPage />} />
        <Route path="/" element={<Navigate to="/app" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  const auth = useAuthProvider();

  return (
    <ErrorBoundary>
      <AuthProvider value={auth}>
        <ToastProvider position="top-right">
          <BrowserRouter>
            <SkipLink targetId="main-content" />
            <PWAUpdateBanner />
            <main id="main-content">
              <AppContent />
            </main>
            <PWAInstallPrompt delay={60000} />
            <OfflineIndicator />
          </BrowserRouter>
        </ToastProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
