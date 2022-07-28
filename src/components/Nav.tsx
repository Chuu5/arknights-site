import { Outlet, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import {AiFillHome, AiFillBook} from "react-icons/ai"


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
                        <li> <AiFillHome size={25}/> <span>
                            <Link to="/">Home</Link>
                        </span>
                        </li>
                        <li>
                            <AiFillBook size={25} className="tutorial-icon" />
                            <span>
                                <Link to="/tutorial">Tutorial</Link>
                            </span>
                        </li>
                        <li>
                            <img className="summon-icon" src="https://gamepress.gg/arknights/sites/arknights/files/2019-11/redgemSmall_0.png" alt="" />
                            <span>
                                <Link to="/summon">Summon</Link>
                            </span>
                        </li>
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