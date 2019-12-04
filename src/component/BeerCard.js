import React from 'react'

const BeerCard = ({beer}) => {
    console.log(beer);
    
    return(
        <div className= 'BeerCard-wrapper'>
            <h1>
                {beer.name}
            </h1>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.description}</p>
        </div>
    )
}

export default BeerCard