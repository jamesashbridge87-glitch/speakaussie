import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
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

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={styles.container}>
          <div style={styles.content}>
            <h1 style={styles.title}>Something went wrong</h1>
            <p style={styles.message}>
              We are sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details style={styles.details}>
                <summary style={styles.summary}>Error details</summary>
                <pre style={styles.errorText}>{this.state.error.message}</pre>
              </details>
            )}
            <button onClick={this.handleReload} style={styles.button}>
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
    padding: '20px',
  },
  content: {
    maxWidth: '500px',
    textAlign: 'center',
    color: '#ffffff',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#FF65BE',
  },
  message: {
    fontSize: '16px',
    marginBottom: '24px',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.5,
  },
  details: {
    marginBottom: '24px',
    textAlign: 'left',
    backgroundColor: '#1a1a1a',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.12)',
  },
  summary: {
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '8px',
  },
  errorText: {
    fontSize: '12px',
    color: '#ff6b6b',
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    margin: 0,
    marginTop: '8px',
  },
  button: {
    backgroundColor: '#FF65BE',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
