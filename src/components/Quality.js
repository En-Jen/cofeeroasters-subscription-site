import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';
import imgQualityDesktop from '../assets/about/desktop/image-quality.jpg';
import imgQualityTablet from '../assets/about/tablet/image-quality.jpg';
import imgQualityMobile from '../assets/about/mobile/image-quality.jpg';
import bgDesktop from '../assets/about/desktop/bg-quality.png';
import bgTablet from '../assets/about/tablet/bg-quality.png';
import bgMobile from '../assets/about/mobile/bg-quality.png';

function Quality() {
	return (
		<Wrapper aria-label="quality">
            <ContentWrapper>
                <Picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={`${imgQualityDesktop} 445w`}
                    />
                    <source
                        media="(min-width: 680px)"
                        srcSet={`${imgQualityTablet} 573w`}
                    />
                    <source srcSet={`${imgQualityMobile} 558w`} />
                    <Image src={imgQualityMobile} alt="Latte" />
                </Picture>
                <TextWrapper>
                    <Heading>Uncompromising quality</Heading>
                    <Paragraph>
                        Although we work with growers who pay close attention to all
                        stages of harvest and processing, we employ, on our end, a
                        rigorous quality control program to avoid over-roasting or
                        baking the coffee dry. Every bag of coffee is tagged with a
                        roast date and batch number. Our goal is to roast
                        consistent, user-friendly coffee, so that brewing is easy
                        and enjoyable.
                    </Paragraph>
                </TextWrapper>
            </ContentWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background-image: url(${bgMobile});
	background-size: cover;
	border-radius: 10px;
	padding: 24px;
	padding-bottom: 61px;

	@media ${BREAKPOINTS.tablet} {
		background-image: url(${bgTablet});
		padding: 58px;
		padding-bottom: 67px;
	}

	@media ${BREAKPOINTS.laptop} {
		background-image: url(${bgDesktop});
		padding: 85px;
	}
`;

const ContentWrapper = styled.div`
    @media ${BREAKPOINTS.laptop} {
        display: flex;
		flex-direction: row-reverse;
		align-items: center;
    }

    @media ${BREAKPOINTS.desktop} {
		align-items: flex-start;
    }
`;

const Picture = styled.picture`
	margin-bottom: 64px;
	height: auto;
    // Percent equals width of Picture, so to pull picture
    // up by half its height I needed to calculate  half the
    // height of the picture as a percentage of it's width.
    // Then subtract 24px of padding.
	margin-top: calc(-27.96% - 24px);

	@media ${BREAKPOINTS.tablet} {
        // Same calculation done here except now subtract 58px
        // of padding
		margin-top: calc(-27.92% - 58px);
	}

	@media ${BREAKPOINTS.laptop} {
        margin: 0;
        margin-left: 88px;
        flex: .82;
	}

    @media ${BREAKPOINTS.desktop} {
        margin-left: 125px;
        margin-top: -170px;
	}
`;

const Image = styled.img`
	border-radius: 8px;
`;

const TextWrapper = styled.div`
	text-align: center;
	color: ${COLORS.lightCream[100]};

    @media ${BREAKPOINTS.laptop} {
		text-align: left;
        flex: 1;
	}
`;

const Heading = styled.h2`
	font-size: 28px;
	line-height: 1;
	margin-bottom: 24px;

	@media ${BREAKPOINTS.tablet} {
		font-size: ${FONT_SIZES.l};
		line-height: 1.5;
	}

    @media ${BREAKPOINTS.desktop} {
		font-size: ${FONT_SIZES.xl};
		line-height: 1.2;
	}
`;

const Paragraph = styled.p`
	opacity: 80%;
`;

export default Quality;
