import React from 'react'
import Header from '../../Container/Header/Header.jsx'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import {Line} from 'rc-progress'
import './Skills.css'

const Skills = () => {
  const skill = [
    {
      label: "FRONT END",
      data: [
        {
          skillname: "HTML",
          percentage: "80"

        },
        {
          skillname: "CSS",
          percentage: "70"

        },
        {
          skillname: "JAVASCRIPT",
          percentage: "80"

        },
        {
          skillname: "REACTJS",
          percentage: "80"

        },
        {
          skillname: "ANGULARJS",
          percentage: "70"

        },
        {
          skillname: "NEXTJS",
          percentage: "65"

        }
      ],
    },
    {
      label: "BACK END",
      data: [
        
        {
          skillname: "C#",
          percentage: "70"

        },
        {
          skillname: "JAVA",
          percentage: "70"

        },
      ],
    },
    {
      label: "DATABASE",
      data: [
        {
          skillname: "MYSQL",
          percentage: "70"

        },
      ],
    },


  ]
  return (
    <section id="skills" className="skills">
      <Header headertext="My Skills" icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}></Header>
      <div className="skills_content_wrapper">
          { 
          skill.map((item , i)=>(
            <div className="skills_content_wrapper_inner">
            <Animate
            play
            duration={1}
            delay={0.3}
            start={{transform:'translateX(-200px)'}}
              end={{transform:'translateX(0px)'}}>
            
            <h3 className="skills_content_wrapper_inner_text">{item.label}</h3>
            <div className="firstDiv">
              {
                item.data.map((items , i)=>(
                  <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity:1" , "opacity : 0"]}
                  iterationCount="1">
                    <div className="progressbar" key={i}>
                      <p>{items.skillname}</p>
                      <Line percent={items.percentage}
                      strokeWidth="4"
                      strokeColor="orange"
                      trailWidth="2"
                      strokeLinecap="square"></Line>

                    </div>

                  </AnimateKeyframes>

                ))
              }
            </div>


            </Animate>
            </div>
        ))

        }


      </div>



    </section>
  )





}


export default Skills