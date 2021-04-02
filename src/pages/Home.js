import React from 'react';
import Hero from '../components/Hero';
import Spacer from '../components/Spacer';
import Button from '../components/Button';

function Home() {
	return (
		<div>
			Home
			<Hero
				variant="home"
				title="Great coffee made simple."
				description="Start your mornings with the world’s best coffees. Try our expertly curated artisan 
  				coffees from our best roasters delivered directly to your door, at your schedule."
			>
				<Spacer size={39} />
				<Button>Create your plan</Button>
			</Hero>
		</div>
	);
}

export default Home;
