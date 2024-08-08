import React from 'react'
import './index.css'
import { Col, Row, Container, Button } from 'react-bootstrap' 
import Huy from '../../assets/Huy_rmbg.png'
import myResume from '../../../public/Resume.pdf'

const HomePage = () => {
  return (
    <div className='home-page-container' id='home'>
        <Row className='row'>
          <Col md={6}>
            <div className="home-text">
              <div className='home-intro'>Hi, my name is</div>
              <div className='home-name'>Henry Phung</div>
              <div className='home-title'>
              <a href={myResume} download={myResume}>
                <Button size="lg" variant="outline-light" className='resume-button'>
                  My Resume
                </Button>
              </a>
              </div>
              <h2 className='home-job'>I am a
                <div className="home-words">
                  <span> Fullstack Developer.</span>
                  <span> Leetcode Enthusiast.</span>
                  <span> Competitive Programmer.</span>
                </div>
              </h2>
            </div>
          </Col>
          <Col md={6}>
            <div className="right">
              <h1>Something is here</h1>
            </div>
          </Col>
        </Row>
      {/* <div className="a">
        <h1>under col row</h1>
      </div> */}
      {/* <div className="home-image">
        <h1>Home image goes here</h1>
      </div> */}
    </div>
  )
}

export default HomePage
