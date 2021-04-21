import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-scroll';

import { COLORS, FONT_SIZES, FONTS, WEIGHTS, BREAKPOINTS } from '../constants';
import { questions } from '../data';

function Sidebar({
	activeQuestion,
	setActiveQuestion,
	openAccordItems,
	setOpenAccordItems,
	orderSelections,
}) {
	function handleClick(e) {
		const index = parseInt(e.target.dataset.index, 10);
		
		// Open accordion panel that corresponds with nav li unless Capsule
		// is selected for first question, don't open grind option panel
		if (
			!openAccordItems.includes(index) &&
			orderSelections[0] !== 'Capsules'
		) {
			setOpenAccordItems([...openAccordItems, index].sort());
		}

		setActiveQuestion(index);
	}

	return (
		<Wrapper>
			<nav role="navigation" aria-label="Order Form Navigation">
				<ul>
					{questions.map((item, i) => {
						const active = activeQuestion === i;
						return (
							<ListItem key={i} active={active}>
								<Link
									to={`question-${i + 1}`}
									spy={true}
									smooth={true}
									duration={300}
									href={`#question-${i + 1}`}
									data-index={i}
									onClick={handleClick}
								>
									<Number
										active={active}
										data-index={i}
										aria-hidden="true"
									>
										0{i + 1}
									</Number>
									<Title data-index={i}>{item.name}</Title>
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
		height: min-content;
		position: -webkit-sticky;
		position: sticky;
		top: 24px;
	}
`;

const ListItem = styled.li`
	font-size: ${FONT_SIZES.m};
	font-family: ${FONTS.secondary};
	font-weight: ${WEIGHTS.bold};
	line-height: 1.33;
	opacity: ${p => (p.active ? '100%' : '40%')};
	padding: 24px 0;

	&:first-of-type {
		padding-top: 0;
	}

	&:not(:last-of-type) {
		border-bottom: 1px solid hsla(215deg, 5%, 54%, 0.25);
	}

	a {
		text-decoration: none;
		cursor: pointer;
		display: grid;
		grid-template-columns: 35px 196px;
		gap: 24px;
		transition: transform .2s;

		&:hover {
			transform: translateX(8px);
		}
	}
`;

const Number = styled.span`
	color: ${p => (p.active ? `${COLORS.darkCyan}` : `${COLORS.grey[500]}`)};
`;

const Title = styled.span`
	color: ${COLORS.grey[700]};
`;

export default Sidebar;
