import React from 'react';

import styles from './FellowCard.module.css';

const FellowCard = ({ name, bio, image }) => {
  return(
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/*  image goes here */}
      </div>
      <div className={styles.bioContainer}>
        {/* bio goes here */}
      </div>
    </div>
  )
};

export default FellowCard;
