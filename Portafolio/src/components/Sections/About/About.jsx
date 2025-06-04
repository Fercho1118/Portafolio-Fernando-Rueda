import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm Fernando Rueda, a third-year Computer Science and Information Technology student at Universidad del Valle de Guatemala.
          </p>
          <p>
            I'm passionate about web development, especially building backend services and APIs that are scalable and efficient. I’m also deeply interested in Artificial Intelligence, particularly in the areas of Large Language Models (LLMs) and how they are transforming the future of software and human-computer interaction.
            I'm constantly learning and experimenting with new tools and technologies, and I enjoy working on projects that challenge me to think critically and build creative solutions.
            Currently looking for opportunities to grow professionally and contribute to real-world software development teams.
          </p>
          <div className="personal-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Fernando Rueda</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">ferchins1118@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Guatemala City, Guatemala</span>
            </div>
            <div className="info-item">
              <span className="info-label">Availability:</span>
              <span className="info-value">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About