import React from 'react'
import ExperienceList from './ExperienceList'
import { frontend, backend } from './experiences'
import './experience.css'

function Experience() {
  return (
    <section id='experience' className='observe'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <ExperienceList skills={frontend}/>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <ExperienceList skills={backend}/>
        </div>
      </div>
    </section>
  )
}

export default Experience