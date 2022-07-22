import { Outlet, Link } from "react-router-dom";
import "./Nav.css"


function Nav() {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Arknights_English_Release_Logo.svg/1200px-Arknights_English_Release_Logo.svg.png" alt="" />
                </div>

                <div className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tutorial">Tutorial</Link></li>
                        <li><Link to="/summon">Summon</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav