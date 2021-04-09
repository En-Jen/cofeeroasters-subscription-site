import React from 'react';

import imgQualityDesktop from '../assets/about/desktop/image-quality.jpg';
import imgQualityTablet from '../assets/about/tablet/image-quality.jpg';
import imgQualityMobile from '../assets/about/mobile/image-quality.jpg';

function Quality() {
	return (
		<section>
			<img src={imgQualityMobile} alt="Latte" />
			<div>
				<h2>Uncompromising quality</h2>
				<p>
					Although we work with growers who pay close attention to all
					stages of harvest and processing, we employ, on our end, a
					rigorous quality control program to avoid over-roasting or
					baking the coffee dry. Every bag of coffee is tagged with a
					roast date and batch number. Our goal is to roast
					consistent, user-friendly coffee, so that brewing is easy
					and enjoyable.
				</p>
			</div>
		</section>
	);
}

export default Quality;
