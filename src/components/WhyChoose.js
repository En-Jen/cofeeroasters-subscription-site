import React from 'react';
import styled from 'styled-components/macro';

import { whyChoose } from '../data';
import Card from './Card';

function Collection() {
	return (
		<section>
			<Heading>Why choose us?</Heading>
			<p>
				A large part of our role is choosing which particular coffees
				will be featured in our range. This means working closely with
				the best coffee growers to give you a more impactful experience
				on every level.
			</p>
			<div>
				{whyChoose.map((item, i) => (
					<Card
						key={i}
						variant="choose"
						img={item.image}
						alt={item.alt}
						heading={item.heading}
						description={item.description}
					/>
				))}
			</div>
		</section>
	);
}

const Heading = styled.h2`
	
`;

export default Collection;
