/* eslint-disable react/prop-types */
import React from 'react';
import './CarouselCard.css';

function TechTags({ language, platform }) {
  let plogo =
    'https://img.shields.io/badge/Made_For-' +
    platform +
    '-red?style=for-the-badge&logo=' +
    platform;
  let llogo =
    'https://img.shields.io/badge/Made_With-' +
    language +
    '-purple?style=for-the-badge&logo=' +
    language;
  return (
    <div className='tagstech'>
      <img src={llogo} alt='' />
      <img src={plogo} alt='' />
    </div>
  );
}

export default TechTags;
