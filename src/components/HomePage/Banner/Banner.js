import React from "react";
import { Link } from 'react-scroll';
import banner from "../../../images/logos/Frame.png";
import "./Banner.css";

const Banner = () => {
  return (
    <main>
      <section className='headerMain'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 heading pr-0 '>
              <h1>Let's Grow Your Brand To The Next Level</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                soluta laudantium numquam unde facilis excepturi
              </p>
              <Link className='hire' to="portfolio" spy={true} smooth={true} delay={100} offset={0} duration={500}>
                Hire Us
              </Link>
            </div>
            <div className='col-md-6 ml-auto mr-5 pr-0'>
              <img src={banner} alt='banner' className='img-fluid' />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
