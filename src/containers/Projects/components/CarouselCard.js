/* eslint-disable react/prop-types */
import React from 'react'
import './CarouselCard.css'

function CarouselCard(props) {
    return (
        <div className="carouselCard">
            <h1 >{props.title}</h1>
                <p>{props.techstack}</p>
        </div>
    )
}

export default CarouselCard
