import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, FONT_SIZES, FONTS, WEIGHTS, BREAKPOINTS } from '../constants';
import { questions } from '../data';

function Sidebar({ activeQuestion, setActiveQuestion }) {
	return (
		<Wrapper>
			<nav role="navigation" aria-label="Order Form Navigation">
				<ul>
					{questions.map((item, i) => {
                        const active = activeQuestion === i;
                        return (
                            <ListItem
                                key={i}
                                onClick={() => setActiveQuestion(i)}
                                active={active}
                            >
                                <Link href={`#question-${i + 1}`}>
                                    <Number active={active}>0{i + 1}</Number>
                                    <Title>{item.name}</Title>
                                </Link>
                            </ListItem>
                        );
                    })}
				</ul>
			</nav>
		</Wrapper>
	);
}

const Wrapper = styled.aside`
	display: none;

	@media ${BREAKPOINTS.laptop} {
		display: revert;
	}
`;

const ListItem = styled.li`
	font-size: ${FONT_SIZES.m};
	font-family: ${FONTS.secondary};
	font-weight: ${WEIGHTS.bold};
	line-height: 1.33;
    opacity: ${p => p.active ? '100%' : '40%'};
    padding: 24px 0;

    &:first-of-type {
        padding-top: 0;
    }

	&:not(:last-of-type) {
		border-bottom: 1px solid hsla(215deg, 5%, 54%, 0.25);
	}
`;

const Link = styled.a`
	text-decoration: none;
	display: grid;
	grid-template-columns: 35px 196px;
	gap: 24px;
`;

const Number = styled.span`
    color: ${p => p.active ? `${COLORS.darkCyan}` : `${COLORS.grey[500]}`};
`;

const Title = styled.span`
    color: ${COLORS.grey[700]};
`;

export default Sidebar;
