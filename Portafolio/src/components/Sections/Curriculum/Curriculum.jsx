import { motion } from 'framer-motion'
import './Curriculum.css'
import { FaDownload } from 'react-icons/fa'

const Curriculum = () => {
  const handleDownloadCV = () => {
    window.open('/assets/pdf/curriculum.pdf', '_blank')
  }

  const education = [
    {
      id: 1,
      title: 'Bachelor of Science and Letters with Computer Orientation',
      institution: 'Colegio Gibbs',
      period: '2008 - 2022',
      description: 'The program provided a strong foundation in general education subjects such as mathematics, language, and natural sciences, while offering a focused introduction to computing concepts, programming logic, and basic software tools. This early academic background sparked my interest in technology and laid the groundwork for my further studies in software development and IT.'
    },
    {
      id: 2,
      title: 'Engineering in Computer Science and Information Technology',
      institution: 'Universidad del Valle de Guatemala',
      period: '2023 - 2027',
      description: 'Currently pursuing an Engineering in Computer Science and Information Technology at Universidad del Valle de Guatemala, one of the country’s most prestigious institutions in science and technology. The program combines a strong foundation in theoretical computer science—including algorithms, data structures, and mathematics—with practical training in software engineering, systems architecture, networking, and emerging technologies.'
    }
  ]

  const experience = [
    {
      id: 1,
      description: 'While I do not yet have formal work experience in the tech industry, I am actively seeking internship or entry-level opportunities where I can apply and continue developing my skills in software development, backend systems, and modern web technologies. I have completed several academic and personal projects that demonstrate my ability to work with real-world tools, collaborate effectively, and solve problems through code. I am eager to contribute to a professional environment, learn from experienced developers, and grow as a software engineer.'
    }
  ]

  return (
    <motion.div
      className="curriculum-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Curriculum vitae</h2>
      
      <div className="download-section">
        <button className="download-button" onClick={handleDownloadCV}>
          <FaDownload className="download-icon" /> Download CV
        </button>
      </div>

      <div className="curriculum-content">
        <div className="education-section">
          <h3 className="subsection-title">Education</h3>
          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-item" key={item.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p className="institution">{item.institution}</p>
                  <p className="period">{item.period}</p>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h3 className="subsection-title">Work Experience</h3>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Curriculum