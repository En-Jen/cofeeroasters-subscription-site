import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../constants';

function SkipLink() {
	return (
		<>
			<Link href="#main">Skip to content</Link>
		</>
	);
}

const Link = styled.a`
	background: ${COLORS.darkCyan};
	color: ${COLORS.white};
	padding: 4px 8px;
	left: 50%;
	top: 0;
	position: absolute;
	transform: translateY(-100%) translateX(-50%);
	transition: transform 0.3s;

	&:focus {
		transform: translateY(0%) translateX(-50%);
	}
`;

export default SkipLink;
