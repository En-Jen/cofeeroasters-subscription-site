import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONTS, FONT_SIZES, WEIGHTS } from '../constants';

function Button({ disabled, width, onClick, children }) {
	return (
		<Wrapper disabled={disabled} width={width} onClick={onClick}>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled.button`
	font-family: ${FONTS.secondary};
	font-size: ${FONT_SIZES.s};
	font-weight: ${WEIGHTS.bold};
	cursor: pointer;
	background-color: ${COLORS.darkCyan};
	color: ${COLORS.lightCream[100]};
	border: none;
	border-radius: 6px;
	padding: 16px 32px;
	width: ${p => (p.width ? `${p.width}px` : 'auto')};
	transition: background-color 0.2s ease-in-out, transform 0.3s;

	&:hover {
		background-color: ${COLORS.lightCyan};
		transform: scale(1.1);
	}

	&:disabled {
		background-color: ${COLORS.grey[300]};
		cursor: not-allowed;
	}
`;

export default Button;
