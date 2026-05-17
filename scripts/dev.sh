#!/bin/bash

# Portfolio Website Development Script
# This script starts the development server

set -e  # Exit on error

echo "🚀 Starting Development Server..."
echo "================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed"
    exit 1
fi

# Load environment variables
if [ -f .env.local ]; then
    echo "✅ Loading environment variables"
    export $(cat .env.local | grep -v '^#' | xargs)
else
    echo "⚠️  Warning: .env.local not found, using defaults"
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 Installing dependencies..."
    npm install
fi

# Start development server
echo ""
echo "🚀 Starting Next.js development server..."
echo ""
echo "Access your portfolio at:"
echo "  Local:    http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev

# Made with Bob
