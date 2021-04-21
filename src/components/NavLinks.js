import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { navLinks } from '../data';
import { COLORS, FONTS, FONT_SIZES, BREAKPOINTS } from '../constants';

function NavLinks({ variant, expanded, setExpanded }) {
	const closeMobileMenu = () => {
		if (variant === 'header') {
			setExpanded(false);
		}
	};

	let Component;
	if (variant === 'header') {
		Component = HeaderNav;
	} else if (!variant) {
		Component = DefaultNav;
	} else {
		throw new Error(`Unrecognized NavLinks variant: ${variant}`);
	}

	return (
		<Component role="navigation" expanded={expanded}>
			<List role="list">
				{navLinks.map((link, i) => (
					<ListItem key={i}>
						<StyledLink
							exact
							to={link.path}
							onClick={closeMobileMenu}
						>
							{link.text}
						</StyledLink>
					</ListItem>
				))}
			</List>
		</Component>
	);
}

const BaseNav = styled.nav``;

const HeaderNav = styled(BaseNav)`
	position: absolute;
	left: 0;
	right: 0;
	top: 89px;
	padding: 40px 24px;
	background-image: linear-gradient(
		to bottom,
		${COLORS.lightCream[100]} 275px,
		hsla(43deg, 78%, 98%, 0.5)
	);
	height: calc(100vh - 89px);
	display: ${p => (p.expanded ? 'block' : 'none')};

	@media ${BREAKPOINTS.tablet} {
		position: revert;
		padding: 0;
		background-image: revert;
		height: revert;
		display: revert;
	}
`;

const DefaultNav = styled(BaseNav)``;

const List = styled.ul`
	display: flex;
	font-weight: 700;

	${HeaderNav} & {
		flex-direction: column;
		font-family: ${FONTS.secondary};
		font-size: ${FONT_SIZES.m};
		line-height: 1.33;
		text-align: center;

		@media ${BREAKPOINTS.tablet} {
			flex-direction: row;
			font-family: ${FONTS.primary};
			text-transform: uppercase;
			font-size: ${FONT_SIZES.xxs};
			line-height: 1.25;
		}
	}

	${DefaultNav} & {
		flex-direction: column;
		font-family: ${FONTS.primary};
		text-transform: uppercase;
		font-size: ${FONT_SIZES.xxs};
		line-height: 1.25;

		@media ${BREAKPOINTS.tablet} {
			flex-direction: row;
		}
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;

	${HeaderNav} & {
		color: ${COLORS.grey[900]};

		@media ${BREAKPOINTS.tablet} {
			color: ${COLORS.grey[500]};
			transition: color 0.3s ease;

			&:hover {
				color: ${COLORS.grey[700]};
			}
		}
	}

	${DefaultNav} & {
		color: ${COLORS.grey[500]};
		transition: color 0.3s ease;

		&:hover {
			color: ${COLORS.lightCream[100]};
		}
	}
`;

const ListItem = styled.li`
	${HeaderNav} &:not(:last-of-type) {
		margin-bottom: 32px;

		@media ${BREAKPOINTS.tablet} {
			margin-bottom: 0;
			margin-right: 32px;
		}
	}

	${DefaultNav} &:not(:last-of-type) {
		margin-bottom: 24px;

		@media ${BREAKPOINTS.tablet} {
			margin-bottom: 0;
			margin-right: 32px;
		}
	}
`;

export default NavLinks;
