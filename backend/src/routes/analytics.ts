import { Router, Request, Response } from 'express';

const router = Router();

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
  timestamp: string;
}

interface AnalyticsPayload {
  sessionId: string;
  events: AnalyticsEvent[];
}

// POST /analytics/events - Receive analytics events
router.post('/events', (req: Request, res: Response) => {
  try {
    const payload = req.body as AnalyticsPayload;

    // Validate payload
    if (!payload.sessionId || !Array.isArray(payload.events)) {
      res.status(400).json({ error: 'Invalid payload' });
      return;
    }

    // Log events for now (can add database storage later)
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Analytics] Session ${payload.sessionId.slice(0, 8)}:`,
        payload.events.map(e => e.name).join(', '));
    }

    // In production, you could store these in a database or forward to an analytics service
    // For now, just acknowledge receipt
    res.status(200).json({ received: payload.events.length });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to process analytics' });
  }
});

export default router;
