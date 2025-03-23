import React from 'react'
import Expbox from './Expbox';
import './Experience.css'

function Experience() {

    const exp = [
        {
            yrs : "2 yrs",
            title:"QA Engineer",
            desc:"Nallas LLC"
        },
        {
            yrs : "2 mon at present",
            title:"Software Engineer",
            desc:"Art Sphere Inc"
        },
        
    ]
  return (
    <div className= "expcontent">
        <h1> My Experience</h1>
        <div className="expcontent__box">
        {
            exp.map((exp,index) => {
                return(
                <Expbox 
                key={index}
                yrs = {exp.yrs}
                title = {exp.title}
                desc ={exp.desc}/>
                );
            })
        }






       

        </div>
      
    </div>
  )
}

export default Experience
