import React from 'react';

import Hero from '../components/Hero';
import Spacer from '../components/Spacer';
import Button from '../components/Button';

function Home(props) {
	return (
		<main>
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
		</main>
	);
}

export default Home;
