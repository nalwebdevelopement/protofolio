// About page is my top container
import React from 'react'
import {Element} from "react-scroll"
import AboutContent from './AboutContent'
import Skill from './Skill'
import Project from './Project'
import './topcontainer.css'
import Experience from './Experience'
import Contact from './Contact'



function TopContainer() {
  return (
    
   <>
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
      <Element name="Contact" ClassName="contact">
      <Contact/>
      </Element>
      
</>
  )
} 

export default TopContainer
