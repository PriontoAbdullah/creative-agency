import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Partner from '../Partner/Partner';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Works from '../Works/Works';

const Home = () => {
	return (
		<div>
			<Header />
            <Banner />
			<Partner />
			<Service />
			<Works />
			<Review />
			<Footer />
		</div>
	);
};

export default Home;
