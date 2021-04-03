// Borrowed and tweaked from https://www.joshwcomeau.com/react/modern-spacer-gif/
// Used to create space between components

import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../constants';

function getResponsiveSpace(breakpoint) {
	return typeof breakpoint === 'number' ? breakpoint : undefined;
}

const Spacer = styled.span`
	display: block;
	width: ${p => p.size}px;
	min-width: ${p => p.size}px;
	height: ${p => p.size}px;
	min-height: ${p => p.size}px;

	// Make Spacer responsive
	@media ${BREAKPOINTS.mobileSmall} {
		width: ${p => getResponsiveSpace(p.mobileSmallAndUp)}px;
		min-width: ${p => getResponsiveSpace(p.mobileSmallAndUp)}px;
		height: ${p => getResponsiveSpace(p.mobileSmallAndUp)}px;
		min-height: ${p => getResponsiveSpace(p.mobileSmallAndUp)}px;
	}

	@media ${BREAKPOINTS.mobile} {
		width: ${p => getResponsiveSpace(p.mobileAndUp)}px;
		min-width: ${p => getResponsiveSpace(p.mobileAndUp)}px;
		height: ${p => getResponsiveSpace(p.mobileAndUp)}px;
		min-height: ${p => getResponsiveSpace(p.mobileAndUp)}px;
	}

	@media ${BREAKPOINTS.tablet} {
		width: ${p => getResponsiveSpace(p.tabletAndUp)}px;
		min-width: ${p => getResponsiveSpace(p.tabletAndUp)}px;
		height: ${p => getResponsiveSpace(p.tabletAndUp)}px;
		min-height: ${p => getResponsiveSpace(p.tabletAndUp)}px;
	}

	@media ${BREAKPOINTS.laptop} {
		width: ${p => getResponsiveSpace(p.laptopAndUp)}px;
		min-width: ${p => getResponsiveSpace(p.laptopAndUp)}px;
		height: ${p => getResponsiveSpace(p.laptopAndUp)}px;
		min-height: ${p => getResponsiveSpace(p.laptopAndUp)}px;
	}

	@media ${BREAKPOINTS.desktop} {
		width: ${p => getResponsiveSpace(p.desktopAndUp)}px;
		min-width: ${p => getResponsiveSpace(p.desktopAndUp)}px;
		height: ${p => getResponsiveSpace(p.desktopAndUp)}px;
		min-height: ${p => getResponsiveSpace(p.desktopAndUp)}px;
	}
`;

export default Spacer;
