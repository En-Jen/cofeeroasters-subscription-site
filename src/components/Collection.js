import React from 'react';
import styled from 'styled-components/macro';

import { FONT_SIZES, BREAKPOINTS } from '../constants';
import { collection } from '../data';
import Card from './Card';

function Collection() {
	return (
		<Wrapper aria-label="our collection of blends">
			<Heading>our collection</Heading>
			<CardsWrapper>
				{collection.map((item, i) => (
					<Card
						key={i}
						variant="collection"
						img={item.image}
						alt={`${item.heading} coffee bag`}
						heading={item.heading}
						description={item.description}
					/>
				))}
			</CardsWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	padding: 0 22.5px;
	text-align: center;

	@media ${BREAKPOINTS.tablet} {
		padding: 0;
	}

	@media ${BREAKPOINTS.desktop} {
		padding: 0 84.5px;
	}
`;

const Heading = styled.h2`
	display: inline-block;
	background-image: linear-gradient(
		to bottom,
		hsl(0deg, 0%, 59%, 0.6),
		hsl(0deg, 0%, 59%, 0.01)
	);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	margin-bottom: 32px;
	font-size: ${FONT_SIZES.m};
	font-size: 9vw;
	line-height: .8;

	@media (min-width: 375px) {
		font-size: ${FONT_SIZES.xl};
		font-size: 11vw;
	}

	@media ${BREAKPOINTS.tablet} {
		font-size: 6rem;
		font-size: 12.5vw;
		margin-bottom: 0;
		transform: translateY(37%);
		position: relative;
		z-index: -1;
	}

	@media ${BREAKPOINTS.desktop} {
		font-size: 8rem;
		font-size: 10.7vw;
	}

	@media (min-width: 1640px) {
		font-size: 11rem;
	}
`;

const CardsWrapper = styled.div`
	display: grid;
	gap: 48px;

	@media ${BREAKPOINTS.tablet} {
		gap: 32px;
		padding: 0 58px;
	}

	@media ${BREAKPOINTS.laptop} {
		gap: 30px;
		align-items: start;
		padding: 0;
		grid-template-columns: repeat(4, 1fr);
	}
`;

export default Collection;
