import { RiArrowRightSLine } from "react-icons/ri"

function Types({image, description, title, onClick}: {image: string, description: string, title: string, onClick: Function}) {
    return (
        <div className="classes">
            <img src={image} />
            
            <div className="description">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <p>{description}</p>
            </div>

            <button className="arrow"
            onClick={() => onClick()}>
                <RiArrowRightSLine size={100} />
            </button>
        </div>
    )
}

export default Types