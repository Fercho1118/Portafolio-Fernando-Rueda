import { useEffect } from 'react'
import './Sidebar.css'
import { FaUser, FaFileAlt, FaCode, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Sidebar = ({ activeSection, setActiveSection, isOpen }) => {
  const menuItems = [
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'curriculum', label: 'Curriculum Vitae', icon: <FaFileAlt /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ]

  const socialLinks = [
    { id: 'github', icon: <FaGithub />, url: 'https://github.com/Fercho1118' },
    { id: 'linkedin', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/fernando-rueda-2a5601369/' }
  ]

  // Función para manejar el click en un elemento del menú
  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId)
  }

  const handleDownloadCV = () => {
    // Ruta al archivo PDF del currículum
    window.open('/assets/pdf/curriculum.pdf', '_blank')
  }

  // Prevenir scroll cuando el sidebar está abierto en móvil
  useEffect(() => {
    if (window.innerWidth <= 768) {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay para cerrar el sidebar en móvil */}
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setActiveSection && setActiveSection(activeSection)}
        />
      )}
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="profile">
          <div className="profile-image">
            <img 
              src="assets/images/profile/perfil.jpg" 
              alt="Fernando Rueda"
              onError={(e) => {
                // Fallback si la imagen no se encuentra
                e.target.style.display = 'none'
                e.target.parentElement.style.background = 'linear-gradient(135deg, #e94560, #1a1a2e)'
                e.target.parentElement.innerHTML = '<span style="color: white; font-size: 2rem; display: flex; align-items: center; justify-content: center; height: 100%;">FR</span>'
              }}
            />
          </div>
          <h2>Fernando Rueda</h2>
          <p>Web Developer</p>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                <button
                  className="nav-link"
                  onClick={() => handleMenuClick(item.id)}
                  aria-label={`Ir a ${item.label}`}
                >
                  <span className="icon">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {activeSection === 'curriculum' && (
          <button className="download-cv" onClick={handleDownloadCV}>
            Descargar CV
          </button>
        )}

        {/* Indicadores de progreso */}
        <div className="progress-dots">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`progress-dot ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.id)}
              aria-label={`Ir a ${item.label}`}
            />
          ))}
        </div>

        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={`Visitar ${link.id}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar