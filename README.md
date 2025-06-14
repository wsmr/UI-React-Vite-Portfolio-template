# Portfolio.site Website Replica

A pixel-perfect replica of the Portfolio.site personal website, built with modern web technologies and featuring smooth animations, responsive design, and dark mode support.

## 🚀 Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Animated Elements**: 
  - Floating cloud animations
  - Text role rotation (Developer, Cook, Designer, Creator)
  - Smooth gradient backgrounds
  - Glassmorphism effects
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Performance Optimized**: Built with Vite for fast loading and development

## 🛠 Technologies Used

### Frontend Framework
- **React 18**: Component-based architecture
- **Vite**: Fast build tool and development server

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **Custom CSS**: Advanced animations and effects
- **Lucide Icons**: Beautiful, customizable icons

### Development Tools
- **ESLint**: Code linting and quality
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📦 Installation

### Prerequisites
- Node.js v18+ 
- npm or pnpm

### Setup Instructions

1. **Clone or extract the project**
   ```bash
   cd ui-next-portfolio-dev-replica
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗 Build for Production

1. **Create production build**
   ```bash
   npm run build
   # or
   pnpm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   # or
   pnpm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📁 Project Structure

```
ui-next-portfolio-dev-replica/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles and animations
│   ├── index.css         # Base styles
│   └── main.jsx          # Application entry point
├── components.json        # shadcn/ui configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🎨 Design Features

### Visual Elements
- **Gradient Background**: Smooth orange-to-blue gradient with dark mode variants
- **Floating Clouds**: Animated orange cloud shapes with different timing
- **Wave Patterns**: SVG-based wave overlays for depth
- **Glassmorphism**: Semi-transparent content areas with backdrop blur

### Animations
- **Float Animation**: Gentle up-down movement for cloud elements
- **Text Rotation**: Automatic cycling through different roles
- **Theme Transitions**: Smooth color transitions when switching modes
- **Hover Effects**: Interactive button and element states

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Flexible Typography**: Responsive text sizing
- **Adaptive Layout**: Elements adjust to screen size
- **Touch-Friendly**: Appropriate button sizes for mobile

## 🔧 Customization

### Colors
Modify the gradient colors in `src/App.jsx`:
```jsx
<div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-200 to-blue-300 dark:from-orange-900 dark:via-yellow-900 dark:to-blue-900"></div>
```

### Animations
Adjust animation timing in `src/App.css`:
```css
.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

### Content
Update text content in `src/App.jsx`:
```jsx
const roles = ['Developer', 'Cook', 'Designer', 'Creator']
```

## 🌐 Deployment

### Static Hosting (Recommended)
- **Vercel**: Connect your Git repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automated builds
- **Cloudflare Pages**: Connect repository for edge deployment

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist/` folder contents to your web server
3. Configure your server to serve `index.html` for all routes

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

This is a replica project for educational purposes. Feel free to:
- Report issues
- Suggest improvements
- Fork and modify for your own use

[//]: # (## 📄 License)
[//]: # (This project is for educational and demonstration purposes. The original design belongs to Omal Vindula &#40;Portfolio.site&#41;.)

## 🙏 Acknowledgments

[//]: # (- Original design by [Omal Vindula]&#40;https://omal.dev&#41;)
- Built with modern web technologies and best practices
- Inspired by contemporary web design trends including glassmorphism and gradient aesthetics

