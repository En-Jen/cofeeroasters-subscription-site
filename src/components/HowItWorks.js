import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';

function HowItWorks({ variant, children }) {
	let Component;
	if (variant === 'home') {
		Component = HomeHowItWorks;
	} else if (variant === 'plan') {
		Component = PlanHowItWorks;
	} else {
		throw new Error(`Unrecognized HowItWorks variant: ${variant}`);
	}

	return (
		<Component>
			{variant === 'home' && <Heading>How it works</Heading>}
			<Line />
			<StepsWrapper>
				<Step>
					<Circle />
					<StepNumber>01</StepNumber>
					<StepTitle>Pick your coffee</StepTitle>
					<p>
						Select from our evolving range of artisan coffees. Our
						beans are ethically sourced and we pay fair prices for
						them. There are new coffees in all profiles every month
						for you to try out.
					</p>
				</Step>
				<Step>
					<Circle />
					<StepNumber>02</StepNumber>
					<StepTitle>Choose the frequency</StepTitle>
					<p>
						Customize your order frequency, quantity, even your
						roast style and grind type. Pause, skip or cancel your
						subscription with no commitment through our online
						portal.
					</p>
				</Step>
				<Step>
					<Circle />
					<StepNumber>03</StepNumber>
					<StepTitle>Receive and enjoy!</StepTitle>
					<p>
						We ship your package within 48 hours, freshly roasted.
						Sit back and enjoy award-winning world-class coffees
						curated to provide a distinct tasting experience.
					</p>
				</Step>
			</StepsWrapper>
			{children}
		</Component>
	);
}

const BaseHowItWorks = styled.section`
	text-align: center;
	margin: auto;

	@media ${BREAKPOINTS.tablet} {
		text-align: left;
	}
`;

const HomeHowItWorks = styled(BaseHowItWorks)`
	@media ${BREAKPOINTS.laptop} {
		padding: 0 58px;
	}

	@media ${BREAKPOINTS.desktop} {
		padding: 0 85px;
	}
`;

const PlanHowItWorks = styled(BaseHowItWorks)`
	background-color: ${COLORS.grey[900]};
	border-radius: 10px;
	/* TODO: IMPLEMENT BETTER SOLUTION!!!!!! */
	/* Stretch width to edge of viewport */
	margin-left: -6.9%;
	margin-right: -6.9%;
	padding: 80px 6.9%;

	@media ${BREAKPOINTS.laptop} {
		margin: auto;
		padding: 96px 58px;
	}

	@media ${BREAKPOINTS.desktop} {
		padding: 96px 85px;
	}
`;

const Heading = styled.h2`
	margin-bottom: 80px;
	color: ${COLORS.grey[500]};
	font-size: ${FONT_SIZES.m};
	line-height: 1.33;
`;

const Line = styled.hr`
	display: none;
	border: 1px solid ${COLORS.paleOrange};

	@media ${BREAKPOINTS.tablet} {
		display: block;
        // Width of 2 grid cells plus 2 grid gaps
		width: calc((100% - 96px) / 3 * 2 + 96px);
		transform: translateX(15px) translateY(17px);
	}

	@media ${BREAKPOINTS.laptop} {
		width: calc((100% - 128px) / 3 * 2 + 128px);
	}

	@media ${BREAKPOINTS.desktop} {
		width: calc((100% - 190px) / 3 * 2 + 190px);
	}
`;

const StepsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 56px;

	@media ${BREAKPOINTS.tablet} {
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 48px;
	}

	@media ${BREAKPOINTS.laptop} {
		grid-gap: 64px;
	}

	@media ${BREAKPOINTS.desktop} {
		grid-gap: 95px;
	}
`;

const Step = styled.div`
	${HomeHowItWorks} & {
		color: ${COLORS.grey[700]};
	}

	${PlanHowItWorks} & {
		color: ${COLORS.white};
	}
`;

const Circle = styled.div`
	width: 31px;
	height: 31px;
	border-radius: 50%;
	border: 2px solid ${COLORS.darkCyan};
	display: none;
	position: relative;
	z-index: 1;

	${HomeHowItWorks} & {
		background-color: ${COLORS.lightCream[100]};
	}

	${PlanHowItWorks} & {
		background-color: transparent;
	}

	@media ${BREAKPOINTS.tablet} {
		display: block;
		margin-bottom: 48px;
	}

	@media ${BREAKPOINTS.desktop} {
		margin-bottom: 68px;
	}
`;

const StepNumber = styled.h3`
	font-size: ${FONT_SIZES.xxxl};
	line-height: 1;
	color: ${COLORS.paleOrange};
	margin-bottom: 24px;

	@media ${BREAKPOINTS.tablet} {
		margin-bottom: 48px;
	}

	@media ${BREAKPOINTS.desktop} {
		margin-bottom: 38px;
	}
`;

const StepTitle = styled.h4`
	font-size: 1.75rem;
	line-height: 1.14;
	margin-bottom: 24px;

	@media ${BREAKPOINTS.tablet} {
		margin-bottom: 38px;
		max-width: 224px;
	}

	@media ${BREAKPOINTS.desktop} {
		font-size: ${FONT_SIZES.l};
		line-height: 1.125;
		margin-bottom: 42px;
		max-width: 255px;
	}
`;

export default HowItWorks;