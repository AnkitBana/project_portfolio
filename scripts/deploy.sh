#!/bin/bash

# Portfolio Website Deployment Script
# This script deploys the portfolio website using Docker

set -e  # Exit on error

echo "🚀 Deploying Portfolio Website..."
echo "=================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Error: Docker is not running"
    echo "Please start Docker and try again"
    exit 1
fi

# Load environment variables
if [ -f .env.local ]; then
    echo "✅ Loading environment variables"
    export $(cat .env.local | grep -v '^#' | xargs)
else
    echo "⚠️  Warning: .env.local not found"
fi

# Check if we should use Ngrok
USE_NGROK=false
if [ ! -z "$NGROK_AUTHTOKEN" ]; then
    echo ""
    read -p "Do you want to enable Ngrok tunnel? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        USE_NGROK=true
    fi
fi

# Stop existing containers
echo ""
echo "🛑 Stopping existing containers..."
docker-compose down

# Start containers
echo ""
echo "🚀 Starting containers..."
if [ "$USE_NGROK" = true ]; then
    echo "   (with Ngrok tunnel)"
    docker-compose --profile ngrok up -d
else
    docker-compose up -d
fi

# Wait for services to be healthy
echo ""
echo "⏳ Waiting for services to be ready..."
sleep 5

# Check container status
echo ""
echo "📊 Container Status:"
docker-compose ps

# Show logs
echo ""
echo "📝 Recent logs:"
docker-compose logs --tail=20

# Display access information
echo ""
echo "✅ Deployment completed!"
echo ""
echo "Access your portfolio at:"
echo "  Local:    http://localhost:3000"
echo "  Nginx:    http://localhost:80"

if [ "$USE_NGROK" = true ]; then
    echo ""
    echo "⏳ Waiting for Ngrok tunnel..."
    sleep 3
    
    # Try to get Ngrok URL
    NGROK_URL=$(curl -s http://localhost:4040/api/tunnels | grep -o '"public_url":"[^"]*' | grep -o 'https://[^"]*' | head -1)
    
    if [ ! -z "$NGROK_URL" ]; then
        echo "  Ngrok:    $NGROK_URL"
        echo "  Dashboard: http://localhost:4040"
    else
        echo "  Ngrok dashboard: http://localhost:4040"
    fi
fi

echo ""
echo "Useful commands:"
echo "  View logs:     docker-compose logs -f"
echo "  Stop:          docker-compose down"
echo "  Restart:       docker-compose restart"
echo "  Rebuild:       ./scripts/build.sh"
echo ""

# Made with Bob
