#!/bin/bash
PORT=8080
DIR="$(cd "$(dirname "$0")" && pwd)"

# Kill any existing server on this port
lsof -ti:$PORT | xargs kill -9 2>/dev/null

echo "Starting SalaryTools at http://localhost:$PORT"
echo "Press Ctrl+C to stop"
echo ""

# Open browser
open "http://localhost:$PORT"

# Start server
cd "$DIR" && python3 -m http.server $PORT
