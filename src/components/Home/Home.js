import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Partner from '../Partner/Partner';
import Service from '../Service/Service';

const Home = () => {
	return (
		<div>
			<Header />
            <Banner />
			<Partner />
			<Service />
		</div>
	);
};

export default Home;
