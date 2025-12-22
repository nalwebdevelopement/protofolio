import React from 'react'
import './Expbox.css'
function Expbox({yrs,title,desc}) {
  return (
    <div className="expbox">
        
        <h1> {title} </h1>
        <h2> {desc} </h2>
        <h2> {yrs}</h2>
      
    </div>
  )
}

export default Expbox
