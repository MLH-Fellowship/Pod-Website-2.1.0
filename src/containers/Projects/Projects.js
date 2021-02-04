import React from 'react';
import styles from './Projects.module.css';
import { Carousel } from 'react-bootstrap';
import picture from '../../assets/projectImg/C1.jpg';
import {projects} from './projects-data.json';



const Projects = () => {
 
  return (
    <div className={styles.container}>
      <Carousel className="container">
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={picture} alt="First slide" />
          <Carousel.Caption>
            <h3>{projects[0].project}</h3>
            <p>{projects[0]['tech stack']}</p>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={picture} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={picture} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;
