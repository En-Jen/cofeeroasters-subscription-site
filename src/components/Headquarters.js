import React from 'react';

import { headquarters } from '../data';

function Headquarters() {
	return (
		<section>
			<h2>Our headquarters</h2>
			<div>
				{headquarters.map((location, i) => (
					<div key={i}>
						<img
							src={location.icon}
							alt={`${location.location} map icon`}
						/>
						<h3>{location.location}</h3>
						<div>
							<p>{location.information.street}</p>
							<p>{location.information.city}</p>
							<p>{location.information.state}</p>
							<p>{location.information.phone}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Headquarters;
