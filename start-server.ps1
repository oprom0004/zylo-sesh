# ZYLO Clone Website Launcher
Write-Host "🚀 Starting ZYLO Clone Website..." -ForegroundColor Green
Write-Host ""

# Change to project directory
Set-Location "C:\Users\Administrator\zylo-clone"

# Check if Node.js is available
if (!(Get-Command "node" -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Install serve if not available
Write-Host "📦 Checking dependencies..." -ForegroundColor Yellow
try {
    npx serve --version > $null 2>&1
} catch {
    Write-Host "Installing serve package..." -ForegroundColor Yellow
    npm install -g serve
}

Write-Host "🌐 Starting static file server..." -ForegroundColor Cyan
Write-Host "📂 Serving from: out/" -ForegroundColor Gray
Write-Host ""
Write-Host "✅ Website will be available at:" -ForegroundColor Green
Write-Host "   🔗 http://localhost:8080" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start server and open browser
Start-Process "http://localhost:8080" -ErrorAction SilentlyContinue
npx serve out -l 8080