import React from 'react';
import { MDBCardBody } from 'mdbreact';
import FellowCard from '../../components/FellowCard/FellowCard';
import styles from './Fellows.module.css';
import fellows from './constants.js';

const Fellows = () => {
  return (
    <div className={styles.container} id="Team">
      <h2 className={styles.title}>MEET THE POD!</h2>

      <MDBCardBody>
        <div className={styles.rows}>
          {fellows.map((fellow, index) => {
            return <FellowCard key={index} fellow={fellow} />;
          })}
        </div>
      </MDBCardBody>
    </div>
  );
};

export default Fellows;
