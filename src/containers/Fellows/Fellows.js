import React from "react";
import {  MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import FellowCard from "../../components/FellowCard/FellowCard";
import styles from './Fellows.module.css'
import fellows from './constants.js'

const Fellows = () => {


  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className={styles.title}>
            Meet the Pod!
          </h2>
          <MDBRow className={styles.rows}>
            {fellows.map((fellow, index) => {
              return(
                <FellowCard key={index} fellow={fellow}/>
              )
            })}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Fellows;
