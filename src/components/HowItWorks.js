import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';
import { circleVariants } from '../animations';
import bgImageDesktop from '../assets/plan/desktop/bg-steps.png';
import bgImageTablet from '../assets/plan/tablet/bg-steps.png';
import bgImageMobile from '../assets/plan/mobile/bg-steps.png';

function HowItWorks({ variant, children }) {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [controls, inView]);

	let Component;
	if (variant === 'home') {
		Component = HomeHowItWorks;
	} else if (variant === 'plan') {
		Component = PlanHowItWorks;
	} else {
		throw new Error(`Unrecognized HowItWorks variant: ${variant}`);
	}

	return (
		<Component aria-label="how it works">
			{variant === 'home' && <Heading>How it works</Heading>}
			<Line role="presentation" />
			<StepsWrapper>
				<Step>
					<Circle
						transition={{ duration: 1.2, delay: 1 }}
						ref={ref}
						animate={controls}
						initial="hidden"
						variants={circleVariants}
					/>
					<StepNumber aria-label="step 1">01</StepNumber>
					<StepTitle>Pick your coffee</StepTitle>
					<p>
						Select from our evolving range of artisan coffees. Our
						beans are ethically sourced and we pay fair prices for
						them. There are new coffees in all profiles every month
						for you to try out.
					</p>
				</Step>
				<Step>
					<Circle
						transition={{ duration: 1.2, delay: 2.2 }}
						ref={ref}
						animate={controls}
						initial="hidden"
						variants={circleVariants}
					/>
					<StepNumber aria-label="step 2">02</StepNumber>
					<StepTitle>Choose the frequency</StepTitle>
					<p>
						Customize your order frequency, quantity, even your
						roast style and grind type. Pause, skip or cancel your
						subscription with no commitment through our online
						portal.
					</p>
				</Step>
				<Step>
					<Circle
						transition={{ duration: 1.2, delay: 3.4 }}
						ref={ref}
						animate={controls}
						initial="hidden"
						variants={circleVariants}
					/>
					<StepNumber aria-label="step 3">03</StepNumber>
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
	background-image: url(${bgImageMobile});
	background-size: cover;
	border-radius: 10px;
	/* Stretch width to edge of viewport */
	margin-left: -6.9%;
	margin-right: -6.9%;
	padding: 80px 6.9%;

	@media ${BREAKPOINTS.tablet} {
		background-image: url(${bgImageTablet});
	}

	@media ${BREAKPOINTS.laptop} {
		margin: auto;
		padding: 96px 58px;
		background-image: url(${bgImageDesktop});
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

const Circle = styled(motion.div)`
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
