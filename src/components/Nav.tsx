import { Outlet, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import "./Nav.css"
import { useState } from "react";


function Nav() {

    const [click, setClick] = useState(false)

    return (
        <>
            <nav>
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Arknights_English_Release_Logo.svg/1200px-Arknights_English_Release_Logo.svg.png" alt="" />
                </div>

                <div className={click ? "menu active" : "menu"}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tutorial">Tutorial</Link></li>
                        <li><Link to="/summon">Summon</Link></li>
                    </ul>
                </div>

                    <button className="open-menu"
                    onClick={() => setClick(!click)}>
                        <GiHamburgerMenu size={30} />
                    </button>

                    <button className={click ? "close-menu active" : "close-menu"}
                    onClick={() => setClick(!click)}>
                        <IoClose size={40} />
                    </button>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav