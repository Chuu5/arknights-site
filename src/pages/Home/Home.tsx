import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div className="home-text">
                <h2>Arknights Site</h2>
                <h4>One Website That try to teach the basic of the mobile game Arknight</h4>
                <button className="home-btn">
                    <Link to="/tutorial">Start the Tutorial</Link>
                </button>
            </div>

        </div>
    )
}

export default Home