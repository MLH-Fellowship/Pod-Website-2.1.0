/* eslint-disable react/prop-types */
import React from 'react'
import './CarouselCard.css'
import picture from '../../../assets/images/icons8-github-100.svg';
import TechTags from './TechTags';

function CarouselCard(props) {
    return (
        <div className="carouselCard">
            <h1 >{props.title}</h1>
            <p>{props.techstack}</p>
            <TechTags />
            <a href="www.google.com"><img src={picture} /></a>
        </div>
    )
}

export default CarouselCard
