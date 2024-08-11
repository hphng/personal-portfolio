import React from 'react'
import './index.css'
import huyVideo from '../../assets/projects/huy.mp4'
import Finbud from '../../assets/projects/finbud.png'

const ProjectPage = () => {
  const projects = [
    {
      title: 'Finbud',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reiciendis magni, possimus illo voluptates adipisci sint ad dolorem, fugiat labore quas dolores, asperiores eius nihil. Excepturi blanditiis vero expedita mollitia?',
      source: Finbud,
      live: 'https://finbud.netlify.app/',
      github: ''
    },
  ]
  let id = 1;
  return (
    <section className='project-container' id="projects">
        <header className='project-header'>Projects</header>
        {projects.map((project) => (
                <div className="project" key={id++}>
                  <a className="project-showcase" href={project.live}>
                    <div className="project-image-container">
                      <img className="project-image" src={project.source} alt="project-image" />
                    </div>
                  </a>
                  <div className="project-info">
                    <h3 className='project-title'>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.live}>Live</a>
                    <a href={project.github}>Learn more</a>
                  </div>
                </div>
        ))}
        {/* <video className="video" src={huyVideo} controls ></video> */}
    </section>
  )
}

export default ProjectPage
