import React, { useEffect, useState } from 'react';
import AllPartner from '../../../fakeData/fakePartner';
import SinglePartner from '../SinglePartner/SinglePartner';

const Partner = () => {
  const [partners, SetPartner] = useState([]);

  useEffect(() => {
        SetPartner(AllPartner);
  }, []);

  return (
    <section className='partner' id="portfolio">
      <div className='container d-flex justify-content-around align-items-center my-5'>
        {partners.map(partner => (
          <SinglePartner key={partner.id} partner={partner} />
        ))}
      </div>
    </section>
  );
};

export default Partner;
