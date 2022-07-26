type clickedProps = {
    image: string, 
    name: string, 
    overview: string,
    displayOff: Function
}

import "./Clicked.css"

import Close from "../assets/x-button-icon-21.jpg"


function CharacterClicked({image, name, overview, displayOff}: clickedProps) {
    return(
        <div className="opened">
            <div className="opened-container">
                <div className="opened-left">
                    <div className="img-cont">
                        <img src={image} />
                    </div>
                    
                    <div className="title">
                        <h2>{name}</h2>
                    </div>
                </div>
                <div className="opened-right">

                    <div className="overview">
                        <div className="title">
                            <h3>Operator Overview</h3>
                        </div>
                        <div className="description">
                            {overview}
                        </div>
                    </div>
                </div>
            </div>

            <button className="close-btn"
            onClick={() => displayOff()}>
                <img src={Close}/>
            </button>
        </div>
    )
}

export default CharacterClicked