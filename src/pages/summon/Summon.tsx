import "./Summon.css"
import Data from "../../data.json"
import { useState } from "react"

function Summon() {


    type character = {
        name: string,
    }

    let threeStars = Data.banner["3 Stars"]
    let fourStars = Data.banner["4 Stars"]
    let fiveStars = Data.banner["5 Stars"]
    let sixStars = Data.banner["6 Stars"]

    

    const [counter, setCounter] = useState(0)

    const [summonedChars, setSummonedChars] = useState<Object[]>([])
    
    // 50 %
    const threeStarsChance = 0.5 

    // 40 %
    const fourStarsChance = 0.1

    // 8 %
    const fiveStarsChance = 0.02

    // 2 %
    const sixStarsChance = 0


    function makeAPull() {
        let summoned: any = []
        let count = counter

        for(let i = 0; i < 10; i++) {
            let randomNumber = Math.random()
            
            if (randomNumber >= threeStarsChance) {
                threeStars = shuffleArray(threeStars)
                summoned = [...summoned, threeStars[0]]
                count += 1
            } else if (randomNumber >= fourStarsChance) {
                fourStars = shuffleArray(fourStars)
                summoned = [...summoned, fourStars[0]]
                count += 1
            }
             else if (randomNumber >= fiveStarsChance) {
                fiveStars = shuffleArray(fiveStars)
                summoned = [...summoned, fiveStars[0]]
                count += 1
            } else {
                sixStars = shuffleArray(sixStars)
                summoned = [...summoned, sixStars[0]]
                count = 0
            }
        }
        setCounter(count)
        setSummonedChars(summoned)

    }


        function shuffleArray(array: any) {
            let newArray = array.concat()
    
            
            for (let i = newArray.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            // O que acontece aqui é até que simplês, temos a constante J que randomiza um número de 0 a i, e damos o valor do array[i] o valor do array[j] e vice-versa 
            return newArray
        }

    
    
    return(
        <div className="tutor-body">
            <div className="tutor-container">
                <div className="title">
                    <h2>Summon Simulator</h2>
                </div>

                <div className="description">
                    <p>
                    The summon (or gacha) is one of the main mechanics of a gacha like arknights, in this section we will simulate how the pulls are done on it. In arknights we have a counter that starts with 0 and for each roll you make it will increase by 1, if your counter reaches 50 without getting any operator 6 star, every roll after 50 will increase 2% chance of getting one 6 star in the next rolls. Making the 100 roll sure to get a 6 star.
                    </p>
                    <p className="opacity">Ps: The counter is reset if you get a 6 star and it remains the same counter even when the banner is changed</p>
                </div>

                <div className="img-cont">
                        <img src="https://pbs.twimg.com/media/FYp0fc3aUAAfRNv?format=jpg&name=large" alt="" />
                </div>

                <div className="title">
                    <h3>Featured Operators</h3>
                </div>

                <div className="description">
                    <h4>6 Stars</h4>
                    <p>Ling [Limited]</p>
                    <p>Lee</p>
                    <p>Nian [Limited]</p>
                    <p>Dusk [Limited]</p>

                    <h4>5 Stars</h4>
                    <p>BlackKnight</p>
                </div>

                <button className="banner-list">
                    All Operators
                </button>

                <button className="pull"
                onClick={() => makeAPull()}>
                    Summon
                </button>
                <p className="opacity">* First 10 pulls is guarranted at least one 5 star</p>

                <div className="pulls">
                    <div className="counter-information">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Pulls w/o 6*</th>
                                    <td>{counter}</td>
                                    <th>Current 6 stars rate</th>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="summons">
                        {summonedChars.map( (char: any, index) => {
                            return (
                                
                                <div className="summon" key={index}>
                                    <div className="img-cont icon"><img src={char.icon} alt="" /></div>
                                    <p>{char.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summon