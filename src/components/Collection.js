import React from 'react';

import { collection } from '../data';
import Card from './Card';

function Collection() {
	return (
		<section>
			<h2>our collection</h2>
			<div>
				{collection.map((item, i) => (
					<Card
                        variant="collection"
						img={item.image}
						alt={`${item.heading} coffee bag`}
						heading={item.heading}
                        description={item.description}
					/>
				))}
			</div>
		</section>
	);
}

export default Collection;
