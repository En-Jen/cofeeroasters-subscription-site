import React from 'react';

import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';

function Plan() {
	return (
		<main>
			<Hero
				variant="plan"
				title="Create a plan"
				description="Build a subscription plan that best fits your needs. We offer an assortment of the best 
				artisan coffees from around the globe delivered fresh to your door."
			/>
			<HowItWorks variant="plan" />
		</main>
	);
}

export default Plan;
