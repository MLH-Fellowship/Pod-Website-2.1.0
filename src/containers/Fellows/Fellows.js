import React from "react";
import {  MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import FellowCard from "../../components/FellowCard/FellowCard";

const Fellows = () => {


  const fellows = [
    {
      "name": "Keshavaa",
    },
    {
      "name": "Nhi"
    }
  ]


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
            {fellows.map((fellow, index) => {
              console.log(fellow)
              return(
                <FellowCard key={index} name={fellow.name}/>
              )
            })}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Fellows;
