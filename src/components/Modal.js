import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';
import OrderSummaryText from './OrderSummaryText';
import Button from './Button';

function Modal({ showDialog, setShowDialog, orderSelections }) {
	const close = () => setShowDialog(false);

	return (
		<ModalOverlay isOpen={showDialog} onDismiss={close}>
			<ModalContent>
				<HeadingWrapper>
					<Heading>Order Summary</Heading>
				</HeadingWrapper>
				<ContentWrapper>
					<OrderSummaryText orderSelections={orderSelections} />
					<Subtext>
						Is this correct? You can proceed to checkout or go back
						to plan selection if something is off. Subscription
						discount codes can also be redeemed at the checkout.
					</Subtext>
					<Price>$14.00 / mo</Price>
                    <ButtonWrapper>
                        <Button onClick={close}>
                            <span>Checkout</span>
                            <span> - $14.00 / mo</span>
                        </Button>
                    </ButtonWrapper>
				</ContentWrapper>
			</ModalContent>
		</ModalOverlay>
	);
}

const ModalOverlay = styled(DialogOverlay)`
	background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled(DialogContent)`
	width: 87.2%;
    max-width: 540px;
	padding: 0;
	overflow: hidden;
	border-radius: 8px;
`;

const HeadingWrapper = styled.div`
	background-color: ${COLORS.grey[700]};
	padding: 28px 24px;
`;

const Heading = styled.h3`
	color: ${COLORS.white};
	font-size: 28px;
	line-height: 1.14;

	@media ${BREAKPOINTS.tablet} {
		font-size: ${FONT_SIZES.xl};
	}
`;

const ContentWrapper = styled.div`
	background-color: ${COLORS.lightCream[100]};
	padding: 24px;
	padding-top: 40px;
	color: ${COLORS.grey[500]};
`;

const Subtext = styled.p`
    color: ${COLORS.grey[700]};
    opacity: 80%;
    margin-bottom: 24px;
`;

const Price = styled.span`
    display: none;
`;

const ButtonWrapper = styled.div`
    text-align: center;
`;

export default Modal;
