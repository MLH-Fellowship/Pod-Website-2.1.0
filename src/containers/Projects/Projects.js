import React from 'react';
import styles from './Projects.module.css';
import { Carousel } from 'react-bootstrap';
import picture from '../../assets/projectImg/C1.jpg';
import { projects } from './projects-data.json';

const Projects = () => {
  return (
    <div className={styles.container}>
      <Carousel className="container">
        {projects.map((item, index) => {
          return (
            <Carousel.Item key={index} interval={2000}>
              <img className="d-block w-100" src={picture} alt="First slide" />
              <Carousel.Caption>
                <h3>{item.project}</h3>
                <p>{item['tech stack']}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Projects;
