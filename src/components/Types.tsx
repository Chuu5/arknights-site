import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri"

function Types({image, description, title, onClick, leftClick}: {image: string, description: string, title: string, onClick: Function, leftClick: Function}) {
    return (
        <div className="classes">
            <button className="arrow"
            onClick={() => leftClick()}>
                <RiArrowLeftSLine size={60} />
            </button>

            <div className="text-img-class">
                <img src={image} />
                
                <div className="description">
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    <p>{description}</p>
                </div>
            </div>

            <button className="arrow"
            onClick={() => onClick()}>
                <RiArrowRightSLine size={60} />
            </button>
        </div>
    )
}

export default Types