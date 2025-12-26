#!/usr/bin/env pwsh

# 部署脚本 - GitHub Pages部署

Write-Host "TEC25网站部署脚本"
Write-Host "=" * 50

# 检查Node.js环境
Write-Host "检查Node.js环境..."
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "错误: 未找到Node.js环境，请先安装Node.js"
    exit 1
}

$nodeVersion = node -v
Write-Host "✓ Node.js版本: $nodeVersion"

# 检查npm环境
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "错误: 未找到npm环境"
    exit 1
}

$npmVersion = npm -v
Write-Host "✓ npm版本: $npmVersion"

Write-Host "=" * 50

# 安装依赖
Write-Host "安装项目依赖..."
npm ci
if ($LASTEXITCODE -ne 0) {
    Write-Host "错误: 依赖安装失败"
    exit 1
}

Write-Host "✓ 依赖安装成功"

Write-Host "=" * 50

# 构建项目
Write-Host "构建项目..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "错误: 项目构建失败"
    exit 1
}

Write-Host "✓ 项目构建成功"
Write-Host "构建产物已生成在 'out' 目录中"

Write-Host "=" * 50

# 验证构建结果
if (Test-Path -Path "./out" -PathType Container) {
    $outFiles = Get-ChildItem -Path "./out" -Recurse
    Write-Host "✓ 构建产物验证成功，共生成 $($outFiles.Count) 个文件"
} else {
    Write-Host "错误: 构建产物目录 'out' 不存在"
    exit 1
}

Write-Host "=" * 50
Write-Host "部署准备完成！您可以将 'out' 目录的内容部署到GitHub Pages。"
Write-Host "或者将代码推送到GitHub，GitHub Actions会自动完成部署。"
