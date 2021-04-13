import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';

function Card({ variant, img, alt, heading, description }) {
	let Component;
	if (variant === 'collection') {
		Component = CollectionCard;
	} else if (variant === 'choose') {
		Component = ChooseCard;
	} else {
		throw new Error(`Unrecognized Card variant: ${variant}`);
	}
	return (
		<Component>
			<Image src={img} alt={alt} />
			<div>
				<Heading>{heading}</Heading>
				<p>{description}</p>
			</div>
		</Component>
	);
}

const BaseCard = styled.div`
	text-align: center;
    display: grid;

    @media ${BREAKPOINTS.tablet} {
        grid-template-columns: repeat(2, auto);
        text-align: left;
        align-items: center;
    }

    @media ${BREAKPOINTS.laptop} {
        grid-template-columns: revert;
        text-align: center;
    }
`;

const CollectionCard = styled(BaseCard)`
	color: ${COLORS.grey[700]};
    gap: 24px;

    @media ${BREAKPOINTS.tablet} {
        gap: 36px;
    }
`;

const ChooseCard = styled(BaseCard)`
    gap: 56px;
	color: ${COLORS.lightCream[100]};
	background-color: ${COLORS.darkCyan};
	border-radius: 8px;
	padding: 72px 12px 48px;
	font-size: ${FONT_SIZES.xs};
	line-height: 1.625;

    @media ${BREAKPOINTS.tablet} {
        gap: 56px;
    }
`;

const Image = styled.img`
	margin: auto;

	${CollectionCard} & {
		width: 200px;
	}

    @media ${BREAKPOINTS.tablet} {
        ${CollectionCard} & {
            width: 256px;
        }
    }
`;

const Heading = styled.h3`
	font-size: ${FONT_SIZES.m};
	line-height: 1.33;

	${CollectionCard} & {
		margin-bottom: 16px;
	}

	${ChooseCard} & {
		margin-bottom: 24px;
	}
`;

export default Card;
