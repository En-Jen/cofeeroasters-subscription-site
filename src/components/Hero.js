import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, BREAKPOINTS, FONT_SIZES } from '../constants';
import coffeePressMobile from '../assets/home/mobile/image-hero-coffeepress.jpg';
import coffeePressTablet from '../assets/home/tablet/image-hero-coffeepress.jpg';
import coffeePressDesktop from '../assets/home/desktop/image-hero-coffeepress.jpg';
import whiteCupMobile from '../assets/about/mobile/image-hero-whitecup.jpg';
import whiteCupTablet from '../assets/about/tablet/image-hero-whitecup.jpg';
import whiteCupDesktop from '../assets/about/desktop/image-hero-whitecup.jpg';
import blackCupMobile from '../assets/plan/mobile/image-hero-blackcup.jpg';
import blackCupTablet from '../assets/plan/tablet/image-hero-blackcup.jpg';
import blackCupDesktop from '../assets/plan/desktop/image-hero-blackcup.jpg';

function Hero({ variant, title, description, children }) {
	let Component;
	if (variant === 'home') {
		Component = HomeHero;
	} else if (variant === 'about') {
		Component = AboutHero;
	} else if (variant === 'plan') {
		Component = PlanHero;
	} else {
		throw new Error(`Unrecognized Hero variant: ${variant}`);
	}

	return (
		<Component>
			<Content>
				<Heading id="main">{title}</Heading>
				<p>{description}</p>
				{children}
			</Content>
		</Component>
	);
}

const BaseHero = styled.section`
	background-size: cover;
	border-radius: 10px;
	display: flex;
	align-items: center;
`;

const HomeHero = styled(BaseHero)`
	background-image: url(${coffeePressMobile});
	height: 500px;

	@media ${BREAKPOINTS.tablet} {
		background-image: url(${coffeePressTablet});
	}

	@media ${BREAKPOINTS.laptop} {
		background-image: url(${coffeePressDesktop});
		height: 600px;
	}
`;

const AboutHero = styled(BaseHero)`
	background-image: url(${whiteCupMobile});
	height: 400px;

	@media ${BREAKPOINTS.tablet} {
		background-image: url(${whiteCupTablet});
	}

	@media ${BREAKPOINTS.laptop} {
		background-image: url(${whiteCupDesktop});
		height: 450px;
	}
`;

const PlanHero = styled(BaseHero)`
	background-image: url(${blackCupMobile});
	height: 400px;

	@media ${BREAKPOINTS.tablet} {
		background-image: url(${blackCupTablet});
	}

	@media ${BREAKPOINTS.laptop} {
		background-image: url(${blackCupDesktop});
		height: 450px;
	}
`;

const Content = styled.div`
	color: ${COLORS.lightCream[100]};
	text-align: center;
	padding: 0 24px;

	@media ${BREAKPOINTS.tablet} {
		text-align: left;
		width: 398px;
		padding: 0;
		margin-left: 58px;
	}

	@media ${BREAKPOINTS.desktop} {
		width: 398px;
		margin-left: 85px;
	}

	${HomeHero} & {
		@media ${BREAKPOINTS.desktop} {
			width: 493px;
		}
	}

	${AboutHero} & {
		@media ${BREAKPOINTS.desktop} {
			width: 445px;
		}
	}

	${PlanHero} & {
		@media ${BREAKPOINTS.desktop} {
			width: 486px;
		}
	}
`;

const Heading = styled.h1`
	${HomeHero} &,
    ${PlanHero} & {
		font-size: ${FONT_SIZES.xl};
		margin-bottom: 24px;

		@media ${BREAKPOINTS.tablet} {
			font-size: ${FONT_SIZES.xxl};
		}

		@media ${BREAKPOINTS.desktop} {
			font-size: ${FONT_SIZES.xxxl};
			margin-bottom: 32px;
		}
	}

	${AboutHero} & {
		font-size: 1.75rem;
		margin-bottom: 24px;

		@media ${BREAKPOINTS.tablet} {
			font-size: ${FONT_SIZES.l};
		}

		@media ${BREAKPOINTS.desktop} {
			font-size: ${FONT_SIZES.xl};
		}
	}
`;

export default Hero;
