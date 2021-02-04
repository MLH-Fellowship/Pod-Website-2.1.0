import React from 'react';
import styles from './Projects.module.css';
import { Carousel } from 'react-bootstrap';
// import picture from '../../assets/projectImg/C1.jpg';
import { projects } from './projects-data.json';
import minion from '../../assets/projectImg/minion.png'
import CarouselCard from './components/CarouselCard'

const Projects = () => {
  return (
    <div className={styles.container}>
      <Carousel className="container" id={styles.carouselOverride}>
        {projects.map((item, index) => {
          return (
            <Carousel.Item key={index} interval={2000}>
              <CarouselCard title={item.project} techstack={item['tech stack']} language={item['language']} platform={item['platform']} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <img src={minion} className={styles.minion} id="minion" alt="minion" />
    </div>
  );
};

export default Projects;
