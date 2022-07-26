type characProps = {
    classe: string, 
    images: any,
    click: Function,
    setProps: Function
}



function Character({classe, images, click, setProps}: characProps) {
    interface image {
        name: string,
        image: string,
        description: string
    }

    return(
        <div>
            <div className="title">
                <h2>{classe}</h2>
            </div>
            <div className="character">
                {images.map( (imagem: image, index: number) => {
                   

                    return(
                        
                        <button key={index} className="charac-btn"
                        onClick={() => {
                            click()
                            setProps({
                                name: imagem.name,
                                image: imagem.image,
                                description: imagem.description
                            })
                        }}
                        >
                            <img src={imagem.image} />
                        </button>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Character