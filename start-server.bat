@echo off
cd /d "C:\Users\Administrator\zylo-clone"
echo Starting ZYLO Clone Website...
echo.
echo Opening browser in 5 seconds...
timeout /t 5 /nobreak > nul
start http://localhost:8080
npx serve out -l 8080