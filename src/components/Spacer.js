// Borrowed from https://www.joshwcomeau.com/react/modern-spacer-gif/
// Used to create space between components

import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../constants';

const Spacer = styled.span`
	display: block;
	width: ${p => p.size + 'px'};
	min-width: ${p => p.size + 'px'};
	height: ${p => p.size + 'px'};
	min-height: ${p => p.size + 'px'};

	// Make Spacer responsive
	@media ${BREAKPOINTS.mobileSmall} {
		width: ${p =>
			p.mobileSmallAndUp ? p.mobileSmallAndUp + 'px' : undefined};
		min-width: ${p =>
			p.mobileSmallAndUp ? p.mobileSmallAndUp + 'px' : undefined};
		height: ${p =>
			p.mobileSmallAndUp ? p.mobileSmallAndUp + 'px' : undefined};
		min-height: ${p =>
			p.mobileSmallAndUp ? p.mobileSmallAndUp + 'px' : undefined};
	}

	@media ${BREAKPOINTS.mobile} {
		width: ${p => (p.mobileAndUp ? p.mobileAndUp + 'px' : undefined)};
		min-width: ${p => (p.mobileAndUp ? p.mobileAndUp + 'px' : undefined)};
		height: ${p => (p.mobileAndUp ? p.mobileAndUp + 'px' : undefined)};
		min-height: ${p => (p.mobileAndUp ? p.mobileAndUp + 'px' : undefined)};
	}

	@media ${BREAKPOINTS.tablet} {
		width: ${p => (p.tabletAndUp ? p.tabletAndUp + 'px' : undefined)};
		min-width: ${p => (p.tabletAndUp ? p.tabletAndUp + 'px' : undefined)};
		height: ${p => (p.tabletAndUp ? p.tabletAndUp + 'px' : undefined)};
		min-height: ${p => (p.tabletAndUp ? p.tabletAndUp + 'px' : undefined)};
	}

	@media ${BREAKPOINTS.laptop} {
		width: ${p =>
			typeof p.laptopAndUp === 'number'
				? p.laptopAndUp + 'px'
				: undefined};
		min-width: ${p =>
			typeof p.laptopAndUp === 'number'
				? p.laptopAndUp + 'px'
				: undefined};
		height: ${p =>
			typeof p.laptopAndUp === 'number'
				? p.laptopAndUp + 'px'
				: undefined};
		min-height: ${p =>
			typeof p.laptopAndUp === 'number'
				? p.laptopAndUp + 'px'
				: undefined};
	}

	@media ${BREAKPOINTS.desktop} {
		width: ${p => (p.desktopAndUp ? p.desktopAndUp + 'px' : undefined)};
		min-width: ${p => (p.desktopAndUp ? p.desktopAndUp + 'px' : undefined)};
		height: ${p => (p.desktopAndUp ? p.desktopAndUp + 'px' : undefined)};
		min-height: ${p =>
			p.desktopAndUp ? p.desktopAndUp + 'px' : undefined};
	}
`;

export default Spacer;
