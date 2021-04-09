import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';
import imgCommitmentDesktop from '../assets/about/desktop/image-commitment.jpg';
import imgCommitmentTablet from '../assets/about/tablet/image-commitment.jpg';
import imgCommitmentMobile from '../assets/about/mobile/image-commitment.jpg';

function Commitment() {
	return (
		<Wrapper>
			<Image
				src={imgCommitmentTablet}
				srcSet={`${imgCommitmentMobile} 654w,
                        ${imgCommitmentTablet} 281w,
                        ${imgCommitmentDesktop} 445w`}
				sizes="(min-width: 768px) 36.5vw,
                        (min-width: 1024px) 30.9vw,
                        88vw"
				alt="Barista"
			/>
			<ContentWrapper>
				<Heading>Our commitment</Heading>
				<Paragraph>
					We’re built on a simple mission and a commitment to doing
					good along the way. We want to make it easy for you to
					discover and brew the world’s best coffee at home. It all
					starts at the source. To locate the specific lots we want to
					purchase, we travel nearly 60 days a year trying to
					understand the challenges and opportunities in each of these
					places. We collaborate with exceptional coffee growers and
					empower a global community of farmers through with well
					above fair-trade benchmarks. We also offer training, support
					farm community initiatives, and invest in coffee plant
					science. Curating only the finest blends, we roast each lot
					to highlight tasting profiles distinctive to their native
					growing region.
				</Paragraph>
			</ContentWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	@media ${BREAKPOINTS.tablet} {
		display: flex;
		align-items: center;
	}

	@media ${BREAKPOINTS.desktop} {
		padding: 0 85px;
	}
`;

const Image = styled.img`
	border-radius: 8px;
	margin-bottom: 48px;
	height: auto;

	@media ${BREAKPOINTS.tablet} {
		margin-bottom: 0;
		margin-right: 69px;
	}

	@media ${BREAKPOINTS.desktop} {
		margin-bottom: 0;
		margin-right: 125px;
        width: 40.5%;
	}
`;

const ContentWrapper = styled.div`
	text-align: center;
	color: ${COLORS.grey[700]};

	@media ${BREAKPOINTS.tablet} {
		text-align: left;
	}
`;

const Heading = styled.h2`
	font-size: ${FONT_SIZES.l};
	line-height: 1.5;
	margin-bottom: 30px;
`;

const Paragraph = styled.p`
	opacity: 80%;
`;

export default Commitment;
