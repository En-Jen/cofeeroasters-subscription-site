// Borrowed and tweaked from https://www.joshwcomeau.com/react/modern-spacer-gif/
// Used to create space between components

import styled from 'styled-components/macro';

import { BREAKPOINTS } from '../constants';

function getResponsiveSpace(breakpoint) {
	return typeof breakpoint === 'number' ? breakpoint + 'px' : undefined;
}

const Spacer = styled.span`
	display: block;
	width: ${p => p.size}px;
	min-width: ${p => p.size}px;
	height: ${p => p.size}px;
	min-height: ${p => p.size}px;

	// Make Spacer responsive
	@media ${BREAKPOINTS.mobileSmall} {
		width: ${p => getResponsiveSpace(p.mobileSmallAndUp)};
		min-width: ${p => getResponsiveSpace(p.mobileSmallAndUp)};
		height: ${p => getResponsiveSpace(p.mobileSmallAndUp)};
		min-height: ${p => getResponsiveSpace(p.mobileSmallAndUp)};
	}

	@media ${BREAKPOINTS.mobile} {
		width: ${p => getResponsiveSpace(p.mobileAndUp)};
		min-width: ${p => getResponsiveSpace(p.mobileAndUp)};
		height: ${p => getResponsiveSpace(p.mobileAndUp)};
		min-height: ${p => getResponsiveSpace(p.mobileAndUp)};
	}

	@media ${BREAKPOINTS.tablet} {
		width: ${p => getResponsiveSpace(p.tabletAndUp)};
		min-width: ${p => getResponsiveSpace(p.tabletAndUp)};
		height: ${p => getResponsiveSpace(p.tabletAndUp)};
		min-height: ${p => getResponsiveSpace(p.tabletAndUp)};
	}

	@media ${BREAKPOINTS.laptop} {
		width: ${p => getResponsiveSpace(p.laptopAndUp)};
		min-width: ${p => getResponsiveSpace(p.laptopAndUp)};
		height: ${p => getResponsiveSpace(p.laptopAndUp)};
		min-height: ${p => getResponsiveSpace(p.laptopAndUp)};
	}

	@media ${BREAKPOINTS.desktop} {
		width: ${p => getResponsiveSpace(p.desktopAndUp)};
		min-width: ${p => getResponsiveSpace(p.desktopAndUp)};
		height: ${p => getResponsiveSpace(p.desktopAndUp)};
		min-height: ${p => getResponsiveSpace(p.desktopAndUp)};
	}
`;

export default Spacer;
