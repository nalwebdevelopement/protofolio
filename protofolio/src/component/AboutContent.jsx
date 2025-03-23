import React from 'react'
import {Link} from "react-scroll"
import './aboutContent.css'


function AboutContent() {
  return (
    <div className="aboutContent">
      <div className="aboutContent__container">
        <h1> Nalini Udhayakumar</h1>
        <p> I am a React Developer</p>
        <a href="www.google.com">
            <button className="resume"> Download CV</button>
        </a>
        <Link to="Project" smooth ={true} duration ={500}>
        <button className="mywork"> My work </button>
        </Link>
      </div>
    </div>
  )
}

export default AboutContent
