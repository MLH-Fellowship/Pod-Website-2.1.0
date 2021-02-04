import React from 'react';

// import styles from './FellowCard.module.css';
import { MDBCol, MDBIcon } from "mdbreact";
import PropTypes from 'prop-types';

const FellowCard = (props) => {
  return (
    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
      <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg">

      </img>
      <h5 className="font-weight-bold mt-4 mb-3">{ props.name }</h5>
      <p className="text-uppercase blue-text">Team Leader</p>
      <p className="grey-text">
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
  )
};

FellowCard.PropTypes = {
  name: PropTypes.string
}


export default FellowCard;
