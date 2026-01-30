# Icon System Design

## Overview
Replace the current emoji/JPG icon system with a professional duotone icon system using brand colors.

## Design Decisions

### Style
- **Duotone** - Two-color icons for distinctive, professional look

### Color Scheme (Mixed by Category)
| Group | Primary | Secondary | Icons |
|-------|---------|-----------|-------|
| Career & Growth | Orange #FDA400 | Cyan #11E8F6 | interview, leadership, growth, finance, strategic-settler |
| Social & Culture | Pink #FF65BE | Cyan #11E8F6 | social, networking, humor, diverse, wellbeing |
| Industry/Workplace | Cyan #11E8F6 | Orange #FDA400 | healthcare, tech, construction, education, hospitality, admin |
| Daily Work | Cyan #11E8F6 | White #FFFFFF | day-to-day, meetings, phone-video, first-weeks |
| Stats & Gamification | Orange #FDA400 | White #FFFFFF | trophy, fire, star, medal, streak, XP |
| UI & Navigation | Cyan #11E8F6 | White #FFFFFF | lock, heart, speaker, question, settings |

### Background
- Transparent (no background)

### Shape
- Consistent canvas size, free-form content within

### Detail Level
- Moderate detail (works at 16-48px)

## Two-Tier System

### Tier 1: SVG Library (Lucide React)
For UI elements, stats, navigation - 28 icons
- Flame (streak), Star (XP), Trophy (level), Lock, Heart, Volume2, etc.
- Styled via CSS with brand colors
- Infinitely scalable

### Tier 2: Custom AI (Leonardo)
For unique concepts - 32 icons
- Networking, Aussie Humor, Construction, Healthcare, etc.
- Generated as duotone PNGs with transparent backgrounds

## AI Prompt Template
```
Duotone icon, [PRIMARY COLOR] and [SECONDARY COLOR],
[SUBJECT DESCRIPTION],
simple modern design, moderate detail,
solid bright green background #00FF00,
centered composition, no text,
flat design with subtle gradients,
professional app icon style
```

## Implementation Phases
1. Set up SVG icon system (Lucide React)
2. Generate custom AI icons (Leonardo)
3. Create CustomIcon component
4. Replace icons throughout app
5. Clean up old icon files

## File Structure
```
/src/components/icons/
  DuotoneIcon.tsx      # Wrapper for Lucide icons
  CustomIcon.tsx       # Wrapper for AI-generated icons
  iconColors.ts        # Color definitions by category
  index.ts             # Exports

/public/icons/
  categories/          # AI-generated category icons
  culture/             # AI-generated culture icons
```
