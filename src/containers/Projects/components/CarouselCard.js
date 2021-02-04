/* eslint-disable react/prop-types */
import React from 'react'
import './CarouselCard.css'
import picture from '../../../assets/images/icons8-github-100.svg';
import TechTags from './TechTags';

function CarouselCard({ title, language, platform }) {
    return (
        <div className="carouselCard">
            <h1 >{title}</h1>
            <TechTags language={language} platform={platform} />
            <a href="www.google.com"><img src={picture} /></a>
        </div>
    )
}

export default CarouselCard
