import React from 'react'
import Header from '../../Container/Header/Header.jsx'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './About.css'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase, FaJava } from 'react-icons/fa'
import { LiaReact } from 'react-icons/lia'
import { BiLogoJavascript } from 'react-icons/bi'




const About = () => {

  const details = [{
    label: "Name",
    value: "Yash Jagtap"

  },

  {
    label: "Age",
    value: "23"

  },
  {
    label: "Address",
    value: "India"

  },
  {
    label: "Email",
    value: "Yashjagtap305@gmail.com"

  },
  {
    label: "Contact Me",
    value: "+91 7219095086"

  },




  ]

  const jobdetails = "Hello i am Yash As a highly motivated and results-oriented professional, I hold a BTech in Automobile Engineering from Pune, coupled with extensive proficiency in programming languages such as Java. My skill set extends to web development technologies, including HTML, css, JavaScript, reactjs,AngularJs , NextJs, Bootstrap, and MySql. With a solid foundation in both engineering and software development, I bring a unique perspective to problem-solving and a demonstrated ability to deliver innovative solutions. Eager to contribute my expertise to dynamic projects and collaborate in a team-oriented environment"



  return (
    <section id="about" className="about">
      <Header headertext="About Me" icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}></Header>

      <div className="about__content">
        <div className="about__content_personalwrapper" >
            <Animate play
              duration={0.5}
              delay={0.2}
              start={{ transform: 'translatex(-900px)' }} end={{ transform: 'translatex(0px)' }}>

            <h3>Full Stack Developer</h3>
            <p>{jobdetails}</p>
          </Animate>

          <Animate play
            duration={0.5}
            delay={0.2}
            start={{ transform: 'translatex(600px)' }} end={{ transform: 'translatex(0px)' }}>

            <h3 className="personalheader"> Personal Details</h3>
            <ul>{details.map((item, i) => (
              <li key={i}><span className="label">{item.label}</span>
                <span className="value">{item.value}</span></li>
            ))}</ul>
          </Animate>
        </div>
        <div className="about__content_serviceswrapper">
        <Animate play
            duration={0.5}
            delay={0.2}
            start={{ transform: 'translatex(500px)' }} end={{ transform: 'translatex(0px)' }}>
          <div className="about__content_serviceswrapper_inner">
            <div>
              <FaJava color="black" size={60}></FaJava>
            </div>
            <div>
              <BiLogoJavascript color="black" size={60}></BiLogoJavascript>
            </div>

            <div>
              <FaDatabase color="black" size={60}></FaDatabase>
            </div>
            <div>
              <LiaReact size={60} color="black"></LiaReact>
            </div>
          </div>

                </Animate>
        </div>

      </div>


    </section>
  )
}

export default About