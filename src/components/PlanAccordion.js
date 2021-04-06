import React from 'react';
import styled from 'styled-components/macro';
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
} from '@reach/accordion';
import '@reach/accordion/styles.css';

import { questions } from '../data';
import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';

function PlanAccordion() {
	const [indices, setIndices] = React.useState([0]);

	function toggleItem(toggledIndex) {
		if (indices.includes(toggledIndex)) {
			setIndices(
				indices.filter(currentIndex => currentIndex !== toggledIndex)
			);
		} else {
			setIndices([...indices, toggledIndex].sort());
		}
	}

	const renderedOrderOptions = questions.map((item, index) => {
		return (
			<OrderItem key={index}>
				<QuestionWrapper>
					<Question>
						<QuestionHeading>{item.question}</QuestionHeading>
						<ArrowIcon
							width="19"
							height="13"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
								fill="#0E8784"
								fill-rule="nonzero"
							/>
						</ArrowIcon>
					</Question>
				</QuestionWrapper>
				<AccordionPanel>
					<CardWrapper>
						{item.answers.map((option, index) => {
							return (
								<Card key={index}>
									<CardHeading>{option.title}</CardHeading>
									<p>{option.description}</p>
								</Card>
							);
						})}
					</CardWrapper>
				</AccordionPanel>
			</OrderItem>
		);
	});

	return (
		<Accordion index={indices} onChange={toggleItem} multiple>
			{renderedOrderOptions}
		</Accordion>
	);
}

const OrderItem = styled(AccordionItem)`
	/* margin-bottom: 96px; */
	&[data-reach-accordion-item][data-state='open'] {
		/* styles for all open accordion items */
	}
`;

const QuestionWrapper = styled.h3`
	width: 100%;
	margin-bottom: 32px;
`;

const Question = styled(AccordionButton)`
	background-color: transparent;
	border: none;
	cursor: pointer;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const QuestionHeading = styled.div`
	font-size: ${FONT_SIZES.m};
	line-height: 1.17;
	color: ${COLORS.grey[500]};
	text-align: left;
`;

const ArrowIcon = styled.svg`
	transition: transform 0.4s ease-in-out;

	/* ArrowIcons nested within open accordion items */
	[data-reach-accordion-item][data-state='open'] & {
		transform: rotate(180deg);
	}

	path {
		transition: fill 0.2s ease;
	}

	${QuestionWrapper}:hover & path {
		fill: ${COLORS.lightCyan};
	}
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Card = styled.button`
	background-color: ${COLORS.lightCream[300]};
	color: ${COLORS.grey[700]};
	padding: 24px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	text-align: left;
	transition: background-color 0.3s ease;

	&:not(:last-of-type) {
		margin-bottom: 16px;
	}

	&:last-of-type {
		margin-bottom: 96px;
	}

	&:hover {
		background-color: ${COLORS.paleOrange};
	}
`;

const CardHeading = styled.h4`
	font-size: ${FONT_SIZES.m};
	line-height: 1.33;
	margin-bottom: 8px;
`;

export default PlanAccordion;
