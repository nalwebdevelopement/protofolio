import React from 'react'
import { useState } from 'react'
import "./projectcont.css";

function projectcont({img,title,desc,link}) {
    const[show,SetShow] = useState(false)
  return (
    <a href={link}>
    <div className="project" onMouseEnter={()=>SetShow(true)} onMouseLeave={()=> SetShow(false)}>
      {/* Conditional rendering */}

      {show ?
      (<div className="project__content"> <h3> {title} </h3> <p> {desc}</p>  </div>)
      :
      ( <img src= {img} alt=""/>
      )}
      

    </div>
    </a>
  )
}

export default projectcont
