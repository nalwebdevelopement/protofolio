import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import TopContainer from './component/TopContainer'
import Skill from './component/Skill'
import Project from './component/Project'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <TopContainer/>
      {/* <Skill/>
      <Project/> */}
        
    </>
  )
}

export default App
