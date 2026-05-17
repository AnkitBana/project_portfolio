#!/bin/bash

# Portfolio Development Script
# Super simple - just runs docker-compose up

echo "🚀 Starting Portfolio Development Server..."
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running!"
    echo "Please start Docker Desktop and try again."
    exit 1
fi

# Start development server
echo ""
echo "🔥 Starting development server with hot reload..."
echo "📝 Edit files in VS Code and see changes instantly!"
echo "🌐 Open: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop"
echo ""

docker-compose up

# Made with Bob