import { Component, createRef, ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.css';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  private errorContainerRef = createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  componentDidUpdate(_prevProps: Props, prevState: State): void {
    // When error state changes from no error to error, focus the error container
    if (this.state.hasError && !prevState.hasError) {
      this.errorContainerRef.current?.focus();
    }
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary-container">
          <div
            ref={this.errorContainerRef}
            className="error-boundary-content"
            role="alert"
            aria-live="assertive"
            tabIndex={-1}
          >
            <h1 className="error-boundary-title">Something went wrong</h1>
            <p className="error-boundary-message">
              We are sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className="error-boundary-details">
                <summary className="error-boundary-summary">Error details</summary>
                <pre className="error-boundary-error-text">{this.state.error.message}</pre>
              </details>
            )}
            <button onClick={this.handleReload} className="error-boundary-reload">
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
