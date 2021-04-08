import React, { useState } from 'react';

import PlanAccordion from './PlanAccordion';
import Spacer from './Spacer';
import OrderSummary from './OrderSummary';

function OrderForm() {
	const [orderSelections, setOrderSelections] = useState([
		null,
		null,
		null,
		null,
		null,
	]);

	return (
		<section>
			<PlanAccordion
				orderSelections={orderSelections}
				setOrderSelections={setOrderSelections}
			/>
			<Spacer size={120} tabletAndUp={144} desktopAndUp={88} />
			<OrderSummary orderSelections={orderSelections} />
		</section>
	);
}

export default OrderForm;
