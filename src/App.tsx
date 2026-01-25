import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthProvider, AuthProvider } from './hooks/useAuth';
import { useOnboarding } from './hooks/useOnboarding';
import { ErrorBoundary, ToastProvider } from './components/ui';
import { OnboardingFlow } from './components/onboarding';
import { AussieEnglishPractice } from './components/AussieEnglishPractice';
import { SpeakFreePage } from './components/SpeakFreePage';
import { SlangPage } from './components/slang/SlangPage';
import { NotFoundPage } from './components/NotFoundPage';

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
  );
}

function App() {
  const auth = useAuthProvider();

  return (
    <ErrorBoundary>
      <AuthProvider value={auth}>
        <ToastProvider position="top-right">
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </ToastProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
