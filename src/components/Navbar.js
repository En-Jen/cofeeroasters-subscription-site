import React from 'react';
import styled from 'styled-components/macro';

// import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';
// import iconClose from '../assets/shared/mobile/icon-close.svg';
import Logo from './Logo';
import NavLinks from './NavLinks';

function Navbar() {
	return (
		<Wrapper>
			<Logo />
			<NavLinks variant="hamburger" />
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
`;

export default Navbar;
