import React from 'react'
import { useCallback, useEffect, useState } from "react";
import { tsParticles } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadLightInteraction } from "@tsparticles/interaction-light"
import './index.css'
import options from "../../utils/tsParticlesOptions";

const LandingPage = () => {
  const [ init, setInit ] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          // await loadAll(engine);
          await loadLightInteraction(tsParticles);
          await loadFull(engine);
          // await loadSlim(engine);
          //await loadBasic(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
};
  return (
    <div className='landing-page'>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div className="introduction">
        <h1>My name is Huy Phung</h1>
        <h2>See my portfolio?</h2>
      </div>
    </div>
  )
}

export default LandingPage
