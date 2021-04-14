import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../constants';
import PlanAccordion from './PlanAccordion';
import Spacer from './Spacer';
import OrderSummary from './OrderSummary';
import Button from './Button';
import Modal from './Modal';

function OrderForm() {
	const [orderSelections, setOrderSelections] = useState(Array(5).fill(null));
	const [pricePerShipment, setPricePerShipment] = React.useState({
		weekly: 7.20,
		biweekly: 9.60,
		monthly: 12.00,
	});
	const [showDialog, setShowDialog] = useState(false);

	const open = () => setShowDialog(true);

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
				pricePerShipment={pricePerShipment}
				setPricePerShipment={setPricePerShipment}
			/>
			<Spacer size={120} tabletAndUp={144} desktopAndUp={88} />
			<OrderSummary orderSelections={orderSelections} />
			<Spacer size={56} tabletAndUp={40} />
			<ButtonWrapper>
				<Button
					onClick={open}
					disabled={!isFormComplete()}
				>
					Create my plan!
				</Button>
			</ButtonWrapper>

			<Modal
				showDialog={showDialog}
				setShowDialog={setShowDialog}
				orderSelections={orderSelections}
			/>
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
