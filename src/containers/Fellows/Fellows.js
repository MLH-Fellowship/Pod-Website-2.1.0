import React from 'react';
import FellowCard from '../../components/FellowCard/FellowCard';

import styles from './Fellows.module.css';

const Fellows = () => {

  const example = {
    "name": "Keshavaa Shaiskandan",
    "bio": "I'm super into web dev but would also really like to start getting into devops and ML. I love to play and watch basketball with my friends and try new foods!",
    "image": "www.google.com"
  }


  return(
    <div className={styles.container}>
      <h1 className={styles.title}>MEET THE FELLOWS</h1>
      <div className={styles.fellowContainer}>
        {example.map((fellow, index) => {
          return(
            <FellowCard key={index} props={fellow}/>
          )
        })}
      </div>
    </div>  
  )
};

export default Fellows;
