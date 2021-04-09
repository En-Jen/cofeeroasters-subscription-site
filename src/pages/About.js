import React from 'react';

import Hero from '../components/Hero';
import Commitment from '../components/Commitment';

function About() {
	return (
		<main>
			<Hero
				variant="about"
				title="About Us"
				description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
				coffee from around the world. We have since been dedicated to bring the perfect cup - from 
				bean to brew - in every shipment."
			/>
			<Commitment />
			
			
		</main>
	);
}

export default About;
