# 🚀 ZYLO Clone - GitHub Pages 部署指南

本指南将帮你将ZYLO网站克隆部署到GitHub Pages，完全免费！

## 📋 部署步骤

### 1️⃣ 创建GitHub仓库

1. 登录 [GitHub.com](https://github.com)
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库设置：
   - **Repository name**: `zylo-clone`
   - **Description**: `ZYLO Nicotine Pouches Website Clone`
   - **Visibility**: Public (免费用户需要选择Public才能使用GitHub Pages)
   - **不要**勾选 "Add a README file"（我们已经有了）
4. 点击 "Create repository"

### 2️⃣ 推送代码到GitHub

在项目目录中运行以下命令：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/zylo-clone.git

# 推送代码到GitHub
git push -u origin master
```

### 3️⃣ 启用GitHub Pages

1. 在GitHub仓库页面，点击 "Settings" 标签
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分选择：
   - **Source**: `GitHub Actions`
4. 保存设置

### 4️⃣ 等待自动部署

1. 回到仓库主页，点击 "Actions" 标签
2. 你会看到一个名为 "Deploy ZYLO Clone to GitHub Pages" 的工作流正在运行
3. 等待构建完成（通常需要2-5分钟）
4. 构建成功后，你的网站将在以下地址可用：
   ```
   https://YOUR_USERNAME.github.io/zylo-clone/
   ```

## 🔧 本地开发

### 安装依赖
```bash
npm install
```

### 本地运行
```bash
npm run dev
```
访问: http://localhost:3000

### 构建生产版本
```bash
npm run build
```

### 本地预览生产版本
```bash
npx serve out -l 8080
```

## 📝 更新网站

每次推送代码到master分支，GitHub Actions会自动重新部署网站：

```bash
# 修改代码后
git add .
git commit -m "更新网站内容"
git push origin master
```

## 🌐 自定义域名（可选）

如果你有自己的域名，可以设置自定义域名：

1. 在GitHub仓库的 Settings > Pages 中
2. 在 "Custom domain" 中输入你的域名
3. 在你的域名DNS设置中添加CNAME记录指向：
   ```
   YOUR_USERNAME.github.io
   ```

## 🛠️ 故障排除

### 部署失败
- 检查Actions标签中的错误日志
- 确保所有依赖都在package.json中正确定义
- 检查Next.js配置是否正确

### 页面显示空白
- 确保basePath配置正确
- 检查浏览器控制台是否有错误
- 等待几分钟让CDN缓存刷新

### 404错误
- 确保GitHub Pages已正确启用
- 检查仓库是否为Public
- 确认Actions工作流已成功完成

## 📊 网站分析

项目已配置Plausible Analytics，你可以：
1. 注册 [Plausible.io](https://plausible.io) 账号
2. 添加你的域名
3. 开始跟踪访问数据

## 🎉 完成！

恭喜！你的ZYLO网站克隆现在已经在线了！

**网站地址**: `https://YOUR_USERNAME.github.io/zylo-clone/`

分享给朋友们看看你的作品吧！🚀