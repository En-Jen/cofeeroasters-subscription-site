import React from 'react';
import styled from 'styled-components/macro';

import Logo from './Logo';
import NavLinks from './NavLinks';
import HamburgerButton from './HamburgerButton';

function Navbar() {
	return (
		<Wrapper>
			<Logo />
			<NavLinksWrapper>
				<NavLinks variant="hamburger" />
			</NavLinksWrapper>
			<HamburgerButton />
		</Wrapper>
	);
}

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
`;

const NavLinksWrapper = styled.div`
	display: none;
`;

export default Navbar;
