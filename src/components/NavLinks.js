import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { COLORS, FONTS, FONT_SIZES, BREAKPOINTS } from '../constants';

function NavLinks({ variant }) {
	let Component;
	if (variant === 'hamburger') {
		Component = HamburgerLinksList;
	} else if (!variant) {
		Component = DefaultLinksList;
	} else {
		throw new Error(`Unrecognized Hero variant: ${variant}`);
	}

	return (
		<nav role="navigation">
			<Component role="list">
				<ListItem>
					<Link exact to="/">
						Home
					</Link>
				</ListItem>
				<ListItem>
					<Link exact to="/about">
						About us
					</Link>
				</ListItem>
				<ListItem>
					<Link exact to="/plan">
						Create your plan
					</Link>
				</ListItem>
			</Component>
		</nav>
	);
}

const BaseNavList = styled.ul`
	display: flex;
	font-weight: 700;

	a {
		text-decoration: none;
	}
`;

const HamburgerLinksList = styled(BaseNavList)`
	flex-direction: column;
	font-family: ${FONTS.secondary};
	font-size: ${FONT_SIZES.m};
	line-height: 1.33;
	text-align: center;

	a {
		color: ${COLORS.grey[900]};
	}
`;

const DefaultLinksList = styled(BaseNavList)`
	flex-direction: column;
	font-family: ${FONTS.primary};
	text-transform: uppercase;
	font-size: ${FONT_SIZES.xxs};
	line-height: 1.25;

	a {
		color: ${COLORS.grey[500]};
		transition: color 0.3s ease;

		&:hover {
			color: ${COLORS.lightCream[100]};
		}
	}

	@media ${BREAKPOINTS.tablet} {
		flex-direction: row;
	}
`;

const ListItem = styled.li`
	${HamburgerLinksList} &:not(:last-of-type) {
		margin-bottom: 32px;
	}

	${DefaultLinksList} & {
		&:hover {
			color: ${COLORS.lightCream[100]};
		}
	}

	${DefaultLinksList} &:not(:last-of-type) {
		margin-bottom: 24px;

		@media ${BREAKPOINTS.tablet} {
			margin-bottom: 0;
			margin-right: 32px;
		}
	}
`;

export default NavLinks;
