import React from 'react';
import Project from './Project.jsx';
import tictactoeImage from '../Assets/tictactoe.png';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Tic-Tac-Toe',
      desc: 'Made a Tic-Tac-Toe game using React Js.',
      liveLink: '/',
      githubLink: 'https://github.com/bipuladk60/tic-tac-toe/tree/main/tic-tac-toe',
      techs: ['HTML', 'CSS', 'React JS'],
    },
    two: {
      name: 'Object Detection',
      desc: 'Detected objects in Image & Videos using different object detection models like: Detectron2, SAM, YOLOv8 for a research project',
      liveLink: 'website url',
      githubLink: 'https://github.com/rupaut98/img-det-benchmark/tree/detectron2',
      techs: ['Python', 'Detectron2', 'YOLOv8', 'YOLOv5', 'SAM'],
    },
    three: {
      name: 'Netflix Clone',
      desc: 'Created a Front-end clone of Netflix using HTML, CSS, and Javascript.',
      liveLink: 'website url',
      githubLink: 'https://github.com/bipuladk60/Netflix-clone',
      techs: ['HTML', 'CSS', 'JavaScript'],
    }

  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.two} />
        <Project info={projectsInfo.three} />
      </div>
    </div>
  )
}

export default Projects;
