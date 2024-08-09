import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useEffect, useState } from "react";
import { tsParticles } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadLightInteraction } from "@tsparticles/interaction-light"
import { mainContentParticles } from './utils/tsParticlesOptions';
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';

function App() {
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
    <div>
      <LandingPage />
      <div className='main-nav-content'>
        {/* <NavBar /> */}
        <div className="canvas">
          <Particles
            className='main-tsparticles'
            id="mainTsparticles"
            particlesLoaded={particlesLoaded}
            options={mainContentParticles}
          />
        </div>
        <div className="main-content">
          <HomePage />
          <AboutPage />
          <SkillsPage />
        </div>
      </div>
    </div>
  )
}

export default App
