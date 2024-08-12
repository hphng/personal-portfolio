import React from 'react'
import './index.css'
import {Button, Card} from 'react-bootstrap'
import huyVideo from '../../assets/projects/huy.mp4'
import finbud from '../../assets/projects/finbud.png'
import musicApp from '../../assets/projects/music-app.png'
import businessCard from '../../assets/projects/bussiness-card.png'
import chatBox from '../../assets/projects/chat-box.png'

const ProjectPage = () => {
  const projects = [
    {
      title: 'Finbud',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reiciendis magni, possimus illo voluptates adipisci sint ad dolorem, fugiat labore quas dolores, asperiores eius nihil. Excepturi blanditiis vero expedita mollitia?',
      source: finbud,
      live: 'https://finbud.netlify.app/',
      github: ''
    },
    {
      title: 'Huy',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reiciendis magni, possimus illo voluptates adipisci sint ad dolorem, fugiat labore quas dolores, asperiores eius nihil. Excepturi blanditiis vero expedita mollitia?',
      source: musicApp,
      live: 'https://finbud.netlify.app/',
      github: ''
    },
    {
      title: 'Huy',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reiciendis magni, possimus illo voluptates adipisci sint ad dolorem, fugiat labore quas dolores, asperiores eius nihil. Excepturi blanditiis vero expedita mollitia?',
      source: chatBox,
      live: 'https://finbud.netlify.app/',
      github: ''
    },
    {
      title: 'Huy',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reiciendis magni, possimus illo voluptates adipisci sint ad dolorem, fugiat labore quas dolores, asperiores eius nihil. Excepturi blanditiis vero expedita mollitia?',
      source: businessCard,
      live: 'https://finbud.netlify.app/',
      github: ''
    },
    {
      title: 'Huy',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reiciendis magni, possimus illo voluptates adipisci sint ad dolorem, fugiat labore quas dolores, asperiores eius nihil. Excepturi blanditiis vero expedita mollitia?',
      source: huyVideo,
      live: 'https://finbud.netlify.app/',
      github: ''
    }
  ]
  let id = 1;
  return (
    <section className='project-container' id="projects">
        <header className='project-header'>Projects</header>
        {projects.map((project) => {
          const isVideo = project.source.includes('.mp4');
          return (
            (
              <div className="project" key={id++}>
                <a className="project-showcase" href={project.live}>
                  <div className="project-image-container">
                    {
                      isVideo ? (
                        <video className="project-image" src={project.source} controls ></video> 
                      ) : (
                        <img className="project-image" src={project.source} alt="project-image" />
                      )
                    }
                    {/* <img className="project-image" src={project.source} alt="project-image" /> */}
                  </div>
                </a>

                <Card className="project-info">
                  <Card.Body>
                    <Card.Title className='project-title'>{project.title}</Card.Title>
                    <Card.Subtitle className="project-subtitle text-light">Card Subtitle</Card.Subtitle>
                    <Card.Text className="project-description">{project.description}</Card.Text>
                    <Card.Link href={project.live} as="button" className='project-button project-live'>Live</Card.Link>
                    <Card.Link href={project.github} as="button" className='project-button project-github'>Learn more</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            ) 
          )
        })}
    </section>
  )
}

export default ProjectPage
