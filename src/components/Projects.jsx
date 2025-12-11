import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Medi-Connect - Healthcare Management Website',
      description: 'A comprehensive healthcare management system featuring patient appointments, medical records, and real-time chat. Implemented secure authentication with JWT, utilized React Context API for global state management, and integrated MongoDB for efficient data storage. Built responsive UI with Tailwind CSS ensuring seamless mobile experience.',
      image: '/projects/medical-app.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT'],
      liveLink: 'https://medi-connect-nine-sigma.vercel.app',
      githubLink: 'https://github.com/Mehul5124/Medi-Connect'
    },
    {
      id: 2,
      title: 'OPTI-RANK - Digital SEO & Analytics Platform',
      description: 'A comprehensive full-stack web application for managing and optimizing digital marketing across multiple platforms. Features include real-time analytics dashboard, SEO audit tool with platform detection and scoring system, learning center with 12+ marketing courses, 15+ ready-to-use content templates, and complete user authentication with JWT. Built with responsive design and modern UI featuring interactive elements and smart recommendations.',
      image: '/projects/optirank.jpg',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express', 'MongoDB'],
      liveLink: 'https://opti-rank.netlify.app/',
      githubLink: 'https://github.com/Mehul5124/OPTI-RANK'
    },
    {
      id: 3,
      title: 'TechPath Navigator - Career Roadmap Platform',
      description: 'An interactive web application providing comprehensive career roadmaps for different fields in Computer Science and Engineering. Features detailed pathways for Web Development, Data Science, AI/ML, Cybersecurity, and more. Built with clean HTML/CSS/JavaScript architecture, includes step-by-step learning guides, resource recommendations, and skill progression tracking for aspiring tech professionals.',
      image: '/projects/cse-roadmap.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: 'https://cse-roadmap.netlify.app/',
      githubLink: 'https://github.com/Mehul5124/cse-roadmap-explorer'
    },
    {
      id: 4,
      title: 'My Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with a Tech Cyan theme. Features typing animations, gradient buttons, smooth scrolling, mobile-first responsive design, contact form with Formspree integration, and optimized performance. Built with React and Vite for fast development and deployment.',
      image: '/projects/portfolio.jpg',
      technologies: ['React', 'Vite', 'CSS3', 'Formspree', 'JavaScript'],
      liveLink: '#',
      githubLink: 'https://github.com/Mehul5124/My-Portfolio'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          A showcase of my recent work demonstrating full-stack capabilities and modern web development practices
        </p>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
