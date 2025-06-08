#!/bin/bash

# Build and run the React landing page with Docker

echo "🚀 Building React Landing Page Docker Container..."

# Build the Docker image
docker build -t react-landing-page:latest .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    echo "🏃 Running container on port 3006..."
    
    # Stop and remove existing container if it exists
    docker stop react-landing-page 2>/dev/null
    docker rm react-landing-page 2>/dev/null
    
    # Run the new container
    docker run -d \
        --name react-landing-page \
        -p 3006:3006 \
        --restart unless-stopped \
        react-landing-page:latest
    
    if [ $? -eq 0 ]; then
        echo "✅ Container is running!"
        echo "🌐 Visit your landing page at: http://localhost:3006"
        echo "🏥 Health check available at: http://localhost:3006/health"
        echo ""
        echo "📋 Container management commands:"
        echo "   Stop:    docker stop react-landing-page"
        echo "   Start:   docker start react-landing-page"
        echo "   Logs:    docker logs react-landing-page"
        echo "   Remove:  docker rm -f react-landing-page"
    else
        echo "❌ Failed to run container"
        exit 1
    fi
else
    echo "❌ Build failed"
    exit 1
fi 