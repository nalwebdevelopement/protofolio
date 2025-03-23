// About page is my top container
import React from 'react'
import {Element} from "react-scroll"
import AboutContent from './AboutContent'
import Skill from './Skill'
import Project from './Project'
import './topcontainer.css'
import Experience from './Experience'



function TopContainer() {
  return (
    
   <> // the name should match with the link in header.jsx
    <Element name="about" className="topContainer">  
       <AboutContent/>
      
      </Element>
    <Element name="skill" ClassName="Skills">
      <Skill/>
      </Element>
      <Element name="project" ClassName="project">
      <Project/>
      </Element>
      <Element name="expe" ClassName="expe">
      <Experience/>
      </Element>
      
</>
  )
} 

export default TopContainer
