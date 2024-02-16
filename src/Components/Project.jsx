import React from 'react'
import '../styles/Project.css'

const Project = ({ info }) => {
  return (
    <div className="project">
      <img src={info.img} alt={info.name} />
      <h2>{info.name}</h2>
      <p>{info.desc}</p>
      <div className="tech-stack">
        {info.techs.map(item => <div key={item}>{item}</div>)}
      </div>
      <div className="btns">
         {info.liveLink && <a href={info.liveLink} target="_blank" rel="noreferrer">Live</a>}
        {info.githubLink && <a href={info.githubLink} target="_blank" rel="noreferrer">Github</a>}
        {info.certification && <a href={info.certification} target='_blank' rel="noreferrer">Certificate</a>}
      </div>
    </div>
  )
}

export default Project;
