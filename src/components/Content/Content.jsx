import React, { useState } from 'react'
import Header from '../../Container/Header/Header.jsx'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './Content.css'


const Content = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let obj = { name: " ", email: " ", description: " " }
  let [input, setinput] = useState(obj)



  function handleinput(e) {
    let {name , value} = e.target;
    setinput((prev)=>({...prev , [name] : value}))
  }
 
  function sub(e) {
    // e.prevenDefault();
     e.preventDefault();
    if(input.name.trim()==='' || input.email.trim()===''|| input.description.trim()===''){
      alert("All fields are mandatory")
      return;
    }
    if(!emailRegex.test(input.email)){
      alert("enter valid email")
      return;
    }
    console.log(input);
    alert("Succesfully send")
    setinput({ name: " ", email: " ", description: " " })
  }
  // console.log(input);
  return (
    <section id="Contact" className="Contact">
      <Header headertext="Contact Me" icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}></Header>
      <div className="contact_content">
        <Animate play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}>
          <h3 className="contact_content_header_text">Lets Talk</h3>
        </Animate>
        <Animate play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)"
          }}
          end={{
            transform: "translateX(0px)"
          }}>
          <div className="form">
            <div className="form_control">
              <div className="name">
                <input required onChange={handleinput} value={input.name} required className="inputname" name="name" type="text" />
                <label htmlFor="name" name="name" className="namelabel">name</label>
              </div>
              <div >
                <input required onChange={handleinput}  className="inputemail" value={input.email} name="email" type="email" />
                <label htmlFor="email" name="email" className="emaillabel">Email</label>
              </div>
              <div >
                <textarea required onChange={handleinput}  value={input.description}  name="description"
                  required className="inputdescription" type="text"
                  rows="5" />
                <label htmlFor="description" name="descriptionl" className="descriptionlabel">Description</label>
              </div>
            </div>

            <button onClick={sub} className="">Submit</button>
          </div>

        </Animate>
      </div>


    </section>
  )
}

export default Content