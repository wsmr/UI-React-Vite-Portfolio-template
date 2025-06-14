import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Moon, Sun } from 'lucide-react'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = ['Developer', 'Cook', 'Designer', 'Creator']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-200 to-blue-300 dark:from-orange-900 dark:via-yellow-900 dark:to-blue-900"></div>
      
      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 h-96">
        <svg viewBox="0 0 1200 320" className="absolute bottom-0 w-full h-full">
          <path 
            fill="rgba(59, 130, 246, 0.3)" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,149.3L1200,139L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path 
            fill="rgba(59, 130, 246, 0.5)" 
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3L1200,181L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path 
            fill="rgba(147, 197, 253, 0.8)" 
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,224C960,213,1056,171,1152,154.7L1200,139L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Floating Clouds */}
      <div className="absolute left-4 top-8 animate-float">
        <div className="w-16 h-10 bg-orange-400 rounded-full opacity-80"></div>
      </div>
      <div className="absolute left-8 top-32 animate-float-delayed">
        <div className="w-20 h-12 bg-orange-500 rounded-full opacity-70"></div>
      </div>
      <div className="absolute left-2 top-56 animate-float">
        <div className="w-24 h-14 bg-orange-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute left-6 top-80 animate-float-delayed">
        <div className="w-28 h-16 bg-orange-500 rounded-full opacity-80"></div>
      </div>
      <div className="absolute left-4 bottom-32 animate-float">
        <div className="w-32 h-18 bg-orange-400 rounded-full opacity-70"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="flex space-x-4">
          {/* Social Icons - placeholder colored squares */}
          <div className="w-8 h-8 bg-green-500 rounded"></div>
          <div className="w-8 h-8 bg-blue-500 rounded"></div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="bg-purple-500 text-white border-purple-500 hover:bg-purple-600"
          >
            Home
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </nav>
      
      {/* Right Side Navigation Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-10">
        <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-white text-sm">3</div>
        <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-sm">4</div>
        <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center text-white text-sm">7</div>
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-sm">8</div>
        <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-sm">9</div>
        <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-sm">10</div>
        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm">11</div>
      </div>
      
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-white mb-8 leading-tight">
            Hey there, I'm ME!
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-12">
            <span>I'm a </span>
            <span className="inline-block min-w-[200px] text-left font-semibold text-gray-900 dark:text-white transition-all duration-500">
              {roles[currentRole]}
            </span>
          </div>
          
          <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Ayubowan!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              I'm a passionate Front-End Developer from Sri Lanka, with a knack for creating interactive and visually stunning user interfaces.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

