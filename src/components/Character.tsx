
function Character({classe, images}: {classe: string, images: any}) {
    interface image {
        name: string,
        image: string
    }

    return(
        <div>
            <div className="title">
                <h2>{classe}</h2>
            </div>
            <div className="character">
                {images.map( (imagem: image, index: number) => {
                   

                    return(
                        
                        <button key={index} className="charac-btn">
                            <img src={imagem.image} />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Character