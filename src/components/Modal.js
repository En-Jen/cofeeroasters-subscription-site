import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

import OrderSummaryText from './OrderSummaryText';
import Button from './Button';

function Modal({ showDialog, setShowDialog, orderSelections }) {
	const close = () => setShowDialog(false);

	return (
		<ModalOverlay isOpen={showDialog} onDismiss={close}>
			<ModalContent>
				<div>
					<h3>Order Summary</h3>
				</div>
				<OrderSummaryText orderSelections={orderSelections} />
				<p>
					Is this correct? You can proceed to checkout or go back to
					plan selection if something is off. Subscription discount
					codes can also be redeemed at the checkout.
				</p>
                <span>$14.00 / mo</span>
				<Button onClick={close}>
					<span>Checkout</span>
					<span> - $14.00 / mo</span>
				</Button>
			</ModalContent>
		</ModalOverlay>
	);
}

const ModalOverlay = styled(DialogOverlay)`
	background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled(DialogContent)`
	border-radius: 8px;
`;

export default Modal;
