import React from 'react'
import './index.css'

const ExperiencePage = () => {
  const work = [
    {
      id: "1",
      date: "2024",
      title: "Software Engineer Intern",
      location: "Chicago, Illinois",
      company: "Finbud Software Company",
      description: [
        "Developed a website integrated with AI to enhance user financial decision-making, including realtime stock price updates, personalized investment strategies, saving optimization, and smart expenditures planning.",
        "Created a backend server with authentication and database management to support the data analytics team, providing deep financial insights and educational resources."
      ]
    },
    {
      id: "2",
      date: "2023",
      title: "Software Engineer Intern",
      location: "Hanoi, Vietnam",
      company: "Tinh Van Software Organization",
      description: [
        "Increased user engagement by 30% and optimized website performance through a strategic migration to the Next.js framework.",
        "Developed a microservices backend utilizing REST APIs, applying the MVC pattern with JavaScript, MongoDB, Redis, and Docker for optimal scalability and maintainability."
      ]
    },
    {
      id: "3",
      date: "2022",
      title: "Full-stack Engineer Intern",
      location: "Hanoi, Vietnam",
      company: "FPT Software Company",
      description: [
        "Spearheaded the development of back-end for a prototype website by utilizing Node.js and conducted rigorous testing with Postman to ensure optimal performance and functionality.",
        "Designed and distributed embedded databases using pgAdmin4 and psql, reducing the deploy time by 30%.",
        "Guided a team of three developers to implement the front-end, steering the website towards modernization through React and ensuring a cohesive and user-friendly interface."
      ]
    }
  ];
  return (
    <section className='exp-container' id="experience">
      <div className="exp-title">Experience</div>
      <div className="exp-work">
        {work.map((job) => (
          <div className="job" date={job.date} key={job.id}>
            <div className="job-company-date">
              <span className='job-company'>{job.company}</span>
              <span className='job-location'>{job.location}</span>
            </div>
            <div className="job-title">{job.title}</div>
            <ul className="job-description">
              {job.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperiencePage;
