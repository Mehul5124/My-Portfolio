import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Frontend Developer'
  
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)
    
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-name cyan-glow">
            Mehul P Balsara
          </h1>
          
          <div className="typing-container">
            <h2 className="hero-title">
              {displayedText}
              <span className="cursor">|</span>
            </h2>
          </div>

          <p className="hero-description">
            Curious and passionate about building real-time solutions with my frontend skills. 
            I specialize in component architecture, seamless API integration, and bringing designs 
            to life with clean, maintainable code. Every project is an opportunity to solve real 
            problems and create value through technology.
          </p>

          <a href="/resume.pdf" download className="gradient-btn resume-btn">
            Download Resume (.pdf)
          </a>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
