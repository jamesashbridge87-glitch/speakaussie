import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { initializeDatabase, db } from './db/database.js';
import { version } from '../package.json' with { type: 'json' };

// Routes
import authRoutes from './routes/auth.js';
import subscriptionRoutes from './routes/subscriptions.js';
import sessionRoutes from './routes/sessions.js';
import billingRoutes from './routes/billing.js';
import voiceRoutes from './routes/voice.js';
import adminRoutes from './routes/admin.js';

// Error handling
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize database
initializeDatabase();

// Security middleware
app.use(helmet());

// CORS configuration - allow production and development origins
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://youraussieuncle.io',
  'https://www.youraussieuncle.io',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(null, true); // Allow anyway for now, log for debugging
    }
  },
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again later' },
});
app.use(limiter);

// Stripe webhook needs raw body
app.use('/api/billing/webhook', express.raw({ type: 'application/json' }));

// Parse JSON for other routes
app.use(express.json());

// Health check - verifies service health
app.get('/health', (_req, res) => {
  const checks: Record<string, { status: 'ok' | 'error'; message?: string }> = {};
  let overallStatus: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';

  // Check database connectivity
  try {
    db.prepare('SELECT 1').get();
    checks.database = { status: 'ok' };
  } catch (err) {
    checks.database = {
      status: 'error',
      message: err instanceof Error ? err.message : 'Database unavailable',
    };
    overallStatus = 'unhealthy';
  }

  // Check if external services are configured (degraded if not)
  const externalServices = {
    stripe: !!process.env.STRIPE_SECRET_KEY,
    anthropic: !!process.env.ANTHROPIC_API_KEY,
    fishAudio: !!process.env.FISH_AUDIO_API_KEY,
    elevenLabs: !!process.env.ELEVENLABS_AGENT_ID,
  };

  const missingServices = Object.entries(externalServices)
    .filter(([, configured]) => !configured)
    .map(([name]) => name);

  if (missingServices.length > 0) {
    checks.externalServices = {
      status: 'error',
      message: `Missing: ${missingServices.join(', ')}`,
    };
    if (overallStatus === 'healthy') {
      overallStatus = 'degraded';
    }
  } else {
    checks.externalServices = { status: 'ok' };
  }

  const statusCode = overallStatus === 'unhealthy' ? 503 : 200;
  res.status(statusCode).json({
    status: overallStatus,
    version,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    checks,
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/voice', voiceRoutes);
app.use('/api/admin', adminRoutes);

// 404 handler
app.use(notFoundHandler);

// Global error handler (must be last middleware)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════╗
║   Aussie English Practice Backend                  ║
║   Server running on http://localhost:${PORT}          ║
╚════════════════════════════════════════════════════╝
  `);
});

export default app;
