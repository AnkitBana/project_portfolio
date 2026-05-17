@echo off
REM Portfolio Development Script for Windows
REM Super simple - just runs docker-compose up

echo.
echo 🚀 Starting Portfolio Development Server...
echo.

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not running!
    echo Please start Docker Desktop and try again.
    pause
    exit /b 1
)

REM Start development server
echo.
echo 🔥 Starting development server with hot reload...
echo 📝 Edit files in VS Code and see changes instantly!
echo 🌐 Open: http://localhost:3000
echo.
echo Press Ctrl+C to stop
echo.

docker-compose up

REM Made with Bob

@REM Made with Bob
