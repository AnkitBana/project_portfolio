@echo off
REM Pre-commit hook for Windows
echo 🔍 Checking for sensitive files...

REM Check for .env files in staged changes
git diff --cached --name-only | findstr /R "\.env$ \.env\.local$" >nul
if %errorlevel% equ 0 (
    echo ❌ ERROR: Attempting to commit .env file!
    echo    .env files should never be committed to Git
    echo    Please remove them from staging: git reset HEAD .env*
    exit /b 1
)

echo 🔍 Scanning for exposed credentials...

REM Check for credential patterns in staged changes
git diff --cached | findstr /I /R "password.*=.*[a-zA-Z0-9]" | findstr /V "your_.*_here example placeholder" >nul
if %errorlevel% equ 0 (
    echo ❌ ERROR: Potential password detected!
    echo    Please review your changes and remove any real credentials
    exit /b 1
)

git diff --cached | findstr /I /R "SMTP_PASS.*=.*[a-zA-Z0-9]" | findstr /V "your_.*_here example placeholder" >nul
if %errorlevel% equ 0 (
    echo ❌ ERROR: Potential SMTP password detected!
    echo    Please review your changes and remove any real credentials
    exit /b 1
)

git diff --cached | findstr /I /R "api.*key.*=.*[a-zA-Z0-9]" | findstr /V "your_.*_here example placeholder" >nul
if %errorlevel% equ 0 (
    echo ❌ ERROR: Potential API key detected!
    echo    Please review your changes and remove any real credentials
    exit /b 1
)

echo ✅ Security check passed!
exit /b 0

@REM Made with Bob
