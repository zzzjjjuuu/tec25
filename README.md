This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on GitHub Pages

本项目已配置支持GitHub Pages部署，提供两种部署方式：

### 1. 使用GitHub Actions自动部署

项目已内置GitHub Actions工作流，当您将代码推送到`main`分支时，会自动完成构建和部署。

**配置步骤：**
1. 确保项目已推送到GitHub仓库
2. 在GitHub仓库的`Settings` → `Pages`中，设置Source为`GitHub Actions`
3. 将代码推送到`main`分支，GitHub Actions会自动执行构建和部署

### 2. 本地构建并手动部署

使用项目提供的部署脚本，手动构建并部署到GitHub Pages。

**Windows系统：**
```powershell
# 运行PowerShell部署脚本
.deploy.ps1
```

**Linux/macOS系统：**
```bash
# 赋予执行权限
chmod +x deploy.sh
# 运行部署脚本
./deploy.sh
```

脚本会自动完成以下操作：
- 检查Node.js和npm环境
- 安装项目依赖
- 构建项目（输出到`out`目录）
- 验证构建产物

构建完成后，将`out`目录的内容推送到GitHub仓库的`gh-pages`分支即可完成部署。

### 3. 手动构建步骤

如果您希望手动执行构建步骤：

```bash
# 安装依赖
npm ci

# 构建项目
npm run build
```

构建产物将生成在`out`目录中。

## 部署配置说明

- **静态站点配置：** 项目已通过`next.config.ts`配置为静态站点输出（`output: 'export'`）
- **工作流文件：** `.github/workflows/deploy.yml`定义了GitHub Actions的构建和部署流程
- **部署脚本：** `deploy.ps1`（Windows）和`deploy.sh`（Linux/macOS）提供本地部署支持
- **构建产物：** 项目构建后生成的`out`目录包含完整的静态站点文件
