import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthProvider, AuthProvider } from './hooks/useAuth';
import { AussieEnglishPractice } from './components/AussieEnglishPractice';
import { LoadingSpinner } from './components/LoadingSpinner';

// Lazy load route components for code-splitting
const SlangPage = lazy(() => import('./components/slang/SlangPage'));
const WorkplacePage = lazy(() => import('./components/workplace/WorkplacePage'));
const SituationPage = lazy(() => import('./components/workplace/SituationPage'));
const SpeakFreePage = lazy(() => import('./components/SpeakFreePage'));
const UnifiedDashboard = lazy(() => import('./components/UnifiedDashboard'));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/app" element={
        <div className="app">
          <AussieEnglishPractice />
        </div>
      } />
      <Route path="/speak" element={
        <Suspense fallback={<LoadingSpinner />}>
          <SpeakFreePage />
        </Suspense>
      } />
      <Route path="/slang" element={
        <Suspense fallback={<LoadingSpinner />}>
          <SlangPage />
        </Suspense>
      } />
      <Route path="/workplace" element={
        <Suspense fallback={<LoadingSpinner />}>
          <WorkplacePage />
        </Suspense>
      } />
      <Route path="/workplace/:situation" element={
        <Suspense fallback={<LoadingSpinner />}>
          <SituationPage />
        </Suspense>
      } />
      <Route path="/stats" element={
        <Suspense fallback={<LoadingSpinner />}>
          <UnifiedDashboard />
        </Suspense>
      } />
      <Route path="/" element={<Navigate to="/app" replace />} />
      <Route path="*" element={<Navigate to="/app" replace />} />
    </Routes>
  );
}

function App() {
  const auth = useAuthProvider();

  return (
    <AuthProvider value={auth}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
