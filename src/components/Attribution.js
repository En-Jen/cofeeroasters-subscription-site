import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONT_SIZES } from '../constants';

function Attribution() {
	return (
		<Wrapper>
			Challenge by{' '}
			<Link
				href="https://www.frontendmentor.io/solutions"
				target="_blank"
			>
				Frontend Mentor
			</Link>
			. Coded by{' '}
			<Link href="https://github.com/En-Jen" target="_blank">
				Jen Speak
			</Link>
			.
		</Wrapper>
	);
}

const Wrapper = styled.div`
    font-size: ${FONT_SIZES.xxs};
    text-align: center;
    color: ${COLORS.grey[700]};
`;

const Link = styled.a`
    color: ${COLORS.darkCyan};
    transition: color .3s;

    &:hover {
        color: ${COLORS.lightCyan};
    }
`;

export default Attribution;
