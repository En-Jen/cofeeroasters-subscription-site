import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../constants';
import Logo from '../components/Logo';
import NavLinks from '../components/NavLinks';

function Footer() {
	return (
		<Wrapper>
			<Logo fill={`${COLORS.white}`} />
			<NavLinks variant="default" />
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background-color: ${COLORS.grey[900]};
`;

export default Footer;
