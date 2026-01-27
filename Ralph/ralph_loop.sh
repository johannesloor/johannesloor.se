#!/bin/bash
# Ralph Wiggum iterative loop for GitHub Copilot CLI

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROMPT_FILE="$SCRIPT_DIR/prompt.md"
COMPLETION_MARKER="RALPH_COMPLETE"

MAX_ITERATIONS=${1:-10}

if [ ! -f "$PROMPT_FILE" ]; then
    echo "Error: prompt.md not found"
    exit 1
fi

echo "=== Ralph Loop Started ==="
echo "Max iterations: $MAX_ITERATIONS"
echo ""

cd "$SCRIPT_DIR"

for i in $(seq 1 $MAX_ITERATIONS); do
    echo "--- Iteration $i of $MAX_ITERATIONS ---"
    
    OUTPUT=$(cat "$PROMPT_FILE" | copilot --allow-all-tools 2>&1 | tee /dev/stderr) || true

    if echo "$OUTPUT" | grep -q "$COMPLETION_MARKER"; then
        echo ""
        echo "=== All tasks complete! ==="
        echo "Finished at iteration $i"
        exit 0
    fi
    
    echo ""
    sleep 2
done

echo "=== Max iterations reached ==="
echo "Check progress.txt and task.json for status"
exit 1
