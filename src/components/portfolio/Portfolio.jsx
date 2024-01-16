import React, { useState } from 'react'
import Header from '../../Container/Header/Header.jsx'
import { BsInfoCircleFill } from 'react-icons/bs'
import './Portfolio.css'
import imageone from "../../images/image1.jpg";
import imagetwo from "../../images/image2.jpg";
import imagethree from "../../images/image3.jpg";
import imagefour from "../../images/image4.jpg";
import imagefive from "../../images/image5.jpg";

import { useNavigate } from 'react-router-dom';
const Portfolio = () => {
  const protdata = [
    {
      id: 2,
      name: "Ecommerce",
      image: imageone,
      link : "./Ecom"

    },
    {
      id: 3,
      name: "Notes App",
      image: imagetwo,
      link : "./Notes"

    },
    {
      id: 2,
      name: "suppler design",
      image: imagethree,
      link : ""

    },
    {
      id: 2,
      name: "Todo App",
      image: imagefour,
      link : ""

    },
    {
      id: 2,
      name: "shpping cart design",
      image: imagefive,
      link : ""

    },


  ]
  let [filvalue, setfilvalue] = useState(1)
  let[hvalue , setvalue ] = useState(null)

  const filterdata = [
    {
      filterid: 1,
      label: 'All'
    },
    {
      filterid: 2,
      label: 'Development'
    },
    {
      filterid: 3,
      label: 'Design'
    }
  ]
  function handlefilter(id) {
    setfilvalue(id)
  }
  let newfilter = filvalue === 1 ? protdata :
    protdata.filter(item => item.id === filvalue)

  function handlehover(id) {
    setvalue(id)
    
  }
  function opennew(link) {
    newloc(link) 
   
  }

  console.log(hvalue);
 const newloc =  useNavigate();

  // console.log(newfilter);
  return (
    <section id="portfolio" className="portfolio">
      <Header headertext="Portfolio" icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}></Header>

      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {
            filterdata.map((data , ) => (
              <li className={data.filterid === filvalue ? "active" : " "} onClick={() => handlefilter(data.filterid)} key={data.filterid}>
                {data.label}
              </li>
            ))
          }

        </ul>
        <div className="cards">
          {
            newfilter.map((items,index) => (
              <div className="cards_item"
              onMouseEnter={()=>handlehover(index)}
              onMouseLeave={()=>handlehover(null)}> {}
                <div className="cards_item_img" >
                  <a>
                    <img src={items.image}></img>
                  </a>
                </div>
                <div className="overlay"> 
                  {
                    index===hvalue && (
                      <div>
                         <p>{items.name}</p>
                         <button onClick={()=>opennew(items.link)}>Visit</button>

                      </div>


                    )
                  }
                
                </div>
              </div>

            ))
          }
        </div>

      </div>


    </section>
  )
}

export default Portfolio