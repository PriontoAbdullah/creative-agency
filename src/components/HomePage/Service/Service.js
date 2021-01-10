import { Frame } from "framer";
import React, { useEffect, useState } from "react";
import AllServiceList from '../../../fakeData/fakeServiceList';
import SingleService from "../SingleService/SingleService";

const Service = () => {

  const [services, SetServices] = useState([]);

  useEffect(() => {
        SetServices(AllServiceList);
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
              key={service.id}
              scale={0.85}
              className={"d-flex justify-content-center align-items-center"}
              position={"relative"}
              transition={{ duration: 1 }}>
              <SingleService
                key={service.id}
                service={service}
              />
            </Frame>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
