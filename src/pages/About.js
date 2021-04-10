import React from 'react';

import Hero from '../components/Hero';
import Spacer from '../components/Spacer';
import Commitment from '../components/Commitment';
import Quality from '../components/Quality';

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
			<Spacer size={120} tabletAndUp={144} desktopAndUp={168} />
			<Commitment />
			<Spacer
				size={200}
				mobileAndUp={250}
				tabletAndUp={340}
				laptopAndUp={256}
			/>
			<Quality />
		</main>
	);
}

export default About;
