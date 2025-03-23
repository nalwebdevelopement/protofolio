import React from 'react'
import './Expbox.css'
function Expbox({yrs,title,desc}) {
  return (
    <div className="expbox">
        <h1> {yrs}</h1>
        <h2> {title} </h2>
        <h2> {desc} </h2>
      
    </div>
  )
}

export default Expbox
