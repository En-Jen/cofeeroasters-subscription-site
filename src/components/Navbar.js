import React from 'react';
import styled from 'styled-components/macro';

// import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';
// import iconClose from '../assets/shared/mobile/icon-close.svg';
import Logo from './Logo';
import NavLinks from './NavLinks';

function Navbar() {
	return (
		<Nav>
			<Logo />
			<NavLinks variant="hamburger" />
		</Nav>
	);
}

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
`;

export default Navbar;
