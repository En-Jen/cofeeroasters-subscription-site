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
				<Heading>{title}</Heading>
				<p>{description}</p>
				{children}
			</Content>
		</Component>
	);
}

const BaseHero = styled.div`
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
`;

const AboutHero = styled(BaseHero)`
	background-image: url(${whiteCupMobile});
	height: 400px;

	@media ${BREAKPOINTS.tablet} {
		background-image: url(${whiteCupTablet});
	}
`;

const PlanHero = styled(BaseHero)`
	background-image: url(${blackCupMobile});
	height: 400px;

	@media ${BREAKPOINTS.tablet} {
		background-image: url(${blackCupTablet});
	}
`;

const Content = styled.div`
	color: ${COLORS.lightCream[100]};
	text-align: center;
	padding-left: 24px;
	padding-right: 24px;
`;

const Heading = styled.h1`
	${HomeHero} & {
		font-size: ${FONT_SIZES.xl};
        margin-bottom: 24px;
	}

	${AboutHero} & {
		font-size: 1.75rem;
        margin-bottom: 24px;
	}

    ${PlanHero} & {
		font-size: ${FONT_SIZES.xl};
        margin-bottom: 22px;
	}
`;

export default Hero;
