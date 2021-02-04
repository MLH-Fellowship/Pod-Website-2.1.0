import React from 'react';

import styles from './FellowCard.module.css';
import { MDBCol, MDBIcon } from "mdbreact";
import PropTypes from 'prop-types';

const FellowCard = (props) => {
  return (
    <div className={styles.card}>
      <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className={styles.avatars}>

        </img>
        <h5 className={styles.name}>{ props.name }</h5>
        <p className={styles.position}>Team Member</p>
        <p className={styles.bio}>
          I love XYZ and I have worked on ABC Projects.
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
      </MDBCol>
    </div>
  )
};

FellowCard.PropTypes = {
  name: PropTypes.string
}


export default FellowCard;
