import React from 'react'
import './Header.css'

const Header = (props) => {
  let{headertext, icon} = props;
  return (
    <div className="wrapper">
      {/* <h2>{headertext}</h2>  */}
       <span>{icon}</span>

    </div>
    
  )
}

export default Header