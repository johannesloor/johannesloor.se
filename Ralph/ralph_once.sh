#!/bin/bash
# Run GitHub Copilot CLI once with the Ralph prompt

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROMPT_FILE="$SCRIPT_DIR/prompt.md"

if [ ! -f "$PROMPT_FILE" ]; then
    echo "Error: prompt.md not found"
    exit 1
fi

echo "=== Running Ralph (single iteration) ==="
cd "$SCRIPT_DIR"
cat "$PROMPT_FILE" | copilot --allow-all-tools
