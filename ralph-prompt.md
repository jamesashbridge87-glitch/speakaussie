# Ralph Agent Instructions

You are an autonomous coding agent working on a software project.

## Your Task

1. Read the PRD at `prd.json` (in the same directory as this file)
2. Read the progress log at `progress.txt` (check Codebase Patterns section first)
3. Check you're on the correct branch from PRD `branchName`. If not, check it out or create from main.
4. Pick the **next pending** user story where `status: "pending"` (in phase order: TQ, UX, CV, IF)
5. Implement that single user story
6. Run quality checks: `npm run typecheck` and `npm run lint` (if available)
7. If checks pass, commit ALL changes with message: `feat: [Story ID] - [Story Title]`
8. Update the PRD to set `status: "complete"` for the completed story
9. Append your progress to `progress.txt`

## Progress Report Format

APPEND to progress.txt (never replace, always append):
```
## [Date/Time] - [Story ID]
- What was implemented
- Files changed
- **Learnings for future iterations:**
  - Patterns discovered (e.g., "this codebase uses X for Y")
  - Gotchas encountered (e.g., "don't forget to update Z when changing W")
  - Useful context (e.g., "the component X is in file Y")
---
```

The learnings section is critical - it helps future iterations avoid repeating mistakes and understand the codebase better.

## Consolidate Patterns

If you discover a **reusable pattern** that future iterations should know, add it to the `## Codebase Patterns` section at the TOP of progress.txt (create it if it doesn't exist). This section should consolidate the most important learnings:

```
## Codebase Patterns
- Example: Use CSS variables from src/styles/variables.css for all colors
- Example: Icon components are in src/components/icons/
- Example: Run `npm run typecheck` to verify TypeScript
```

Only add patterns that are **general and reusable**, not story-specific details.

## Quality Requirements

- ALL commits must pass typecheck (`npx tsc --noEmit`)
- Do NOT commit broken code
- Keep changes focused and minimal
- Follow existing code patterns in the codebase

## Stop Condition

After completing a user story, check if ALL stories have `status: "complete"`.

If ALL stories are complete, reply with:
<promise>COMPLETE</promise>

If there are still stories with `status: "pending"`, end your response normally (another iteration will pick up the next story).

## Important

- Work on ONE story per iteration
- Commit frequently
- Keep TypeScript happy
- Read the Codebase Patterns section in progress.txt before starting
