import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/Sections/About/About'
import Curriculum from './components/Sections/Curriculum/Curriculum'
import Skills from './components/Sections/Skills/Skills'
import Projects from './components/Sections/Projects/Projects'
import Contact from './components/Sections/Contact/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const sections = ['about', 'curriculum', 'skills', 'projects', 'contact']
  
  const sectionComponents = {
    about: About,
    curriculum: Curriculum,
    skills: Skills,
    projects: Projects,
    contact: Contact
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isAnimating) return

      const currentIndex = sections.indexOf(activeSection)
      
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault()
          if (currentIndex < sections.length - 1) {
            navigateToSection(sections[currentIndex + 1])
          }
          break
        case 'ArrowLeft':
          event.preventDefault()
          if (currentIndex > 0) {
            navigateToSection(sections[currentIndex - 1])
          }
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSection, isAnimating])

  useEffect(() => {
    let startX = 0
    let endX = 0
    const threshold = 50

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX
    }

    const handleTouchMove = (event) => {
      endX = event.touches[0].clientX
    }

    const handleTouchEnd = () => {
      if (!startX || !endX || isAnimating) return
      
      const distance = startX - endX
      const absDistance = Math.abs(distance)
      const currentIndex = sections.indexOf(activeSection)
      
      if (absDistance > threshold) {
        if (distance > 0 && currentIndex < sections.length - 1) {
          navigateToSection(sections[currentIndex + 1])
        } else if (distance < 0 && currentIndex > 0) {
          navigateToSection(sections[currentIndex - 1])
        }
      }
      
      startX = 0
      endX = 0
    }

    const content = document.querySelector('.content')
    if (content) {
      content.addEventListener('touchstart', handleTouchStart, { passive: true })
      content.addEventListener('touchmove', handleTouchMove, { passive: true })
      content.addEventListener('touchend', handleTouchEnd, { passive: true })

      return () => {
        content.removeEventListener('touchstart', handleTouchStart)
        content.removeEventListener('touchmove', handleTouchMove)
        content.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [activeSection, isAnimating])

  const navigateToSection = (sectionId) => {
    if (isAnimating || sectionId === activeSection) return
    
    setIsAnimating(true)
    setActiveSection(sectionId)
    
    if (isMobile) {
      setSidebarOpen(false)
    }
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 600) 
  }

  const getCurrentSectionIndex = () => sections.indexOf(activeSection)

  const progressPercentage = ((getCurrentSectionIndex() + 1) / sections.length) * 100

  return (
    <div className="portfolio-container">
      {/* Indicador de progreso */}
      <div className="progress-indicator">
        <div 
          className="progress-bar" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Botón de menú móvil */}
      {isMobile && (
        <button 
          className="menu-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      )}
      
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={navigateToSection}
        isOpen={sidebarOpen}
      />

      {/* Contenido principal */}
      <div className={`content ${sidebarOpen && isMobile ? 'sidebar-open' : ''}`}>
        <div 
          className="sections-container" 
          style={{
            transform: `translateX(-${getCurrentSectionIndex() * 100}vw)`,
            transition: isAnimating ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
          }}
        >
          {sections.map((sectionId) => {
            const Component = sectionComponents[sectionId]
            return (
              <div key={sectionId} className="section">
                <Component />
              </div>
            )
          })}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="navigation-buttons">
        <button
          className="nav-button prev"
          onClick={() => {
            const currentIndex = getCurrentSectionIndex()
            if (currentIndex > 0) {
              navigateToSection(sections[currentIndex - 1])
            }
          }}
          disabled={getCurrentSectionIndex() === 0 || isAnimating}
          aria-label="Previous section"
        >
          ← Previous 
        </button>
        
        <button
          className="nav-button next"
          onClick={() => {
            const currentIndex = getCurrentSectionIndex()
            if (currentIndex < sections.length - 1) {
              navigateToSection(sections[currentIndex + 1])
            }
          }}
          disabled={getCurrentSectionIndex() === sections.length - 1 || isAnimating}
          aria-label="Next section"
        >
          Next →
        </button>
      </div>

      {/* Indicador de sección actual */}
      <div className="section-indicator">
        <span className="current-section-name">
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </span>
        <span className="section-counter">
          {getCurrentSectionIndex() + 1} / {sections.length}
        </span>
      </div>
    </div>
  )
}

export default App