import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../constants';
import PlanAccordion from './PlanAccordion';
import Spacer from './Spacer';
import OrderSummary from './OrderSummary';
import Button from './Button';

function OrderForm() {
	const [orderSelections, setOrderSelections] = useState(Array(5).fill(null));

	// Check if order form is complete
	const isFormComplete = () => {
		const orderSelectionsCopy = orderSelections.slice();
		// Get orderSelections array without value for grind option
		orderSelectionsCopy.splice(3, 1);
		if (
			!orderSelections.includes(null) ||
			(orderSelections[0] === 'Capsule' &&
				!orderSelectionsCopy.includes(null))
		) {
			return true;
		} else return false;
	};

	return (
		<section>
			<PlanAccordion
				orderSelections={orderSelections}
				setOrderSelections={setOrderSelections}
			/>
			<Spacer size={120} tabletAndUp={144} desktopAndUp={88} />
			<OrderSummary orderSelections={orderSelections} />
			<Spacer size={56} tabletAndUp={40} />
			<ButtonWrapper>
				<Button disabled={!isFormComplete()}>Create my plan!</Button>
			</ButtonWrapper>
		</section>
	);
}

const ButtonWrapper = styled.div`
	text-align: center;

	@media ${BREAKPOINTS.laptop} {
		text-align: right;
	}
`;

export default OrderForm;
