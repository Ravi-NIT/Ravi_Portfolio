# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer
- Node.js installed

## Step-by-Step Deployment

### 1. Create GitHub Repository
1. Go to GitHub and create a new repository named `portfolio`
2. Make it public
3. Don't initialize with README (we'll push existing code)

### 2. Initialize Git and Push Code
```bash
# Navigate to your client folder
cd client

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote origin (replace 'saurav1kumar' with your GitHub username)
git remote add origin https://github.com/saurav1kumar/portfolio.git

# Push to main branch
git push -u origin main
```

### 3. Deploy to GitHub Pages
```bash
# Build and deploy
npm run deploy
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

### 5. Access Your Portfolio
Your portfolio will be available at: `https://saurav1kumar.github.io/portfolio/`

## Important Notes

### File Paths for GitHub Pages
- All links in your portfolio use relative paths starting with `/portfolio/`
- Resume PDF: `/portfolio/Saurav_Kumar_Resume.pdf`
- All assets are properly configured for GitHub Pages

### Updating Your Portfolio
Whenever you make changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

### Resume PDF Generation
To regenerate the PDF resume:
```bash
node convert-to-pdf.js
```

## Troubleshooting

### If deployment fails:
1. Check that gh-pages package is installed: `npm install --save-dev gh-pages`
2. Ensure you have push access to the repository
3. Check that the build completes successfully: `npm run build`

### If links don't work:
1. Verify the base path in `vite.config.js` is set to `/portfolio/`
2. Check that all internal links start with `/portfolio/`
3. Ensure external links have `target="_blank"` and proper URLs

### If resume doesn't download:
1. Check that `Saurav_Kumar_Resume.pdf` exists in the `public` folder
2. Regenerate PDF using: `node convert-to-pdf.js`
3. Redeploy: `npm run deploy` 