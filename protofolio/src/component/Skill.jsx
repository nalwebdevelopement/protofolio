import React from 'react'
import {Element} from 'react-scroll'
import skillimg from '../assets/skills.png'
import LinearProgress from '@mui/material/LinearProgress';
import './skill.css'
function Skill() {
  return (
   <Element className="skillcontainer" id="skills">
    <div className="skillcontainer__image">
       <img src={skillimg} alt="skills"/>    
    </div >
        
    <div className="skillcontainer_text">
      <h2>   SKILL SET    </h2>
                   <div  className="skillcontainer__skillset">
                   <h5> REACT</h5> 
                   <div  className="skillcontainer__slider skillcontainer__slider1">
                    <LinearProgress variant='determinate' value= {90}/>
                    </div>
                    </div>
                    <div  className="skillcontainer__skillset">
                   <h5> JAVA</h5> 
                   <div  className="skillcontainer__slider skillcontainer__slider2">
                    <LinearProgress variant='determinate' value= {60}/>
                    </div>
                    </div>
                    <div  className="skillcontainer__skillset">
                   <h5> SELENIUM</h5> 
                   <div  className="skillcontainer__slider skillcontainer__slider3">
                    <LinearProgress variant='determinate' value= {50}/>
                    </div>
                    </div>
                    <div  className="skillcontainer__skillset">
                   <h5> JAVA</h5> 
                   <div  className="skillcontainer__slider skillcontainer__slider4">
                    <LinearProgress variant='determinate' value= {90}/>
                    </div>
                    </div>
                    <div  className="skillcontainer__skillset">
                   <h5> CSS</h5> 
                   <div  className="skillcontainer__slider skillcontainer__slider5">
                    <LinearProgress variant='determinate' value= {90}/>
                    </div>
                    </div>
                    

    </div>

   </Element>
  )
}

export default Skill
