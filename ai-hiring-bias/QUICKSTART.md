# Quick Start Guide

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to: http://localhost:3000

## What You'll See

### Home Page (/)
- Hero section with project title
- Introduction to AI hiring ethics
- Key ethical challenges (bias, transparency, privacy, accountability)
- Interactive stakeholder cards
- Ethical decision framework (choose between Yes/No/Hybrid)
- QR code section for poster integration

### Dashboard Page (/dashboard)
- Line chart showing AI adoption growth (2015-2024)
- Bar chart of AI adoption by industry
- Pie chart of ethical risk distribution
- Key metrics and insights

## Features to Demonstrate

1. **Navigation**: Click "Dashboard" to view statistics
2. **Interactive Decision**: On home page, click Yes/No/Hybrid options
3. **Responsive Design**: Resize browser to see mobile view
4. **Smooth Animations**: Notice card hover effects and transitions

## For Presentation

### Live Demo
- Run `npm run dev`
- Navigate through pages
- Interact with decision component
- Show dashboard visualizations

### Poster Integration
- Deploy to Vercel (see README.md for instructions)
- Generate QR code with your deployment URL
- Print and attach to poster
- Audience can scan and explore on their phones

## Deployment to Vercel

### Option 1: Via Git (Recommended)
1. Push code to GitHub
2. Import repository on vercel.com
3. Deploy automatically

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
PORT=3001 npm run dev
```

### Build Errors
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### Missing Dependencies
```bash
npm install
```

## Project Highlights

✅ Modern Next.js 15 with App Router
✅ TypeScript for type safety  
✅ Tailwind CSS for responsive design
✅ Recharts for data visualization
✅ Interactive ethical decision framework
✅ Mobile-friendly responsive layout
✅ Production-ready build
✅ Vercel deployment ready

## File Structure Overview

```
├── app/
│   ├── page.tsx           → Home page
│   ├── dashboard/
│   │   └── page.tsx       → Statistics dashboard
│   └── layout.tsx         → Root layout
├── components/
│   ├── Navigation.tsx     → Top navigation bar
│   ├── StakeholderSection.tsx  → Stakeholder cards
│   ├── EthicalDecision.tsx     → Interactive decision component
│   ├── QRCodeSection.tsx       → QR code display
│   └── charts/
│       ├── CompaniesChart.tsx  → Bar chart
│       ├── EthicalRisksChart.tsx → Pie chart
│       └── GrowthChart.tsx      → Line chart
└── data/
    └── aiHiringData.json  → Mock statistics
```

## Tips for Presentation

1. **Start with home page** - Explain the ethical context
2. **Show stakeholder cards** - Discuss who is affected
3. **Demonstrate interactive decision** - Click through options
4. **Navigate to dashboard** - Show data visualizations
5. **Highlight insights section** - Discuss key findings

## Next Steps After Deployment

1. Update QR code URL in `components/QRCodeSection.tsx`
2. Generate QR code with real URL
3. Add to poster design
4. Test QR code scanning

---

**Ready to present!** 🎓
