import React from 'react';
import styled from 'styled-components/macro';

import iconClose from '../assets/shared/mobile/icon-close.svg';
import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';

function HamburgerButton({ expanded, setExpanded }) {
	return (
		<Wrapper
			onClick={() => setExpanded(!expanded)}
            expanded={expanded}
			aria-expanded={expanded}
			aria-label="Mobile Navigation Button"
		>
			<img
				src={expanded ? iconClose : iconHamburger}
				alt={`${expanded ? 'Close' : 'Open'} Menu`}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
`;

export default HamburgerButton;
