# Vercel Deployment Instructions

## Method 1: GitHub + Vercel (Recommended)

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Hiring Bias project"
   ```

2. **Create GitHub Repository**
   - Go to github.com
   - Click "New Repository"
   - Name it: `ai-hiring-bias-ethics`
   - Don't initialize with README (already exists)

3. **Push Code**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/ai-hiring-bias-ethics.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure (Use Defaults)**
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site will be live!

5. **Get Your URL**
   - Example: `https://ai-hiring-bias-ethics.vercel.app`
   - Copy this URL for QR code generation

## Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd ai-hiring-bias
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - What's your project's name? ai-hiring-bias
# - In which directory is your code located? ./
# - Want to override settings? No

# Production deployment
vercel --prod
```

## Method 3: Direct Upload (No Git)

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Drag & Drop**
   - Go to vercel.com/new
   - Drag the entire project folder
   - Vercel will detect and deploy

## Post-Deployment Steps

### 1. Update QR Code URL

Edit `components/QRCodeSection.tsx`:

```typescript
const websiteUrl = "https://YOUR-APP-NAME.vercel.app";
```

Commit and push:
```bash
git add .
git commit -m "Update website URL"
git push
```

Vercel will auto-deploy the update.

### 2. Generate QR Code

**Option A: Online Generator**
- Visit: https://www.qr-code-generator.com
- Paste your Vercel URL
- Download PNG/SVG

**Option B: QR Code Monkey**
- Visit: https://www.qrcode-monkey.com
- Customize with colors
- Add logo if desired

**Option C: Using Command**
```bash
npx qrcode "https://your-app.vercel.app" -o qrcode.png
```

### 3. Test Your Deployment

1. **Open the URL** in browser
2. **Test on mobile** - Take out your phone and visit URL
3. **Check all pages**:
   - Home page: /
   - Dashboard: /dashboard
4. **Test interactivity**: Click ethical decision options
5. **Verify responsiveness**: Test on different screen sizes

### 4. Print QR Code for Poster

1. Open QR code image
2. Size for poster (recommend 3x3 inches minimum)
3. Print with caption: "Scan to explore interactive case study"
4. Place prominently on poster

## Troubleshooting Vercel Deployment

### Build Fails

**Check build logs** on Vercel dashboard

Common fixes:
```bash
# Ensure all dependencies are in package.json
npm install

# Test build locally
npm run build

# If successful locally, commit and push
git add .
git commit -m "Fix build"
git push
```

### Environment Variables

If you add any in future:
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add variables
5. Redeploy

### Custom Domain (Optional)

1. Vercel Dashboard → Your Project
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration steps

## Vercel Dashboard Features

- **Deployments**: View all deployment history
- **Analytics**: See visitor statistics
- **Logs**: Debug any issues
- **Settings**: Configure environment, domains
- **Preview**: Every push creates preview URL

## Automatic Deployments

Once connected to GitHub:
- **Every push to main** → Auto-deploy to production
- **Every PR** → Creates preview deployment
- **Previews have unique URLs** for testing

## Monitoring Your Site

### Vercel Analytics (Free)
- Enable in project settings
- Track page views
- Monitor performance
- See visitor locations

### Check Site Status
Visit: `https://your-app.vercel.app`

Expected load time: < 2 seconds

## Cost

**Free tier includes**:
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Global CDN
- Perfect for academic projects

## Sharing Your Project

**For Poster**:
- QR Code (generated above)
- Short URL (from Vercel)

**For Submission**:
- GitHub repo: `https://github.com/YOUR-USERNAME/ai-hiring-bias-ethics`
- Live site: `https://your-app.vercel.app`

**For Presentation**:
- Display live site during presentation
- Audience can scan QR code
- Works on all devices

---

## Quick Commands Reference

```bash
# Deploy
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm PROJECT-NAME
```

## Success Checklist

- [ ] Project built successfully (`npm run build`)
- [ ] Code pushed to GitHub
- [ ] Imported on Vercel
- [ ] Deployment successful
- [ ] URL accessible in browser
- [ ] Both pages work (/ and /dashboard)
- [ ] Interactive features work
- [ ] QR code generated
- [ ] URL updated in QRCodeSection.tsx
- [ ] QR code tested with phone
- [ ] Ready for poster integration

---

**Your project is now live and accessible worldwide!** 🚀

Use the Vercel URL for your poster QR code and project submission.
