import React from "react";
import {  MDBRow, MDBCard, MDBCardBody } from "mdbreact";

const Fellows = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Meet the Pod!
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Divided by countries and culture, United by Technology ! :heart:
          </p>
          <MDBRow>
            {/* fellow cards called here */}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Fellows;
