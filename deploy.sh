#!/bin/bash

# 部署脚本 - GitHub Pages部署

echo "TEC25网站部署脚本"
echo "=" 50

# 检查Node.js环境
echo "检查Node.js环境..."
if ! command -v node &> /dev/null; then
    echo "错误: 未找到Node.js环境，请先安装Node.js"
    exit 1
fi

node_version=$(node -v)
echo "✓ Node.js版本: $node_version"

# 检查npm环境
if ! command -v npm &> /dev/null; then
    echo "错误: 未找到npm环境"
    exit 1
fi

npm_version=$(npm -v)
echo "✓ npm版本: $npm_version"

echo "=" 50

# 安装依赖
echo "安装项目依赖..."
npm ci
if [ $? -ne 0 ]; then
    echo "错误: 依赖安装失败"
    exit 1
fi

echo "✓ 依赖安装成功"

echo "=" 50

# 构建项目
echo "构建项目..."
npm run build
if [ $? -ne 0 ]; then
    echo "错误: 项目构建失败"
    exit 1
fi

echo "✓ 项目构建成功"
echo "构建产物已生成在 'out' 目录中"

echo "=" 50

# 验证构建结果
if [ -d "./out" ]; then
    out_files=$(find ./out -type f | wc -l)
    echo "✓ 构建产物验证成功，共生成 $out_files 个文件"
else
    echo "错误: 构建产物目录 'out' 不存在"
    exit 1
fi

echo "=" 50
echo "部署准备完成！您可以将 'out' 目录的内容部署到GitHub Pages。"
echo "或者将代码推送到GitHub，GitHub Actions会自动完成部署。"
