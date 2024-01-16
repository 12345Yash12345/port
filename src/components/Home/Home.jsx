import React from 'react'
import './Home.css'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {Animate} from 'react-simple-animate'

const Home = () => {

  let newloc = useLocation()
  let navigate = useNavigate()

  function navigatecontent() {
    navigate('/Content')
    
  }

  let checkloc = newloc.pathname === "/"
  return (


    <section id="home" className="home" >
        
      <div className="home__text-wrapper">
        <h1>
      
          Hello I'm Yash
        <br />
        Full Stack Developer
      </h1>
    
      </div>
      <div className="circular-container">
      <img src="/1697735961103.jpg"></img>
      </div>
      
      
     
      <div className="home_contact" >
      <button   onClick={navigatecontent} className="b1">Hire Me</button>
      
      </div>
      
     
      
      


    </section>
  )
}

export default Home