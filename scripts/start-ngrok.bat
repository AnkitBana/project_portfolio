@echo off
REM Ngrok Tunnel Startup Script for Windows
REM This script starts an Ngrok tunnel for your portfolio

echo ========================================
echo   Portfolio Ngrok Tunnel Starter
echo ========================================
echo.

REM Check if ngrok is installed
where ngrok >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Ngrok is not installed or not in PATH
    echo Please install ngrok first: npm install -g ngrok
    echo.
    pause
    exit /b 1
)

REM Check if dev server is running
echo Checking if development server is running on port 3000...
netstat -ano | findstr :3000 >nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo WARNING: No service detected on port 3000
    echo Please make sure your dev server is running: npm run dev
    echo.
    set /p CONTINUE="Continue anyway? (y/n): "
    if /i not "%CONTINUE%"=="y" exit /b 1
)

echo.
echo Starting Ngrok tunnel...
echo Your portfolio will be accessible via a public URL
echo.
echo Press Ctrl+C to stop the tunnel
echo ========================================
echo.

REM Start ngrok
ngrok http 3000

REM This line will only execute if ngrok exits
echo.
echo Ngrok tunnel stopped.
pause

@REM Made with Bob
