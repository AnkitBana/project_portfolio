#!/bin/bash

# Portfolio Website Build Script
# This script builds the Docker containers for the portfolio website

set -e  # Exit on error

echo "🚀 Starting Portfolio Website Build..."
echo "======================================"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker is not installed"
    echo "Please install Docker from https://www.docker.com/"
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Error: docker-compose is not installed"
    echo "Please install docker-compose"
    exit 1
fi

# Load environment variables
if [ -f .env.local ]; then
    echo "✅ Loading environment variables from .env.local"
    export $(cat .env.local | grep -v '^#' | xargs)
else
    echo "⚠️  Warning: .env.local not found, using defaults"
fi

# Clean up old containers and images
echo ""
echo "🧹 Cleaning up old containers..."
docker-compose down --remove-orphans

# Build the Docker images
echo ""
echo "🔨 Building Docker images..."
docker-compose build --no-cache

# Verify the build
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo ""
    echo "Next steps:"
    echo "  1. Run: ./scripts/deploy.sh to start the containers"
    echo "  2. Or run: docker-compose up -d"
    echo ""
else
    echo ""
    echo "❌ Build failed!"
    exit 1
fi

# Made with Bob
