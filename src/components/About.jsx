import './About.css'

const About = () => {
  const skills = {
    languages: ['JavaScript', 'HTML5', 'CSS3', 'Python'],
    frameworks: ['React', 'Tailwind CSS', 'Backend Integration'],
    tools: ['Git', 'VS Code', 'Vite', 'npm', 'Postman', 'Figma']
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Frontend Developer with a vision that goes beyond traditional web development. 
              My journey is driven by the exciting intersection of frontend technologies and artificial intelligence, 
              where I see endless possibilities for innovation.
            </p>
            <p>
              With a strong foundation in React and modern web development, I'm constantly exploring how to integrate 
              AI/ML capabilities into user interfaces to create intelligent, adaptive, and truly innovative solutions. 
              I believe the future of web development lies in merging beautiful, responsive frontends with the power 
              of machine learning to deliver experiences that are not just interactive, but truly smart.
            </p>
            <p>
              My goal is to be at the forefront of this convergence, building applications that leverage AI to solve 
              real-world problems while maintaining exceptional user experience. Whether it's implementing intelligent 
              recommendations, natural language interfaces, or predictive features, I'm committed to pushing the 
              boundaries of what's possible in modern web development.
            </p>
          </div>

          <div className="skills-section">
            <h3>Technical Skills</h3>
            
            <div className="skills-category">
              <h4>Languages</h4>
              <div className="skills-grid">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h4>Frameworks & Libraries</h4>
              <div className="skills-grid">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="skill-tag mern-highlight">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h4>Tools & Technologies</h4>
              <div className="skills-grid">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
