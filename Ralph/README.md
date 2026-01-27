# Ralph - Iterative AI Coding

Simple implementation of the Ralph Wiggum approach: run an AI agent in a loop until all tasks are complete. Ralph uses GitHub Copilot CLI to autonomously work through issues tracked in **beads (bd)**, implementing code changes, running tests, and committing work.

> **Learn more about the Ralph Wiggum pattern:**
> - [Ralph Wiggum - ghuntley.com](https://ghuntley.com/ralph/) - Original concept and philosophy
> - [Tips for AI Coding with Ralph Wiggum](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum) - Practical tips and best practices

## ⚠️ Security Warning

**The Ralph scripts use `copilot --allow-all-tools` which gives the AI unrestricted access to your machine**, including destructive commands like `rm -rf`, `git push --force`, etc.

### Restricting Dangerous Commands

Edit `ralph_once.sh` and `ralph_loop.sh` to block specific commands using `--deny-tool`:

```bash
copilot --allow-all-tools --deny-tool 'shell(rm)' --deny-tool 'shell(git push)'
```

For full details, see: [GitHub Copilot CLI Documentation](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)

---

## Prerequisites

- **GitHub Copilot CLI** must be installed and authenticated
  - See the official guide: [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
  ```bash
  # Verify installation
  copilot --version
  ```
- **beads (bd)** must be installed and initialized in your project
  - Install: [https://github.com/steveyegge/beads](https://github.com/steveyegge/beads)
  - Initialize in your project: `bd init`
  - Learn more: `bd quickstart`
- **Git** configured with access to your repositories
- **Terminal** - macOS/Linux terminal or Windows with Git Bash/WSL

## Setup

Before running Ralph, make the shell scripts executable:
```
cd Ralph
chmod +x ralph_once.sh ralph_loop.sh
```

This only needs to be done once after cloning or copying the Ralph folder.

## Files

| File | Purpose |
|------|---------|
| `prompt.md` | Agent instructions - modify for custom behaviors |
| `ralph_once.sh` | Run single iteration |
| `ralph_loop.sh` | Run iterative loop until complete |
| **Your project's `.beads/`** | beads issue database - managed by `bd` commands |

## Quick Start

### 1. Create Your Issues with beads

Navigate to your project and create issues using `bd`:

```bash
cd ../your_project  # Navigate to your project
bd init             # Initialize beads (if not already done)

# Create issues
bd create "Implement feature X" -d "Detailed description" -p 1 -t feature
bd create "Add tests for feature X" -d "Test description" -p 2 -t feature
bd create "Update documentation" -d "Doc description" -p 2 -t feature

# Add dependencies if needed (e.g., tests block on implementation)
bd dep add <test-issue-id> <implementation-issue-id>

# Check what's ready to work on
bd ready
```

**Key bd commands:**
- `bd create "Title" -d "Description" -p <priority> -t <type>` - Create an issue
  - Priority: 0 (highest) to 4 (lowest)
  - Type: feature, bug, task, etc.
- `bd dep add <dependent> <blocker>` - Add dependency (blocker must complete first)
- `bd ready` - Show issues ready to work on (no blockers)
- `bd list` - List all issues
- `bd show <id>` - View issue details

### 2. Return to Ralph and Run

**Single iteration** (one task):
```bash
./ralph_once.sh
```

**Loop mode** (continues until all tasks complete, default 10 iterations):
```bash
./ralph_loop.sh
```

**Custom iteration limit:**
```bash
./ralph_loop.sh 25
```

## How It Works

Each iteration, Ralph:

1. Checks beads history with `bd list` and git log to understand prior work
2. Runs `bd ready` to find issues ready to work on (no blockers)
3. Selects ONE issue based on priority (architectural → integration → risky → standard → polish)
4. Marks the issue as in-progress: `bd update <id> --status in_progress`
5. Navigates to the project directory
6. Creates or reuses a feature branch
7. Implements the issue with small, focused commits
8. Runs linters, builds, and tests (must pass before committing)
9. Closes the issue: `bd close <id>`
10. Outputs `RALPH_COMPLETE` when all issues are closed, or exits for next iteration

## Project Structure

Place the Ralph folder alongside your project folders:

```
Code/
├── Ralph/              # This folder
│   ├── prompt.md       # Agent instructions
│   ├── ralph_loop.sh   # Loop runner
│   └── ralph_once.sh   # Single iteration runner
├── your_project/       # Your project with beads initialized
│   ├── .beads/         # beads issue database (tracks all history)
│   └── ...
├── another_project/
└── ...
```

## Customizing Ralph's Behavior

### Modify `prompt.md` to:

- Change task prioritization rules
- Add project-specific linting/testing commands
- Modify branch naming conventions
- Add custom quality rules or coding standards
- Change the progress log format

### Issue Design Tips

- **Be specific** in issue descriptions—Ralph treats them as requirements
- **Keep issues small** and focused (1-2 hours of human work)
- **Use dependencies** to control order—`bd dep add` chains work properly
- **Set priorities** appropriately (P0 = highest, P4 = lowest)
- **Include context** in descriptions if Ralph won't have prior knowledge

## Monitoring Progress

- **Watch terminal output** during execution for real-time status
- **Run `bd list`** to see which issues are complete/in-progress/open
- **Run `bd show <id>`** to view issue details and history
- **Run `bd ready`** to see what's available to work on next
- **Check git log** to see commits and implementation details
- **Inspect git branches** to review Ralph's code changes before merging

## Generating Issues with Copilot

You don't have to create beads issues manually! Use GitHub Copilot CLI to generate issues from GitHub issues, feature descriptions, or existing code.

### From GitHub Issues

Copilot can fetch issue details using `gh` and convert them into beads:

```bash
copilot "Read the GitHub issue at https://github.com/myorg/myrepo/issues/123 using gh issue view. 
Break it down into implementation issues and create them using bd create commands. 
Each issue should have a clear title, description, and appropriate priority."
```

### From Multiple Issues

```bash
copilot "Fetch these GitHub issues using gh:
- https://github.com/myorg/myrepo/issues/45
- https://github.com/myorg/myrepo/issues/46
- https://github.com/myorg/myrepo/issues/47

Analyze them and create beads issues using bd create for each task needed. 
Group related work and add dependencies using bd dep add where appropriate."
```

### From a Feature Description

```bash
copilot "I want to add dark mode support to my iOS app. 
Explore the ../my_app codebase to understand the current UI architecture, 
then create beads issues using bd create commands with all the steps needed. 
Set up dependencies so work happens in the right order."
```

### Tips for Issue Generation

- **Let Copilot explore first** - it can analyze your codebase to create more accurate issues
- **Reference existing patterns** - mention similar features to guide implementation approach
- **Include constraints** - specify frameworks, coding standards, or dependencies to consider
- **Set up dependencies** - use `bd dep add` to chain issues that must be done in order
- **Review before running** - always check with `bd list` before starting Ralph

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "copilot: command not found" | Install GitHub Copilot CLI |
| Script permission denied | Run `chmod +x ralph_*.sh` |
| Ralph stuck on failing tests | Check `bd list` and git log for blockers, fix manually |
| Issues not progressing | Review issue descriptions—may be too vague |
| Max iterations reached | Increase limit with `./ralph_loop.sh 50` or simplify issues |
| "bd: command not found" | Install beads: [https://github.com/steveyegge/beads](https://github.com/steveyegge/beads) |
