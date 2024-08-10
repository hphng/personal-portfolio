import React from 'react'
import Particles from "@tsparticles/react";
import './index.css'
import { landingPageParticles } from "../../utils/tsParticlesOptions";

const LandingPage = () => {
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <section className='landing-page'>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={landingPageParticles}
      />
      <div className="introduction">
        <h1>My name is Huy Phung</h1>
        <h2>See my portfolio?</h2>
      </div>
    </section>
  )
}

export default LandingPage
