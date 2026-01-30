import { Router, Response, Request } from 'express';
import { db } from '../db/database.js';

const router = Router();

// Simple auth check for admin routes using API key
function adminAuth(req: Request, res: Response, next: () => void): void {
  const apiKey = req.headers['x-admin-api-key'];
  if (apiKey !== process.env.ADMIN_API_KEY) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  next();
}

// GET /admin/usage/summary - Get overall usage statistics
router.get('/usage/summary', adminAuth, (_req: Request, res: Response) => {
  try {
    // Total users
    const usersResult = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };

    // Active subscriptions by plan
    const subscriptionsResult = db.prepare(`
      SELECT plan, COUNT(*) as count
      FROM subscriptions
      WHERE status = 'active'
      GROUP BY plan
    `).all() as { plan: string; count: number }[];

    // Today's usage
    const today = new Date().toISOString().split('T')[0];
    const todayUsageResult = db.prepare(`
      SELECT
        COUNT(DISTINCT user_id) as active_users,
        COALESCE(SUM(minutes_used), 0) as total_minutes,
        COALESCE(SUM(sessions_count), 0) as total_sessions
      FROM usage_records
      WHERE date = ?
    `).get(today) as { active_users: number; total_minutes: number; total_sessions: number };

    // This month's usage
    const firstOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      .toISOString()
      .split('T')[0];
    const monthUsageResult = db.prepare(`
      SELECT
        COUNT(DISTINCT user_id) as active_users,
        COALESCE(SUM(minutes_used), 0) as total_minutes,
        COALESCE(SUM(sessions_count), 0) as total_sessions
      FROM usage_records
      WHERE date >= ?
    `).get(firstOfMonth) as { active_users: number; total_minutes: number; total_sessions: number };

    res.json({
      timestamp: new Date().toISOString(),
      users: {
        total: usersResult.count,
      },
      subscriptions: subscriptionsResult.reduce(
        (acc, { plan, count }) => ({ ...acc, [plan]: count }),
        {}
      ),
      usage: {
        today: {
          date: today,
          activeUsers: todayUsageResult.active_users,
          totalMinutes: Math.round(todayUsageResult.total_minutes * 10) / 10,
          totalSessions: todayUsageResult.total_sessions,
        },
        thisMonth: {
          startDate: firstOfMonth,
          activeUsers: monthUsageResult.active_users,
          totalMinutes: Math.round(monthUsageResult.total_minutes * 10) / 10,
          totalSessions: monthUsageResult.total_sessions,
        },
      },
    });
  } catch (error) {
    console.error('Admin usage summary error:', error);
    res.status(500).json({ error: 'Failed to get usage summary' });
  }
});

// GET /admin/usage/daily - Get daily usage breakdown (last 30 days)
router.get('/usage/daily', adminAuth, (req: Request, res: Response) => {
  try {
    const days = parseInt(req.query.days as string) || 30;

    const result = db.prepare(`
      SELECT
        date,
        COUNT(DISTINCT user_id) as active_users,
        COALESCE(SUM(minutes_used), 0) as total_minutes,
        COALESCE(SUM(sessions_count), 0) as total_sessions
      FROM usage_records
      WHERE date >= date('now', '-' || ? || ' days')
      GROUP BY date
      ORDER BY date DESC
    `).all(days) as {
      date: string;
      active_users: number;
      total_minutes: number;
      total_sessions: number;
    }[];

    res.json({
      timestamp: new Date().toISOString(),
      days,
      data: result.map((r) => ({
        date: r.date,
        activeUsers: r.active_users,
        totalMinutes: Math.round(r.total_minutes * 10) / 10,
        totalSessions: r.total_sessions,
      })),
    });
  } catch (error) {
    console.error('Admin daily usage error:', error);
    res.status(500).json({ error: 'Failed to get daily usage' });
  }
});

// GET /admin/usage/top-users - Get top users by usage
router.get('/usage/top-users', adminAuth, (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 20;

    const result = db.prepare(`
      SELECT
        u.id,
        u.email,
        s.plan,
        COALESCE(SUM(ur.minutes_used), 0) as total_minutes,
        COALESCE(SUM(ur.sessions_count), 0) as total_sessions
      FROM users u
      LEFT JOIN subscriptions s ON u.id = s.user_id AND s.status = 'active'
      LEFT JOIN usage_records ur ON u.id = ur.user_id
      GROUP BY u.id
      ORDER BY total_minutes DESC
      LIMIT ?
    `).all(limit) as {
      id: string;
      email: string;
      plan: string | null;
      total_minutes: number;
      total_sessions: number;
    }[];

    res.json({
      timestamp: new Date().toISOString(),
      limit,
      users: result.map((r) => ({
        id: r.id,
        email: r.email,
        plan: r.plan || 'free',
        totalMinutes: Math.round(r.total_minutes * 10) / 10,
        totalSessions: r.total_sessions,
      })),
    });
  } catch (error) {
    console.error('Admin top users error:', error);
    res.status(500).json({ error: 'Failed to get top users' });
  }
});

export default router;
