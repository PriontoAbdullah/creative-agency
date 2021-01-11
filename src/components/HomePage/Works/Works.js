import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import AllWorks from '../../../fakeData/fakeSlider';
import './Works.css';

// install Swiper components
SwiperCore.use([ Pagination, Scrollbar, A11y, Autoplay ]);

const Works = () => {
	const [ works, setWorks ] = useState([]);

	useEffect(() => {
		setWorks(AllWorks);
	}, []);

	console.log(works);

	return (
		<section className="works-section my-5 py-5 w-100" id="works">
			<Container >
				<div className="py-4">
					<h3
						className="text-center"
						style={{
							fontWeight: '500',
							fontSize: '36px',
							marginBottom: '3rem',
							color: 'white'
						}}
					>
						Here are some of <span style={{ color: '#7AB259' }}>our works</span>
					</h3>
					<br />
					<div className="mt-3">
						<Swiper
							key={works.length}
							tag="section"
							wrapperTag="ul"
							spaceBetween={1}
							centeredSlides={true}
							autoplay={{ delay: 2000 }}
							slidesPerView={'auto'}
							pagination={{ clickable: true }}
							onSlideChange={(swiper) => console.log('OnSlideChange', swiper)}
							onSwiper={(swiper) => console.log('OnSlideChange', swiper)}
						>
							{works.map((work) => (
								<SwiperSlide tag="li" key={work.id}>
									<img src={work.img} alt="" />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Works;
