import React from 'react'
import './index.css';
import html from '../../assets/skills/html.svg';
import css from '../../assets/skills/css.svg';
import bootstrap from '../../assets/skills/bootstrap.svg';
import git from '../../assets/skills/git.svg';
import docker from '../../assets/skills/docker.svg';
import javascript from '../../assets/skills/javascript.svg';
import postgresql from '../../assets/skills/postgresql.svg';
import react from '../../assets/skills/react.svg';
import mongoDB from '../../assets/skills/mongoDB.svg';
import node from '../../assets/skills/node.svg';
import R from '../../assets/skills/R.svg';
import cplusplus from '../../assets/skills/cplusplus.svg';
import tableau from '../../assets/skills/tableau.svg';
import vue from '../../assets/skills/vue.svg';
import SkillIcon from '../../components/SkillIcon';

const SkillsPage = () => {
  return (
    <div className='skills-container' id="skills">
      <div className="skills-text">
        <h1 className='skills-title'>Skills</h1>
        <p>Here are some of the skills I have acquired through my education and work experience.</p>
      </div>
      <div className="skills-icon">
        <div className="skills-row">
          <SkillIcon icon={html} name="html" />
          <SkillIcon icon={bootstrap} name="bootstrap" />
        </div>
        <div className="skills-row">
          <SkillIcon icon={git} name="git" />
          <SkillIcon icon={docker} name="docker" />
          <SkillIcon icon={javascript} name="javascript" />
        </div>
        <div className="skills-row">
          <SkillIcon icon={postgresql} name="postgresql" />
          <SkillIcon icon={react} name="react" />
          <SkillIcon icon={mongoDB} name="mongoDB" />
          <SkillIcon icon={node} name="node" />
        </div>
        <div className="skills-row">
          <SkillIcon icon={css} name="css" />
          <SkillIcon icon={R} name="Rstudio" />
          <SkillIcon icon={cplusplus} name="cplusplus" />
        </div>
        <div className="skills-row">
          <SkillIcon icon={tableau} name="tableau" />
          <SkillIcon icon={vue} name="vue" />
        </div>
      </div>
    </div>
  )
}

export default SkillsPage;

