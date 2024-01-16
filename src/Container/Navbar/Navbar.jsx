import React from 'react'
// import second from './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaReact } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {

    const [toggle, settoggle] = useState(false);

    let data = [

        {
            to: "/",
            label: "Home"

        },
        {
            to: "/About",
            label: "About"

        },
        {
            to: "/Portfolio",
            label: "Portfolio"

        },
        {
            to: "/Resume",
            label: "Resume"

        },
        {
            to: "/Skills",
            label: "Skills"

        },
        {
            to: "/Content",
            label: "Content"

        }


    ]

    function handleopen() {
        settoggle(!toggle)

    }

    return (
        <div>
        
            <nav className="navbar">
                <div className="navbar__container">
                    <Link className="navbar__container__logo" to={"/"} > <  FaReact size={30}></FaReact></Link>

                </div>
                <ul className={`navbar__container__menu ${toggle ? "active " : " "}`} >
                    {data.map((e, key) => (<li className="navbar__container__menu__item" key={key}> <Link
                                className="navbar__container__menu__item__links" to={e.to}>
                                {e.label}
                            </Link>
                            </li>
                        ))}
                </ul>
                <div className="navbar-icon" onClick={handleopen}>
                    {toggle  ? <HiX size={30}>

                    </HiX> : <FaBars size={30}></FaBars>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar