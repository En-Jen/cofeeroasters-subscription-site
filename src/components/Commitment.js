import React from 'react';

import imgCommitmentDesktop from '../assets/about/desktop/image-commitment.jpg';
import imgCommitmentTablet from '../assets/about/tablet/image-commitment.jpg';
import imgCommitmentMobile from '../assets/about/mobile/image-commitment.jpg';

function Commitment() {
    return (
        <section>
            <img
                // TODO!!!!!!!!
                src={imgCommitmentTablet}
                srcSet={`${imgCommitmentMobile} 654w,
                        ${imgCommitmentTablet} 281w,
                        ${imgCommitmentDesktop} 445w`}
                sizes="(min-width: 768px) 36.5vw,
                        (min-width: 1024px) 30.9vw,
                        88vw"
                alt="Barista"
            />
            <div>
                <h2>Our commitment</h2>
                <p>
                    We’re built on a simple mission and a commitment to
                    doing good along the way. We want to make it easy for
                    you to discover and brew the world’s best coffee at
                    home. It all starts at the source. To locate the
                    specific lots we want to purchase, we travel nearly 60
                    days a year trying to understand the challenges and
                    opportunities in each of these places. We collaborate
                    with exceptional coffee growers and empower a global
                    community of farmers through with well above fair-trade
                    benchmarks. We also offer training, support farm
                    community initiatives, and invest in coffee plant
                    science. Curating only the finest blends, we roast each
                    lot to highlight tasting profiles distinctive to their
                    native growing region.
                </p>
            </div>
        </section>
    )
}

export default Commitment
