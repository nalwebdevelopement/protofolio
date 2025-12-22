import React from 'react'
import Projectcont from './projectcont';
import './project.css';
import todoImage from "../assets/todo.png";
import togglecolor from "../assets/togglecolor.png";
import currency from "../assets/currency.png";
import capstone from "../assets/capstone.png"



function Project() {
const  clientprojects = [
    {
        img:todoImage,
        title:"TO DO LIST",
        desc: "The To-Do List App is a task management tool that allows users to create, update, and delete tasks efficiently. Built using React and MongoDB, this app helps users stay organized by storing their tasks in a database, ensuring persistence across sessions.",
        link: "https://naltodo1.netlify.app"

    },
    {
        img:togglecolor,
        title:"TOGGLE COLOR",
        desc: "Simple React project that toggles between two colors when a button is clicked. Uses useState to manage the color state dynamically.",
        link: "https://nalbgcolor.netlify.app/"
    },
    {
        img:currency,
        title:"Currency Convertor App",
        desc: "A React-based currency converter that fetches live exchange rates from an external API and allows users to convert between currencies in real time using reusable components and React Hooks.",
        link: "https://nalcurrconvertor.netlify.app/"
    },
    {
        img:capstone,
        title:"Ecommerce",
        desc: "The To-Do List App is a task management tool that allows users to create, update, and delete tasks efficiently. Built using React and MongoDB, this app helps users stay organized by storing their tasks in a database, ensuring persistence across sessions.",
        link: "https://nalecomm.netlify.app"
    },
    {
        img:"https://www.getexceltemplates.com/wp-content/uploads/2016/03/to-do-list-512.jpg",
        title:"TO DO LIST",
        desc: "The To-Do List App is a task management tool that allows users to create, update, and delete tasks efficiently. Built using React and MongoDB, this app helps users stay organized by storing their tasks in a database, ensuring persistence across sessions.",
        link: "www.gooogle.com"
    }
]

  return (
    <div className="projectcontainer" id="project">

        <h1> My Projects</h1>
        <p> Some of my self projects where i really enjoyed doing, hope u do all...............</p>
        <div className="projectcontainer_projects" >
        {
            clientprojects.map((project,index) =>{
                return (
                    <Projectcont
                     key={index} 
                     img={project.img}
                     title={project.title}
                     desc ={project.desc}
                     link = {project.link}/>
                );
            })}
        

        </div>
      
    </div>
  )
}

export default Project

