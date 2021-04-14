import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONTS, FONT_SIZES, WEIGHTS, BREAKPOINTS } from '../constants';
import bgImageMobile from '../assets/plan/mobile/bg-order-summary.png';
import bgImageDesktop from '../assets/plan/desktop/bg-order-summary.png';
import OrderSummaryText from './OrderSummaryText';

function OrderSummary({ orderSelections }) {
	return (
		<Wrapper>
			<Heading>Order Summary</Heading>
			<OrderSummaryText orderSelections={orderSelections} />
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background-image: url(${bgImageMobile});
	background-size: cover;
	border-radius: 10px;
	padding: 32px 24px;
	color: ${COLORS.white};

	@media ${BREAKPOINTS.tablet} {
		padding: 27px 44px;
	}

	@media ${BREAKPOINTS.laptop} {
		padding: 27px 64px;
		background-image: url(${bgImageDesktop});
	}
`;

const Heading = styled.h5`
	font-family: ${FONTS.primary};
	font-size: ${FONT_SIZES.xs};
	line-height: 1.625;
	font-weight: ${WEIGHTS.regular};
	text-transform: uppercase;
	opacity: 50%;
	margin-bottom: 8px;
`;

// const Summary = styled.p`
// 	font-family: ${FONTS.secondary};
// 	font-size: ${FONT_SIZES.m};
// 	font-weight: ${WEIGHTS.bold};
// 	line-height: 1.67;
// `;

// const CyanText = styled.span`
// 	color: ${COLORS.darkCyan};
// `;

export default OrderSummary;
