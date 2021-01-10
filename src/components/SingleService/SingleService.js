import React from "react";
import "./SingleService.css";
const SingleService = ({ service}) => {
  return (
    <div
      className='col-md-12 service d-flex flex-column justify-content-center align-items-center'
     >
      <img
        src={service.img || `data:image/png;base64,${service.image.img}`}
        alt='service-img'
      />
      <h5>{service.name} </h5>
      <p className='text-center'>{service.details} </p>
    </div>
  );
};

export default SingleService;
