@echo off
echo.
echo ============================================
echo   ZENODO PREPRINT UPLOAD
echo ============================================
echo.
echo A browser will open to Zenodo's login page.
echo.
echo   1. Click "Sign in with GitHub"
echo   2. Authorize if prompted
echo   3. Script handles EVERYTHING else
echo.
echo Press any key to start...
pause >nul
cd /d C:\Cortex
node "marshall-syndrome-resource\future\zenodo_one_click.js"
pause
