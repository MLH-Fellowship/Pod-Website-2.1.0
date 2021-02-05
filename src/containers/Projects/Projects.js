import React from 'react';
import styles from './Projects.module.css';
import { Carousel } from 'react-bootstrap';
// import picture from '../../assets/projectImg/C1.jpg';
import { projects } from './projects-data.json';
import minion from '../../assets/projectImg/minion.png';
import CarouselCard from './components/CarouselCard';
import Heading from './components/Heading';

const Projects = () => {
  return (
    <div className={styles.container} id='Projects'>
      <Heading />
      <Carousel className={styles.carouselContainer}>
        {projects.map((item, index) => {
          return (
            <Carousel.Item key={index} interval={2000}>
              <CarouselCard
                title={item.project}
                language={item['language']}
                platform={item['platform']}
                link={item['links']}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <img src={minion} className={styles.minion} id='minion' alt='minion' />
    </div>
  );
};

export default Projects;
