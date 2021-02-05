import React from 'react';

import styles from './Hero.module.css';

import minionJump from '../../assets/images/minion-jump.gif';

const Hero = () => {
  return (
    <div className={styles.container} id="Home">
      <div>
        <h1 className={styles.title}>HELLO! THERE</h1>
        <h2 className={styles.subtitle}>FELLOW EXPLORER!</h2>
      </div>
      <div>
        <img
          src={minionJump}
          alt="Minions going Bananas!"
          className={styles.gif}
        />
      </div>
    </div>
  );
};

export default Hero;
