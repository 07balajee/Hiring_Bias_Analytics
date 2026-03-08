# AI Hiring Bias - Business Ethics Case Study

An interactive web application exploring the ethical challenges of AI-based hiring systems. Created as a Business Ethics assignment to examine algorithmic bias, transparency issues, and stakeholder impacts in modern recruitment.

## 🎯 Project Overview

This Next.js application provides:
- **Interactive dashboards** with real-time data visualizations
- **Stakeholder analysis** showing affected parties
- **Ethical decision framework** for AI hiring policies
- **Statistical insights** into AI adoption and risks
- **QR code integration** for poster presentations

## 🚀 Features

### 1. Home Page
- Comprehensive introduction to AI hiring ethics
- Overview of key ethical challenges
- Interactive stakeholder cards
- Ethical decision-making component
- QR code section for poster integration

### 2. Statistics Dashboard
- **Line Chart**: Growth of AI hiring adoption (2015-2024)
- **Bar Chart**: AI adoption by industry sector
- **Pie Chart**: Distribution of ethical risks
- Real-time statistics and key insights

### 3. Interactive Components
- Ethical decision selector with detailed explanations
- Responsive design for all devices
- Smooth animations and transitions

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1. **Navigate to project directory**
   ```bash
   cd ai-hiring-bias
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
ai-hiring-bias/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Statistics dashboard page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── charts/
│   │   ├── CompaniesChart.tsx # Bar chart component
│   │   ├── EthicalRisksChart.tsx # Pie chart component
│   │   └── GrowthChart.tsx    # Line chart component
│   ├── EthicalDecision.tsx    # Interactive decision component
│   ├── Navigation.tsx         # Navigation bar
│   ├── QRCodeSection.tsx      # QR code display
│   └── StakeholderSection.tsx # Stakeholder cards
├── data/
│   └── aiHiringData.json      # Mock statistical data
├── public/                    # Static assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 📊 Data Source

Mock data is stored in `data/aiHiringData.json` and includes:
- Year-over-year AI adoption rates (2015-2024)
- Industry-specific adoption percentages
- Ethical risk distribution statistics

## 🎨 Design Features

- **Color Scheme**: Professional blue and white theme
- **Responsive**: Works on desktop, tablet, and mobile
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized for fast loading
- **Modern UI**: Card-based layouts with smooth animations

## 🚢 Deployment on Vercel

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Update QR Code**
   - After deployment, copy your Vercel URL
   - Generate QR code at [qr-code-generator.com](https://www.qr-code-generator.com)
   - Use the QR code on your poster

### Manual Deployment

```bash
npm install -g vercel
vercel login
vercel
```

## 📖 Usage for Academic Presentation

### For Digital Presentation
1. Run the development server
2. Navigate through the pages during presentation
3. Demonstrate interactive features

### For Poster Integration
1. Deploy to Vercel
2. Generate QR code with deployment URL
3. Print QR code and add to poster
4. Viewers can scan and explore interactively

## 🎓 Learning Outcomes

This project demonstrates:
- **Business Ethics**: Analysis of AI bias and accountability
- **Stakeholder Analysis**: Impact on multiple parties
- **Data Visualization**: Clear presentation of statistics
- **Technical Skills**: Modern web development practices
- **Critical Thinking**: Ethical decision-making frameworks

## 📝 Key Ethical Questions Explored

1. Should AI systems make final hiring decisions?
2. How do we ensure algorithmic fairness?
3. Who is accountable when AI makes discriminatory decisions?
4. How can transparency be improved in AI hiring?
5. What protections do job applicants need?

## 🔧 Customization

### Update Data
Edit `data/aiHiringData.json` to modify statistics

### Change Colors
Modify `tailwind.config.ts` to adjust the color scheme

### Add Pages
Create new files in `app/` directory following Next.js conventions

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Port Already in Use
```bash
PORT=3001 npm run dev
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run build
# Check console for specific errors
```

## 📚 References

This project uses mock data for educational purposes. For real-world implementation, consult:
- IEEE guidelines on AI ethics
- EU AI Act regulations
- EEOC guidance on hiring practices
- Academic research on algorithmic bias

## 👥 Contributors

Created by: [Your Name]
Course: Business Ethics
Semester: 4th Semester
Date: March 2026

## 📄 License

This project is created for academic purposes.

## 🙏 Acknowledgments

- Next.js team for the excellent framework
- Recharts for visualization library
- Tailwind CSS for styling utilities
- Lucide React for beautiful icons

---

**Note**: This is an educational project demonstrating ethical analysis of AI hiring systems. All statistics are simulated for demonstration purposes.
