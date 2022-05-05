import React from 'react'
import SkillItem from './SkillItem'


function ExperienceList(props) {
  const skills = props.skills
 
  return (
    <div className="experience__content">
      {skills.map(skill => {
        return <SkillItem skill={skill} key={skill.id}/>
      })}  
    </div>
  )
}

export default ExperienceList