import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../constants';
import Logo from '../components/Logo';
import NavLinks from '../components/NavLinks';
import SocialIcons from '../components/SocialIcons';

function Footer() {
	return (
		<Wrapper>
			<Logo fill={`${COLORS.white}`} />
			<NavLinks />
			<SocialIcons />
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background-color: ${COLORS.grey[900]};
`;

export default Footer;
