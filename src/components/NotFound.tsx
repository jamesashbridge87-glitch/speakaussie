import { Link } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.message}>
          G'day mate! Looks like you've wandered off the beaten track.
          This page doesn't exist.
        </p>
        <Link to="/" style={styles.link} className="not-found-link">
          Head back home
        </Link>
      </div>
    </div>
  );
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
  code: {
    fontSize: '96px',
    fontWeight: 'bold',
    margin: '0 0 16px 0',
    color: '#FF65BE',
    lineHeight: 1,
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#ffffff',
  },
  message: {
    fontSize: '16px',
    marginBottom: '32px',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.5,
  },
  link: {
    display: 'inline-block',
    backgroundColor: '#FF65BE',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};
