import { Frame } from "framer";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import SingleService from "../SingleService/SingleService";

const Service = () => {

  const { selectedService, SetSelectedService } = useContext(UserContext);
  let history = useHistory();

  const handleRoute = service => {
    SetSelectedService(service);
    history.push("/dashboard/order");
  };

  const [services, SetServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Services")
      .then(res => res.json())
      .then(getServices => {
        SetServices(getServices.slice(0, 6));
      });
  }, []);

  return (
    <section className='serviceSection' style={{ margin: "5rem" }}>
      <div className='container'>
        <h3
          className='text-center'
          style={{ fontWeight: "700", fontSize: "36px", marginBottom: "3rem" }}>
          Provide Awesome <span style={{ color: "#7AB259" }}>Services</span>{" "}
        </h3>
        <div className='row justify-content-around'>
          {services.map(service => (
            <Frame
              whileHover={{ scale: 1.1 }}
              size={300}
              radius={30}
              background={"#fff"}
              key={service._id}
              scale={0.85}
              className={"d-flex justify-content-center align-items-center"}
              position={"relative"}
              transition={{ duration: 1 }}>
              <SingleService
               key={service._id}
               service={service}
               handleRoute={handleRoute}
              />
            </Frame>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
