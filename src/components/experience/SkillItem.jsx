import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

function SkillItem(props) {
  const skill = props.skill

  return (
    <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon'/>
      <div>
        <h4>{skill.skill}</h4>
        <small className='text-light'>{skill.level}</small>
      </div>
    </article>
  )
}

export default SkillItem