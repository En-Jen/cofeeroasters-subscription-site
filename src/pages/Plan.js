import React from 'react';

import Spacer from '../components/Spacer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import OrderForm from '../components/OrderForm';

function Plan() {
	return (
		<main>
			<Hero
				variant="plan"
				title="Create a plan"
				description="Build a subscription plan that best fits your needs. We offer an assortment of the best 
				artisan coffees from around the globe delivered fresh to your door."
			/>
			<Spacer size={120} tabletAndUp={144} desktopAndUp={168} />
			<HowItWorks variant="plan" />
			<Spacer size={120} tabletAndUp={144} desktopAndUp={168} />
			<OrderForm />
			<Spacer size={120} tabletAndUp={144} desktopAndUp={168} />
		</main>
	);
}

export default Plan;
