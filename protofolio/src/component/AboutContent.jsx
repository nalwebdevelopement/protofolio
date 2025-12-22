import React from 'react'
import {Link} from "react-scroll"
import './aboutContent.css'


function AboutContent() {
  return (
    <div className="aboutContent">
      <div className="aboutContent__container">
        <h1> Hi, Welcome to my Protofolio Website</h1>
        <p> I am a Passionate and detail-oriented Web Developer with a strong track record of delivering high-quality web solutions throughout the Development Lifecycle (SDLC). Seeking opportunities to apply expertise in front-end and back-end development, project management, 
          and team collaboration in fast-paced environments. Ability to work collaboratively and independently.</p>
        <a href="/Nalini_Resume.pdf" download >
            <button className="resume"> Download CV</button>
        </a>
        <Link to="project" smooth ={true} duration ={500}>
        <button className="mywork"> My work </button>
        </Link>
      </div>
    </div>
  )
}

export default AboutContent
