import { motion } from 'framer-motion'
import './Skills.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaVuejs, FaPython, FaJava, FaDocker } from 'react-icons/fa'
import { SiCplusplus, SiKotlin, SiPhp } from 'react-icons/si'

const Skills = () => {
  const technicalSkills = [
    { id: 1, name: 'HTML', icon: <FaHtml5 />, level: 90 },
    { id: 2, name: 'CSS', icon: <FaCss3Alt />, level: 90 },
    { id: 3, name: 'JavaScript', icon: <FaJs />, level: 85 },
    { id: 4, name: 'React', icon: <FaReact />, level: 80 },
    { id: 5, name: 'Node.js', icon: <FaNodeJs />, level: 75 },
    { id: 6, name: 'Vue', icon: <FaVuejs />, level: 80 },
    { id: 7, name: 'Python', icon: <FaPython />, level: 90 },
    { id: 8, name: 'PHP', icon: <SiPhp />, level: 60 },
    { id: 9, name: 'C++', icon: <SiCplusplus />, level: 70 },
    { id: 10, name: 'Git', icon: <FaGitAlt />, level: 80 },
    { id: 11, name: 'SQL', icon: <FaDatabase />, level: 85 },
    { id: 12, name: 'Java', icon: <FaJava />, level: 40 },
    { id: 13, name: 'Docker', icon: <FaDocker />, level: 60 },
    { id: 14, name: 'Kotlin', icon: <SiKotlin />, level: 40 },
  ]

  const softSkills = [
    { id: 1, name: 'Team Work', level: 90 },
    { id: 2, name: 'Comunication', level: 85 },
    { id: 3, name: 'Problems Resolutions', level: 90 },
    { id: 4, name: 'Adaptability', level: 85 },
    { id: 5, name: 'Time Management', level: 80 },
    { id: 6, name: 'Critical Thinking', level: 85 },
  ]

  return (
    <motion.div
      className="skills-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-content">
        <div className="technical-skills">
          <h3 className="subsection-title">Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill) => (
              <div className="skill-item" key={skill.id}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="soft-skills">
          <h3 className="subsection-title">Soft Skills</h3>
          <div className="skills-list">
            {softSkills.map((skill) => (
              <div className="soft-skill-item" key={skill.id}>
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-bar-container">
                  <div 
                    className="skill-bar" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills