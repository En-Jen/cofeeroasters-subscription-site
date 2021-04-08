import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONTS, FONT_SIZES, WEIGHTS } from '../constants';
import bgImageMobile from '../assets/plan/mobile/bg-order-summary.png';
import bgImageDesktop from '../assets/plan/desktop/bg-order-summary.png';

function OrderSummary() {
	return (
		<Wrapper>
			<Heading>Order Summary</Heading>
			<Summary>
				“I drink my coffee as <CyanText>_____</CyanText>, with a{' '}
				<CyanText>_____</CyanText> type of bean.{' '}
				<CyanText>_____</CyanText> ground ala <CyanText>_____</CyanText>
				, sent to me <CyanText>_____</CyanText>.”
			</Summary>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background-image: url(${bgImageMobile});
	background-size: cover;
	border-radius: 10px;
	padding: 32px 24px;
	color: ${COLORS.white};
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

const Summary = styled.p`
	font-family: ${FONTS.secondary};
	font-size: ${FONT_SIZES.m};
	font-weight: ${WEIGHTS.bold};
	line-height: 1.67;
`;

const CyanText = styled.span`
	color: ${COLORS.darkCyan};
`;

export default OrderSummary;
