"""Analytics routes for tracking frontend events."""

from typing import Optional

from fastapi import APIRouter
from loguru import logger
from pydantic import BaseModel

router = APIRouter()


class AnalyticsEvent(BaseModel):
    """Single analytics event."""

    name: str
    properties: Optional[dict] = None
    timestamp: str


class AnalyticsPayload(BaseModel):
    """Analytics payload with session and events."""

    sessionId: str
    events: list[AnalyticsEvent]


@router.post("/events")
async def receive_events(payload: AnalyticsPayload):
    """
    Receive analytics events from the frontend.

    Currently logs events for debugging. Can be extended to store
    in database or forward to analytics service.
    """
    logger.debug(
        f"Analytics: session {payload.sessionId[:8]}, "
        f"events: {[e.name for e in payload.events]}"
    )

    # In production, you could:
    # - Store in database for analysis
    # - Forward to analytics service (PostHog, Amplitude, etc.)
    # - Aggregate metrics

    return {"received": len(payload.events)}
