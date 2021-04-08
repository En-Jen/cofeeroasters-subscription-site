import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, BREAKPOINTS } from '../constants';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SocialIcons from './SocialIcons';
import Spacer from './Spacer';

function Footer() {
	return (
		<Wrapper>
			<Logo fill={`${COLORS.white}`} />
			<Spacer
				size={48}
				tabletAndUp={32}
				laptopAndUp={0}
				desktopAndUp={102}
			/>
			<NavLinks />
			<Spacer size={48} tabletAndUp={65} laptopAndUp={0} />
			<SocialIconsWrapper>
				<SocialIcons />
			</SocialIconsWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background-color: ${COLORS.grey[900]};
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 54px 24px;

	@media ${BREAKPOINTS.laptop} {
		flex-direction: row;
		padding: 47px 85px;
		justify-content: space-between;
	}

	@media ${BREAKPOINTS.desktop} {
		justify-content: flex-start;
		padding: 9px 85px;
	}
`;

const SocialIconsWrapper = styled.div`
	@media ${BREAKPOINTS.desktop} {
		margin-left: auto;
	}
`;

export default Footer;
