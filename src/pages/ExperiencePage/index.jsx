import React from 'react'
import './index.css'

const ExperiencePage = () => {
  const work = [
    {
      id: "1",
      date: "Dec 2025 - Present",
      title: "Software Engineer",
      location: "Seattle, Washington",
      company: "Venera",
      description: [
        "Developed a AI-powered personal health companion using Django, PostgreSQL, and Docker to deliver APIs for biometrics analysis, OCR, and Apple Health ingestion, supporting about 1500+ monthly health evaluations",
        "Integrated a unified GPT orchestration layer wrapping Azure OpenAI to handle streaming chat, tool calls, and system-prompt consistency, improving model response stability by 40% across OCR and health-analysis workflows",
        "Engineered a CI/CD pipeline using Github Action and Microsoft Azure, automated Docker image build to ACR and Linux VM, eliminated manual intervention, and reduced deployment time from 30 minutes to 5 minutes",
      ]
    },
    {
      id: "2",
      date: "May 2025 - Dec 2025",
      title: "AI Engineer Scholar",
      location: "Seattle, Washington",
      company: "Amazon Web Services (AWS) AI Engineer Scholar",
      description: [
        "Constructed an intelligent document-querying system with AWS Bedrock, S3, Aurora Serverless vector indexing, and VPC-isolated, enabling multi-sentence semantic search over 500+ PDFs with 2–5s retrieval latency",
        "Built an end-to-end retrieval pipeline: PDF ingestion, chunking, embedding generation, vector indexing, retrieval, prompt augmentation, and LLM inference, achieving 92% query accuracy for multi-sentence searches",
        "Implemented prompt-classifiation guardrails to automatically detect and fiter unsafe or out-of-domain queries"
      ]
    },
    {
      id: "3",
      date: "Aug 2025 - Dec 2025",
      title: "Software Engineer Intern",
      location: "Valdosta, Georgia",
      company: "South Georgia Pecan Company",
      description: [
        "Designed an internal operations platform using React, Tailwinds, and MUI to replace paper-based workflws, enabling 100+ warehouse staf to digitally submit forms, reducing operational cost by $55K+ annually",
        "Deployed a Docker-based internal registry and CI/CD pipeline for on-premises warehouse infrastructure, standardizing backend deployment on the warehouse network with health-check driven rollback",
        "Built a small C++ utility and Bash scripting on Linux to process and aggregate server operational logs, focusing on file I/O, memory-safe data structures, and efficient parsing for internal monitoring"
      ]
    },
    {
      id: "4",
      date: "2024",
      title: "Software Engineer Intern",
      location: "Hanoi, Vietnam",
      company: "Finbud",
      description: [
        "Developed a full-stack financial app using Nodejs, OpenAI APIs, Vuejs, and Netlify for beginner and retail investors to get financial guidance by AI Chatbot, track stock on real time, and learn through financial quizzes",
        "Architected a RAG pipeline reducing hallucination rates 35% in sensitive financial recommendations",
        "Led a team of 5 to integrate Alpha Vantage and Polyon.io APIs, providing real-time financial market data of 200 companies, which attracted key investment partner that funded $5k+, and boosted user adoption by 40%"
      ]
    },
    {
      id: "5",
      date: "2023",
      title: "Software Engineer Intern",
      location: "Hanoi, Vietnam",
      company: "Tinh Van Software Organization",
      description: [
        "Achieved a 30% boost in user engagement, quantifid by increased interaction, through a strategic migration to Next.js and WebSocket, enhancing the website interface and interactive UI elements",
        "Developed a scalable microservices backend utilizing RabbitMQ for asynchronous messaging, leading to 20% API response effiency, and enhancing system with MongoDB indexing, Redis caching, and Docker container",
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
