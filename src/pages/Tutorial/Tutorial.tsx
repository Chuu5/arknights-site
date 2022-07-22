import "./Tutorial.css"
import Data from "../../data.json"
import Types from "../../components/Types"
import { useState } from "react"

function Tutorial() {

    const [classIndex, setClassIndex] = useState(0)
    
    function changeIndex(index: number) {
        if(index + 1 !== Data.classes.length) {
            setClassIndex(index + 1)
        } else {
            setClassIndex(0)
        }
    }

    return (
        <div className="tutor-body">
            <div className="tutor-container">
                <div className="tutor-text">
                    <div className="title">
                        <h2>Basics Concepts</h2>
                    </div>
                    <div className="description">
                        <p>Arknights is a game with many mechanics and things that you can do. In this section we will try to make you understand at least the most importants concepts</p>
                    </div>
                </div>

                <section>
                <div className="tutor-text">
                    <div className="title">
                        <h2>How the Game Works</h2>
                    </div>
                    <div className="description">
                        <p>
                            Arknights is a Tower defense game that you defend your base from enemies with operators that can have many different skills and classes. Each operator have they unique skills so you can make various strategies and playing with the operators that you like.
                        </p>
                    </div>
                </div>

                <div className="tutor-text">
                    <div className="title">
                        <h2>Some Quick Terms</h2>
                    </div>

                    <div className="description">
                        <p><span className="highl">Operators:</span> Units that you deploy in the battle to defende the objective</p>

                        <p><span className="highl">Sanity:</span> It's the energy that you use to playing phases in the Game</p>

                        <p><span className="highl">Classes:</span> Are the type of each operator have, that specific their roles in the team and how they works</p>

                        <p><span className="highl">Deployment Points:</span> (usually called DP) It's the main resource to deploy your operators in the phase. Each operator have a cost to you put him in the phase; every time any operator die in the phase you have to wait some time to put they back and they will cost more DP </p>

                        <p><span className="highl">Elite: </span>Elite is one upgrade that all operators can have if they are more than 2 stars. Elite have diffent items cost for each operator and you can do when reach max lvl. Elite make possible you release new skills and have better stats </p>

                        <p><span className="highl">Orundum:</span> It's a red stone that you use to make rolls in the gacha</p>


                        <p><span className="highl">Originite Prime:</span> That stone you can use to buy differents outfits to your operators or you can exchange each Originite Prime for 180 Orundum</p>
                        
                    </div>  
                </div>

                <div className="tutor-text">

                    <div className="title">
                        <h2>Operators Classes</h2>
                    </div>
                    <div className="description">
                        {
                            Data.classes.map( (classe, index) => {
                                if(index === classIndex) {
                                    return(
                                        <Types key={index} title={classe.type} image={classe.image} description={classe.description} 
                                        onClick={() => changeIndex(index)}/>
                                    )   
                                }
                            })
                        }

                    </div>


                </div>
                </section>
            </div>
        </div>
    ) 
}

export default Tutorial