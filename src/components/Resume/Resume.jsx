import React from 'react'
import Header from '../../Container/Header/Header.jsx'
import {BsInfoCircleFill} from 'react-icons/bs'
import './Resume.css'
import {VerticalTimeline} from 'react-vertical-timeline-component'


const Resume = () => {
  const data={
    experience: [

      {
        title: ""

      }

    ]
      

  
  }


  return (
    <section id="Resume" className="Resume">
    <Header headertext="Resume" icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}></Header>
    
    <div className="timeline">
        <div className="timeline_ experience">
          <h3 className="experience_text">
          experience

          </h3>
          <VerticalTimeline layout={'l-column'}
                                  lineColor='black'>
                                    {}
            
          </VerticalTimeline>
        </div>
        <div className="timeline_education">
          <h3 className=" education_text">
            education
          </h3>
        </div>

     </div>

  </section>
  )
}

export default Resume