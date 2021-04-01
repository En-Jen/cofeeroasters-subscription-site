import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONTS, FONT_SIZES } from '../constants';

function Button({ children }) {
	return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
	font-family: ${FONTS.secondary};
	font-size: ${FONT_SIZES.s};
	cursor: pointer;
	background-color: ${COLORS.darkCyan};
	color: ${COLORS.lightCream[100]};
	border: none;
	border-radius: 6px;
	padding: 16px 36px;
	transition: background-color 0.2s ease-in-out;

	&:hover {
		background-color: ${COLORS.lightCyan};
	}

	&:disabled {
		background-color: ${COLORS.grey[300]};
		cursor: revert;
	}
`;

export default Button;
