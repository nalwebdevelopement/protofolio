import React from 'react'
import Expbox from './Expbox';
import './Experience.css'

function Experience() {

    const exp = [
        {
            yrs : "June 2022 – May 2024",
            title:"QA Engineer",
            desc:"Nallas LLC"
        },
        {
            yrs : "Jan 15 2025 – till date",
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
