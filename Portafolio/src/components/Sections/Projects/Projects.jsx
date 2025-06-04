import { motion } from 'framer-motion'
import './Projects.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Rick & Morty Memory Game',
      description: 'This project is a memory game built with React, designed to reinforce key concepts such as using external JavaScript libraries, configuring a minimal React environment without frameworks like Create React App or Vite, and applying Babel for JSX transpilation. The game features a 4x4 grid of cards, each representing a character fetched from the Rick and Morty API. Cards are initially displayed face-down and can be flipped by clicking on them. If the selected pair doesnt match, the cards flip back after a brief delay. The game ends when all pairs are correctly matched.',
      image: '/assets/images/projects/memory_game.png',
      technologies: ['HTML', 'JavaScript', 'CSS', 'React'],
      githubUrl: 'https://github.com/Fercho1118/Lab7-React.git',
      liveUrl: 'https://benedict.lat/rueda/Laboratorios/Lab7-React/'
    },
    {
      id: 2,
      title: 'Calculator',
      description: 'This project is a simple calculator built with React, designed to deepen my understanding of component-based application architecture, testing practices, and JavaScript linting. The calculator features a numeric keypad and a display. All input is handled exclusively through button clicks—keyboard input is disabled by design. Users can perform basic arithmetic operations including addition, subtraction, multiplication, division, modulo, and toggle positive/negative values. A custom set of constraints was implemented to ensure precise control over user interaction and facilitate thorough testing.',
      image: '/assets/images/projects/calculator.png',
      technologies: ['HTML', 'JavaScript', 'CSS', 'React'],
      githubUrl: 'https://github.com/Fercho1118/Proyecto-Calculadora-React.git',
      liveUrl: 'https://benedict.lat/rueda/Laboratorios/calculadora/'
    },
    {
      id: 3,
      title: 'Rick and Morty App',
      description: 'This Android application, developed in Kotlin, connects to the Rick and Morty public API to provide users with detailed information about the show’s characters and locations. The app includes a login system and a structured navigation flow, redirecting users to different sections of the app after authentication.',
      image: '/assets/images/projects/app.png',
      technologies: ['Kotlin'],
      githubUrl: 'https://github.com/Fercho1118/Nuevo_repo_plataformas_moviles.git',
    },
    {
      id: 4,
      title: 'Ghosts with only CSS',
      description: 'This project is a CSS-based illustration built without using any JavaScript, focusing entirely on HTML and CSS for structure and styling. The challenge was to recreate a chosen image as accurately as possible, using only web technologies—and without relying on commonly automated tools or shortcuts.',
      image: '/assets/images/projects/ghosts.png',
      technologies: ['HTML', 'CSS'],
      githubUrl: 'https://github.com/Fercho1118/lab_4.git',
      liveUrl: 'https://benedict.lat/rueda/Laboratorios/lab_4/'
    },
    {
      id: 5,
      title: 'Technical Consultation Assistant',
      description: 'This project implements a Streamlit-based technical assistant that uses large language models (LLMs) such as GPT-4, Pinecone as a vector store, and LangChain to facilitate the integration and execution of questions on documents uploaded to the system.',
      image: '/assets/images/projects/technical_assistant.png',
      technologies: ['Python'],
      githubUrl: 'https://github.com/Fercho1118/Proyecto2_IA.git',
    },
    {
      id: 6,
      title: 'Digital Research Assistant',
      description: 'This project is an interactive web application developed with Streamlit that works as a digital research assistant. It allows users to enter a topic of interest, perform a real-time information search using the Tavily API, generate an automatic summary of the content with OpenAI, and display the most frequent words in a word cloud.',
      image: '/assets/images/projects/assistant.png',
      technologies: ['Python'],
      githubUrl: 'https://github.com/Fercho1118/Proyecto1_IA.git',
    },
    {
      id: 7,
      title: 'SoilSensor',
      description: 'This project focuses on the development of an automated system for monitoring ambient temperature and humidity using the ESP32 microcontroller and an Adafruit Seesaw sensor. The system is designed to collect real-time environmental data and transmit it via WiFi to a MySQL database, where it can be easily accessed and visualized through a web interface. Such a system is especially relevant for applications in agriculture, climate-sensitive storage, and building management, where maintaining specific environmental conditions is critical for product preservation or human comfort.',
      image: '/assets/images/projects/SoilSensor.png',
      technologies: ['C++', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/Fercho1118/SoilSensor.git',
    },
    {
      id: 8,
      title: 'La Liga Tracker API',
      description: 'In this project, I developed a complete RESTful backend API in PHP to support an existing frontend application called La Liga Tracker, which enables users to manage football matches from Spain’s La Liga. The backend was built to integrate seamlessly with the complex frontend and deployed using Docker for portability and ease of setup.',
      image: '/assets/images/projects/laliga.png',
      technologies: ['PHP', 'Docker'],
      githubUrl: 'https://github.com/Fercho1118/Lab-6-Backend-only.git',
      liveUrl: 'https://tu-usuario.github.io'
    },
    {
      id: 9,
      title: 'Personal portfolio',
      description: 'This project is a frontend application developed using React and built with Vite as the build tool and development server. The combination of React’s component-based architecture and Vite’s fast bundling and hot module replacement creates a highly efficient and developer-friendly environment.',
      image: '/assets/images/projects/portfolio.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
      githubUrl: 'https://github.com/Fercho1118/Portafolio-Fernando-Rueda.git',
      liveUrl: 'https://tu-usuario.github.io'
    }
  ]

  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Proyects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div 
            className="project-card" 
            key={project.id}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Código
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span className="technology-tag" key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects