import React from 'react';
import Project from './Project.jsx';
import researchClubImage from '../Components/assets/researchClub.png';
import ticTacToeImage from '../Components/assets/tic-tac-toe.png';
import objDetection from '../Components/assets/objDetection.png';
import cleanLabel from '../Components/assets/cleanLabel.png';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    one: {
      name: 'Website for Research Club USM',
      desc: 'Made a website for the Research Club USM using MERN Stack',
      liveLink: 'https://usm-research-club.vercel.app/',
      techs: ['React JS', 'Tailwind CSS', 'Node JS', 'Express', 'MongoDB', 'Vercel'],
      img: researchClubImage,
    },
    two: {
      name: 'Object Detection',
      desc: 'Calculated the accuracy of different object detection models using Mean Average Precision (mAP) and F1 Score.',
      githubLink: 'https://github.com/rupaut98/img-det-benchmark.git',
      techs: ['Python', 'Detectron2', 'YOLOv8', 'YOLOv5', 'SAM', 'YOLOv3', 'SSD-Model'],
      img: objDetection,
    },
    three: {
      name: 'Tic-Tac-Toe',
      desc: 'Made a Tic-Tac-Toe game using React Js.',
      liveLink: 'https://tic-tac-toe-kixj.vercel.app/',
      githubLink: 'https://github.com/bipuladk60/tic-tac-toe.git',
      techs: ['HTML', 'CSS', 'React'],
      img: ticTacToeImage,
    },
    four: {
      name: 'CleanLabel',
      desc: 'Made an iOS app that scans ingredient labels and shows which ingredients are harmful to health.',
      techs: ['SwiftUI', 'Express.js', 'Node.js', 'postgresql'],
      img: cleanLabel,
      certification: 'https://www.linkedin.com/posts/bipul-adhikari-490009244_im-excited-to-announce-that-my-team-me-activity-7136840828672491520-B_-E?utm_source=share&utm_medium=member_desktop'
    }

  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.one} />
        <Project info={projectsInfo.four} />
        <Project info={projectsInfo.two} />
        <Project info={projectsInfo.three} />
       
      </div>
    </div>
  )
}

export default Projects;
