import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Sending message...'
    })
    
    fetch('https://formspree.io/f/mnnvqegb', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I will contact you soon.'
        })
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Shipping error')
      }
    })
    .catch(error => {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending the message. Please try again.'
      })
    })
    
    setTimeout(() => {
      if (formStatus.success) {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        })
      }
    }, 5000)
  }

  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'ferchins1118@gmail.com',
      link: 'mailto:ferchins1118@gmail.com'
    },
    {
      id: 2,
      icon: <FaPhone />,
      title: 'Phone number',
      value: '+502 3046 2158',
      link: 'tel:+50230462158'
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Guatemala City, Guatemala',
      link: 'https://www.google.com/maps/@14.5293312,-90.4691712,13z?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'
    }
  ]

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Contact</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="subsection-title">Contact Information</h3>
          <p className="contact-text">
          I am interested in freelance opportunities and challenging projects. 
          If you have any questions or proposals, do not hesitate to contact me.
          </p>
          
          <div className="contact-items">
            {contactInfo.map((item) => (
              <div className="contact-item" key={item.id}>
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-details">
                  <h4>{item.title}</h4>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3 className="subsection-title">Send me a message</h3>
          
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Email subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              <FaPaperPlane /> Send message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact