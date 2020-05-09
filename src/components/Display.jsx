import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Display = ({ fName, lName, email, password, confirm }) => {
  return (
    <div>
        <div class="m-5 container">
            <p class="lead">{fName}</p>
            <p class="lead">{lName} </p>
            <p> {email} </p>
            <p> {password} </p>
            <p> {confirm} </p>
        </div>
    </div>
  );
}


export default Display;