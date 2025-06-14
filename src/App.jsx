import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Moon, Sun } from 'lucide-react'
import './App.css'

// Import assets
import birdGif from './assets/bird.gif'
import cloudSvg from './assets/cloud.svg'
import cloudDarkSvg from './assets/cloud-dark.svg'
import cloudAltSvg from './assets/cloud-alt.svg'
import cloudAltDarkSvg from './assets/cloud-alt-dark.svg'
import snowflakeSvg from './assets/snowflake.svg'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [currentSeason, setCurrentSeason] = useState('winter')
  
  const roles = ['Developer', 'Cook', 'Designer', 'Creator']
  
  // Auto-detect theme based on system preference and time
  useEffect(() => {
    const detectTheme = () => {
      const hour = new Date().getHours()
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isNightTime = hour < 6 || hour > 18
      
      setIsDark(systemPrefersDark || isNightTime)
    }
    
    detectTheme()
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', detectTheme)
    
    return () => mediaQuery.removeEventListener('change', detectTheme)
  }, [])
  
  // Detect season based on current month
  useEffect(() => {
    const month = new Date().getMonth()
    if (month >= 11 || month <= 1) {
      setCurrentSeason('winter') // Dec, Jan, Feb
    } else if (month >= 2 && month <= 4) {
      setCurrentSeason('spring') // Mar, Apr, May
    } else if (month >= 5 && month <= 7) {
      setCurrentSeason('summer') // Jun, Jul, Aug
    } else {
      setCurrentSeason('autumn') // Sep, Oct, Nov
    }
  }, [])
  
  // Role rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Apply theme to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  // Generate falling elements (snow/leaves)
  const generateFallingElements = () => {
    const elements = []
    const count = 20
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 0.8 + 0.4 // 0.4rem to 1.2rem
      const left = Math.random() * 100
      const delay = Math.random() * 10
      const duration = Math.random() * 3 + 7 // 7-10 seconds
      
      elements.push(
        <div
          key={i}
          className="falling-element"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            fontSize: `${size}rem`
          }}
        >
          {currentSeason === 'winter' ? (
            <img src={snowflakeSvg} alt="snowflake" className="w-4 h-4 opacity-80" />
          ) : (
            <span className="text-green-600 dark:text-green-400">🍃</span>
          )}
        </div>
      )
    }
    
    return elements
  }

  // Generate birds
  const generateBirds = () => {
    const birds = []
    const count = 3
    
    for (let i = 0; i < count; i++) {
      const top = Math.random() * 30 + 10 // 10% to 40% from top
      const delay = Math.random() * 5
      const duration = Math.random() * 5 + 15 // 15-20 seconds
      const size = i === 0 ? 1.5 : 1 // First bird larger
      
      birds.push(
        <div
          key={i}
          className="bird"
          style={{
            top: `${top}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            transform: `scale(${size})`
          }}
        >
          <img src={birdGif} alt="flying bird" className="w-8 h-8" />
        </div>
      )
    }
    
    return birds
  }

  // Generate clouds
  const generateClouds = () => {
    const clouds = []
    const smallClouds = 4
    const largeClouds = 3
    
    // Small clouds
    for (let i = 0; i < smallClouds; i++) {
      const top = Math.random() * 40 + 10
      const left = Math.random() * 20 + 5
      const delay = Math.random() * 3
      
      clouds.push(
        <div
          key={`small-${i}`}
          className="cloud-small"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`
          }}
        >
          <img 
            src={isDark ? cloudAltDarkSvg : cloudAltSvg} 
            alt="small cloud" 
            className="w-12 h-8 opacity-60"
          />
        </div>
      )
    }
    
    // Large clouds
    for (let i = 0; i < largeClouds; i++) {
      const top = Math.random() * 50 + 20
      const left = Math.random() * 25 + 5
      const delay = Math.random() * 4
      
      clouds.push(
        <div
          key={`large-${i}`}
          className="cloud-large"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`
          }}
        >
          <img 
            src={isDark ? cloudDarkSvg : cloudSvg} 
            alt="large cloud" 
            className="w-20 h-12 opacity-70"
          />
        </div>
      )
    }
    
    return clouds
  }

  return (
    <div className="app-container">
      {/* Background Gradient */}
      <div className="background-gradient"></div>
      
      {/* Animation Layers */}
      <div className="animation-layer birds-layer">
        {generateBirds()}
      </div>
      
      <div className="animation-layer clouds-layer">
        {generateClouds()}
      </div>
      
      <div className="animation-layer falling-layer">
        {generateFallingElements()}
      </div>
      
      {/* Sea Waves */}
      <div className="sea-waves">
        <svg viewBox="0 0 1200 320" className="wave wave-1">
          <path 
            fill="rgba(59, 130, 246, 0.2)" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,149.3L1200,139L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg viewBox="0 0 1200 320" className="wave wave-2">
          <path 
            fill="rgba(59, 130, 246, 0.3)" 
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3L1200,181L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg viewBox="0 0 1200 320" className="wave wave-3">
          <path 
            fill="rgba(59, 130, 246, 0.4)" 
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,224C960,213,1056,171,1152,154.7L1200,139L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg viewBox="0 0 1200 320" className="wave wave-4">
          <path 
            fill="rgba(147, 197, 253, 0.6)" 
            d="M0,288L48,277.3C96,267,192,245,288,245.3C384,245,480,267,576,272C672,277,768,267,864,250.7C960,235,1056,213,1152,208C1200,203,1200,213,1200,218.7L1200,224L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg viewBox="0 0 1200 320" className="wave wave-5">
          <path 
            fill="rgba(147, 197, 253, 0.8)" 
            d="M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,202.7C672,192,768,192,864,197.3C960,203,1056,213,1152,213.3L1200,213L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-left">
          <div className="social-icon social-icon-1"></div>
          <div className="social-icon social-icon-2"></div>
        </div>
        
        <div className="nav-right">
          <Button 
            variant="outline" 
            className="home-button"
          >
            Home
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="theme-toggle"
          >
            {isDark ? <Sun className="icon-size" /> : <Moon className="icon-size" />}
          </Button>
        </div>
      </nav>
      
      {/* Side Navigation Icons */}
      <div className="side-navigation">
        <div className="side-icon side-icon-1">3</div>
        <div className="side-icon side-icon-2">4</div>
        <div className="side-icon side-icon-3">7</div>
        <div className="side-icon side-icon-4">8</div>
        <div className="side-icon side-icon-5">9</div>
        <div className="side-icon side-icon-6">10</div>
        <div className="side-icon side-icon-7">11</div>
      </div>
      
      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="main-heading">
            Hey there, I'm ME!
          </h1>
          
          <div className="role-text">
            <span>I'm a </span>
            <span className="role-animated">
              {roles[currentRole]}
            </span>
          </div>
          
          <div className="intro-card">
            <h2 className="intro-heading">
              Ayubowan!
            </h2>
            <p className="intro-text">
              I'm a passionate Front-End Developer from Sri Lanka, with a knack for creating interactive and visually stunning user interfaces.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

