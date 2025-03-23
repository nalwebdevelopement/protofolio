# React + Vite
Git reset - to reset the commands 

Created a seperate css for each component

Es7 snippedt extension used

used web naming convention header__left is the eg for the classname

Used react scroll to move my page
https://www.npmjs.com/package/react-scroll?activeTab=dependencies

Code to add the react scroll 

import {Link} from "react-scroll"  The link tag is like the anchor tag behind the secean all will work as html
 <div className="header__right">
           <link to="about" smooth={true} duration = {500}>
                <h4>About me </h4>
           </link> 
           <link to="skills" smooth={true} duration = {500}>
                <h4>My Skills </h4>
           </link> 
           <link to="Project" smooth={true} duration = {500}>
                <h4>About me </h4>
           </link> 
           <link to="Experience" smooth={true} duration = {500}>
                <h4>About me </h4>
           </link> 
        </div>


Added the CSS for styling in header

#Adding Transiton effect for the header with background color with read - css code
.header__right > a > h4
{
    font-size: 18px;
    cursor:pointer;
    transition : transform 200ms ease-in-out;
    padding: 5px 20px;
    letter-spacing: 1px;
}
.header__right > a > h4:hover {
    transform: scale(1.09);
    background-color: red;
    padding: 5px 20px;
    color:white;
    border-radius: 50px;
    letter-spacing: 1px;
    font-family: 'Times New Roman', Times, serif;
    font-size:18px;
    cursor: pointer

}
#Setting the backgound for the topcontent or for the main page - css code

topContainer{
    background: url("../assets/5056413.jpg");
    height:100vh;
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
     box-shadow: inset 0 0 0 2000px rgb(0,0,0,0.5);

}
#Adding shadow effect to your background image is - css code
 box-shadow: inset 0 0 0 2000px rgb(0,0,0,0.5);

#The menubar will be fixed in one place which will not scroll when we scroll the content page - css code
    top:0;   - makes the top to be zero
    position:sticky; - it will be sticked intop
    z-index:2000; - Z index which will makes the priority to be top of all other elements
#use Postion:relative to the top container and the inner container:absolute will start positoin from the the top container not from the top of the screen 

#("!important is used in css to override the property )

#Absolute and Realtive position in CSS

In React, if your component isn't appearing below another component as expected, it's likely due to incorrect CSS positioning, where the component you want on top might not have the necessary "position: relative" and the component you want below might not have "position: absolute" set correctly, or you might be missing the "z-index" property to define the stacking order. 
CSS positioning:
Parent container: Set the parent container (the component you want on top) to position: relative.
Child component: Set the child component (the component you want below) to position: absolute.
Z-index: Use the z-index property to control which element is on top when multiple elements have absolute positioning. Higher z-index value means the element will appear on top. 
function ParentComponent() {

  return (

    <div className="parent-container">

      <ChildComponentOne className="child-one" />

      <ChildComponentTwo className="child-two" />

    </div>

  );

}



// CSS

.parent-container {

  position: relative;

}



.child-one {

  position: absolute;

  z-index: 10;

}



.child-two {

  position: absolute;

  z-index: 1;

}

Adding Material UI for the skill component one of the React libary

What is react-scroll how to implement it
import {Element} from 'react-scroll' what is this
ChatGPT said:
The statement

js
Copy
Edit
import { Element } from 'react-scroll';
is importing the Element component from the react-scroll library, which is used for smooth scrolling between different sections of a React application.

What is Element in react-scroll?
Element is a wrapper component that marks a specific section in your React component.
It allows you to scroll to that section smoothly when triggered.
Works in combination with Link or scrollTo methods from react-scroll.
Example Usage
jsx
Copy
Edit
import React from 'react';
import { Element, Link } from 'react-scroll';

const MyComponent = () => {
  return (
    <div>
      {/* Navigation Link to Scroll to Section */}
      <Link to="aboutSection" smooth={true} duration={500}>
        Go to About Section
      </Link>

      {/* Target Section */}
      <Element name="aboutSection">
        <h2>About Us</h2>
        <p>This is the About section.</p>
      </Element>
    </div>
  );
};

export default MyComponent;
How it Works:
<Link>: When clicked, it triggers smooth scrolling to the section with name="aboutSection".
<Element name="aboutSection">: This marks the target section where the page will scroll to.
Would you like to integrate this into your project?

