import React from 'react';

import styles from './FellowCard.module.css';
import { MDBIcon } from "mdbreact";
import PropTypes from 'prop-types';

const FellowCard = ({fellow}) => {

  const { name, bio, headshot } = fellow;

  return (
    <div className={styles.card}>
      <div lg="3" md="6" className="mb-lg-0 mb-5">
        <img src={headshot} className={styles.avatars}>

        </img>
        <h5 className={styles.name}>{ name }</h5>
        {/* <p className={styles.position}>Team Member</p> */}
        <p className={styles.bio}>
          {bio}  
        </p>
        <ul className="list-unstyled mb-0">
          <a href="#!" className="p-2 fa-lg">
            <MDBIcon fab icon="facebook-f" className="blue-text" />
          </a>
          <a href="#!" className="p-2 fa-lg">
            <MDBIcon fab icon="twitter" className="blue-text" />
          </a>
          <a href="#!" className="p-2 fa-lg">
            <MDBIcon fab icon="instagram" className="blue-text" />
          </a>
        </ul>
      </div>
    </div>
  )
};

FellowCard.PropTypes = {
  name: PropTypes.string
}


export default FellowCard;
