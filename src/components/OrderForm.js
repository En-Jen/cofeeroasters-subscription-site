import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../constants';
import PlanAccordion from './PlanAccordion';
import Spacer from './Spacer';
import OrderSummary from './OrderSummary';
import Button from './Button';
import Modal from './Modal';
import Sidebar from './Sidebar';

function OrderForm() {
	const [orderSelections, setOrderSelections] = useState(Array(5).fill(null));
	const [pricePerShipment, setPricePerShipment] = useState({
		weekly: 7.2,
		biweekly: 9.6,
		monthly: 12.0,
	});
	const [pricePerMonth, setPricePerMonth] = useState(null);
	const [showDialog, setShowDialog] = useState(false);
	const [isFormComplete, setIsFormComplete] = useState(false);
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [openAccordItems, setOpenAccordItems] = React.useState([0]);

	// Get price per shipment and update state when orderSelections changes
	useEffect(() => {
		if (orderSelections[2] === '250g') {
			setPricePerShipment({
				weekly: 7.2,
				biweekly: 9.6,
				monthly: 12.0,
			});
		} else if (orderSelections[2] === '500g') {
			setPricePerShipment({
				weekly: 13.0,
				biweekly: 17.5,
				monthly: 22.0,
			});
		} else if (orderSelections[2] === '1000g') {
			setPricePerShipment({
				weekly: 22.0,
				biweekly: 32.0,
				monthly: 42.0,
			});
		}
	}, [orderSelections, setPricePerShipment]);

	// Get price per month and update state when pricePerShipment changes
	useEffect(() => {
		if (orderSelections[2] && orderSelections[4] === 'Every week') {
			setPricePerMonth(pricePerShipment.weekly * 4);
		} else if (
			orderSelections[2] &&
			orderSelections[4] === 'Every 2 weeks'
		) {
			setPricePerMonth(pricePerShipment.biweekly * 2);
		} else if (orderSelections[2] && orderSelections[4] === 'Every month') {
			setPricePerMonth(pricePerShipment.monthly);
		}
	}, [pricePerShipment, orderSelections, setPricePerMonth]);

	// Check if order form is complete and set state accordingly. Use this to
	// toggle whether Create my plan button is disabled
	useEffect(() => {
		const orderSelectionsCopy = orderSelections.slice();
		// Get orderSelections array without value for grind option
		orderSelectionsCopy.splice(3, 1);
		if (
			!orderSelections.includes(null) ||
			(orderSelections[0] === 'Capsule' &&
				!orderSelectionsCopy.includes(null))
		) {
			setIsFormComplete(true);
		} else setIsFormComplete(false);
	}, [orderSelections, setIsFormComplete]);

	const open = () => setShowDialog(true);

	return (
		<Wrapper aria-label="order form">
			<Sidebar
				activeQuestion={activeQuestion}
				setActiveQuestion={setActiveQuestion}
				openAccordItems={openAccordItems}
				setOpenAccordItems={setOpenAccordItems}
				orderSelections={orderSelections}
			/>
			<div>
				<PlanAccordion
					orderSelections={orderSelections}
					setOrderSelections={setOrderSelections}
					pricePerShipment={pricePerShipment}
					openAccordItems={openAccordItems}
					setOpenAccordItems={setOpenAccordItems}
				/>
				<Spacer size={120} tabletAndUp={144} desktopAndUp={88} />
				<OrderSummary orderSelections={orderSelections} />
				<Spacer size={56} tabletAndUp={40} />
				<ButtonWrapper>
					<Button onClick={open} disabled={!isFormComplete}>
						Create my plan!
					</Button>
				</ButtonWrapper>
			</div>

			<Modal
				showDialog={showDialog}
				setShowDialog={setShowDialog}
				orderSelections={orderSelections}
				pricePerMonth={pricePerMonth}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	@media ${BREAKPOINTS.laptop} {
		display: grid;
		grid-template-columns: repeat(2, auto);
		gap: 64px;
	}

	@media ${BREAKPOINTS.desktop} {
		gap: 125px;
	}

	@media ${BREAKPOINTS.desktopLarge} {
		padding: 0 85px;
	}
`;

const ButtonWrapper = styled.div`
	text-align: center;

	@media ${BREAKPOINTS.laptop} {
		text-align: right;
	}
`;

export default OrderForm;
