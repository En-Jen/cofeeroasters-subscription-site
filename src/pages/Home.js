import React from 'react';
import { motion } from 'framer-motion';

import { pageAnimation } from '../animations';
import Hero from '../components/Hero';
import Spacer from '../components/Spacer';
import Button from '../components/Button';
import Collection from '../components/Collection';
import WhyChoose from '../components/WhyChoose';
import HowItWorks from '../components/HowItWorks';

function Home(props) {
	return (
		<motion.main
			variants={pageAnimation}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Hero
				variant="home"
				title="Great coffee made simple."
				description="Start your mornings with the world’s best coffees. Try our expertly curated artisan 
  				coffees from our best roasters delivered directly to your door, at your schedule."
			>
				<Spacer size={40} desktopAndUp={58} />
				<Button onClick={() => props.history.push('/plan')}>
					Create your plan
				</Button>
			</Hero>
			<Spacer size={120} tabletAndUp={144} desktopAndUp={136} />
			<Collection />
			<Spacer size={120} tabletAndUp={144} desktopAndUp={200} />
			<WhyChoose />
			<Spacer size={120} tabletAndUp={144} desktopAndUp={200} />
			<HowItWorks variant="home">
				<Spacer size={79} tabletAndUp={44} desktopAndUp={64} />
				<Button onClick={() => props.history.push('/plan')}>
					Create your plan
				</Button>
			</HowItWorks>
			<Spacer size={120} tabletAndUp={144} desktopAndUp={200} />
		</motion.main>
	);
}

export default Home;
