import "./Summon.css"
import Data from "../../data.json"
import { useState } from "react"

function Summon() {


    type Characters = {
        name: string,
        icon: string,
        stars: number
    }

    let threeStars = Data.banner["3 Stars"]
    let fourStars = Data.banner["4 Stars"]
    let fiveStars = Data.banner["5 Stars"]
    let sixStars = Data.banner["6 Stars"]

    

    const [counter, setCounter] = useState(0)

    const [summonedChars, setSummonedChars] = useState<Characters[]>([])

    const [sixStarRate, setSixStarRate] = useState(2)

    const [clicked, setClicked] = useState(false)
    
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
        let rate = sixStarRate
        let gotAFiveStar = false

        for(let i = 0; i < 10; i++) {
            let randomNumber = Math.random()

            if (count === 9 && !gotAFiveStar) {
                randomNumber = 0.02
                // Fazendo com que caso não tenha pego um cinco estrelas nos primeiros 9 rolls no decimo irá vir um cinco estrelas
            } else if (count === 100) {
                randomNumber = 0.001
            }
            
            if (randomNumber >= threeStarsChance) {
                threeStars = shuffleArray(threeStars)
                summoned = [...summoned, threeStars[0]]
                count += 1
                if(count > 50) {
                    rate += 2
                }
                // Aumenta a chance de pegar um 6 star
            } else if (randomNumber >= fourStarsChance) {
                fourStars = shuffleArray(fourStars)
                summoned = [...summoned, fourStars[0]]
                count += 1
                if(count > 50) {
                    rate += 2
                }
            }
             else if (randomNumber >= fiveStarsChance) {
                fiveStars = shuffleArray(fiveStars)
                summoned = [...summoned, fiveStars[0]]
                count += 1
                if(count > 50) {
                    rate += 2
                }
                gotAFiveStar = true
            } else {
                sixStars = shuffleArray(sixStars)
                summoned = [...summoned, sixStars[0]]
                count = 0
                rate = 2
            }
        }

        setCounter(count)
        setSummonedChars(summoned)
        setSixStarRate(rate)
        // Seta o rate up dos 6 estrelas, os personagens sumonados e o contador
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
                    <p className="opacity">Ps: The counter is reseted if you get a 6 star and it remains the same counter even when the banner is changed</p>
                </div>

                <div className="img-cont">
                        <img src="https://pbs.twimg.com/media/FYp0fc3aUAAfRNv?format=jpg&name=large" alt="" />
                </div>

                <div className="title">
                    <h3>Featured Operators</h3>
                </div>

                <div className="description">
                    <h4>6 Stars</h4>
                    <div className="featured-op">
                        <img src={Data.banner["6 Stars"][0].icon} alt="" />
                        <span>Ling [Limited]</span>
                    </div>
                    <div className="featured-op">
                        <img src={Data.banner["6 Stars"][2].icon} alt="" />
                        <span>Lee</span>
                    </div>
                    <div className="featured-op">
                        <img src={Data.banner["6 Stars"][1].icon} alt="" />
                        <span>Nian [Limited]</span>
                    </div>
                    <div className="featured-op">
                        <img src={Data.banner["6 Stars"][3].icon} alt="" />
                        <span>Dusk [Limited]</span>
                    </div>

                    <h4>5 Stars</h4>
                    <div className="featured-op">
                        <img src={Data.banner["5 Stars"][0].icon} alt="" />
                        <span>BlackKnight</span>
                    </div>
                </div>

                <div className={clicked ? "banner-list clicked" : "banner-list"}>
                    <button
                    onClick={() => setClicked(!clicked)}>
                        All Operators
                    </button>
                    {/* Rendering all operators after clicking the button */}
                    {(Object.keys(Data.banner) as (keyof typeof Data.banner)[]).map( (key, index) => {
                        
                        return (
                            <div className="all-ops" key={index}>
                                <h4>{key}</h4>

                                {Data.banner[key].map((op, index2) => {
                                    return(
                                        <p key={index2}>{op.name}</p>
                                    )
                                })}
                            </div>
                        ) 
                    })}
                </div>

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
                                </tr>
                                <tr>
                                    <th>Current 6 stars rate</th>
                                    <td>{sixStarRate}%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="summons">
                        {summonedChars.map( (char: Characters, index) => {
                            return (
                                
                                <div className={char.stars === 6 ? "summon six" : char.stars === 5 ? "summon five": "summon"} key={index}>
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