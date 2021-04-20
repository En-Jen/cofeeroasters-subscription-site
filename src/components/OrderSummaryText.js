import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONTS, FONT_SIZES, WEIGHTS } from '../constants';
import VisuallyHidden from './VisuallyHidden';

function OrderSummaryText({ orderSelections }) {
	const displaySelection = index => {
		return orderSelections[index] ? (
			orderSelections[index]
		) : (
			<>
				<span aria-hidden="true">_____</span>
				<VisuallyHidden>blank</VisuallyHidden>
			</>
		);
	};

	const isCapsuleSelected = orderSelections[0] === 'Capsule';

	return (
		<Wrapper>
			“I drink my coffee {isCapsuleSelected ? 'using' : 'as'}{' '}
			<CyanText>
				{isCapsuleSelected ? 'Capsules' : displaySelection(0)}
			</CyanText>
			, with a <CyanText>{displaySelection(1)}</CyanText> type of bean.{' '}
			<CyanText>{displaySelection(2)}</CyanText>
			{!isCapsuleSelected && (
				<>
					{' '}
					ground ala <CyanText>{displaySelection(3)}</CyanText>
				</>
			)}
			, sent to me <CyanText>{displaySelection(4)}</CyanText>.”
		</Wrapper>
	);
}

const Wrapper = styled.p`
	font-family: ${FONTS.secondary};
	font-size: ${FONT_SIZES.m};
	font-weight: ${WEIGHTS.bold};
	line-height: 1.67;
`;

const CyanText = styled.span`
	color: ${COLORS.darkCyan};
`;

export default OrderSummaryText;
