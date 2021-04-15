import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

import { COLORS, FONTS, FONT_SIZES, WEIGHTS, BREAKPOINTS } from '../constants';
import OrderSummaryText from './OrderSummaryText';
import Button from './Button';

function Modal({ showDialog, setShowDialog, orderSelections, pricePerMonth }) {
	const close = () => setShowDialog(false);

    const formattedPrice = typeof pricePerMonth === 'number' ? pricePerMonth.toFixed(2) : '--';
    const priceText = `$${formattedPrice} / mo`;

	return (
		<ModalOverlay isOpen={showDialog} onDismiss={close}>
			<ModalContent aria-label="Order Summary">
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
					<CheckoutWrapper>
						<Price>{priceText}</Price>
						<ButtonWrapper>
							<Button onClick={close}>
								<span>Checkout</span>
								<ButtonPrice> - {priceText}</ButtonPrice>
							</Button>
						</ButtonWrapper>
					</CheckoutWrapper>
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

	@media ${BREAKPOINTS.tablet} {
		padding: 48px 56px 40px;
	}
`;

const Heading = styled.h3`
	color: ${COLORS.white};
	font-size: 28px;
	line-height: 1.14;

	@media ${BREAKPOINTS.tablet} {
		font-size: ${FONT_SIZES.xl};
		line-height: 1.2;
	}
`;

const ContentWrapper = styled.div`
	background-color: ${COLORS.lightCream[100]};
	padding: 24px;
	padding-top: 40px;
	color: ${COLORS.grey[500]};

	@media ${BREAKPOINTS.tablet} {
		padding: 56px;
	}
`;

const Subtext = styled.p`
	color: ${COLORS.grey[700]};
	opacity: 80%;
	margin-bottom: 24px;

	@media ${BREAKPOINTS.tablet} {
		margin-top: 7px;
		margin-bottom: 47px;
	}
`;

const CheckoutWrapper = styled.div`
	@media ${BREAKPOINTS.tablet} {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const Price = styled.span`
	display: none;

	@media ${BREAKPOINTS.tablet} {
		display: inline;
		font-size: ${FONT_SIZES.l};
		font-family: ${FONTS.secondary};
		font-weight: ${WEIGHTS.bold};
		color: ${COLORS.grey[700]};
	}
`;

const ButtonWrapper = styled.div`
	text-align: center;

	@media ${BREAKPOINTS.tablet} {
		display: inline;
		text-align: revert;
	}
`;

const ButtonPrice = styled.span`
	@media ${BREAKPOINTS.tablet} {
		display: none;
	}
`;

export default Modal;
