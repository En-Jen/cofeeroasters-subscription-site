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

function PlanAccordion({
	orderSelections,
	setOrderSelections,
	pricePerShipment,
	openAccordItems,
	setOpenAccordItems,
}) {
	// Toggle which accordion questions are set to open
	function toggleItem(toggledIndex) {
		if (openAccordItems.includes(toggledIndex)) {
			setOpenAccordItems(
				openAccordItems.filter(
					currentIndex => currentIndex !== toggledIndex
				)
			);
		} else {
			setOpenAccordItems([...openAccordItems, toggledIndex].sort());
		}
	}

	function handleOrderSelection(selection, itemIndex, optionIndex) {
		const newSelections = orderSelections.map((item, i) => {
			if (i === itemIndex) {
				return selection;
			}
			return item;
		});
		setOrderSelections(newSelections);

		// Close Accordion panel for "Want us to grind them?" if "Capsule" is selected
		// and panel is already open for grind question
		if (
			itemIndex === 0 &&
			optionIndex === 0 &&
			openAccordItems.includes(3)
		) {
			setOpenAccordItems(
				openAccordItems.filter(currentIndex => currentIndex !== 3)
			);
		}
	}

	const renderedOrderOptions = questions.map((item, itemIndex) => {
		// If Capsule is chosen, disable "Want us to grind them?" question
		const disabled = orderSelections[0] === 'Capsule' && itemIndex === 3;
		return (
			<AccordionItem
				key={itemIndex}
				id={`question-${itemIndex + 1}`}
				disabled={disabled}
			>
				<QuestionWrapper>
					<Question>
						<QuestionHeading disabled={disabled}>
							{item.question}
						</QuestionHeading>
						<ArrowIcon
							width="19"
							height="13"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
								fill="#0E8784"
								fillRule="nonzero"
								disabled={disabled}
							/>
						</ArrowIcon>
					</Question>
				</QuestionWrapper>
				<AccordionPanel>
					<CardsWrapper aria-label={`${item.name} options`}>
						{item.answers.map((option, optionIndex) => {
							const { title, frequency, description } = option;
							return (
								<Card
									key={optionIndex}
									onClick={() =>
										handleOrderSelection(
											title,
											itemIndex,
											optionIndex
										)
									}
									selected={
										orderSelections[itemIndex] === title
									}
									aria-label={title}
								>
									<CardHeading>{title}</CardHeading>
									{/* Access price per shipment if it is the last question */}
									<p>
										{itemIndex === 4
											? `$${pricePerShipment[
													frequency
											  ].toFixed(2)} ${description}`
											: description}
									</p>
								</Card>
							);
						})}
					</CardsWrapper>
				</AccordionPanel>
			</AccordionItem>
		);
	});

	return (
		<Accordion index={openAccordItems} onChange={toggleItem}>
			{renderedOrderOptions}
		</Accordion>
	);
}

const QuestionWrapper = styled.h3`
	width: 100%;
	margin-bottom: 32px;

	@media ${BREAKPOINTS.tablet} {
		margin-bottom: 40px;
	}

	@media ${BREAKPOINTS.desktop} {
		margin-bottom: 56px;
	}
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
	color: ${p => (p.disabled ? COLORS.grey[300] : COLORS.grey[500])};
	text-align: left;

	@media ${BREAKPOINTS.tablet} {
		font-size: ${FONT_SIZES.l};
		line-height: 1.5;
	}

	@media ${BREAKPOINTS.desktop} {
		font-size: ${FONT_SIZES.xl};
		line-height: 1.2;
	}
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

const CardsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 96px;

	@media ${BREAKPOINTS.tablet} {
		flex-direction: row;
	}

	@media ${BREAKPOINTS.tablet} {
		margin-bottom: 88px;
	}
`;

const Card = styled.button`
	background-color: ${p =>
		p.selected ? COLORS.darkCyan : COLORS.lightCream[300]};
	color: ${p => (p.selected ? COLORS.white : COLORS.grey[700])};
	padding: 24px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	text-align: left;
	transition: background-color 0.3s ease;

	@media ${BREAKPOINTS.tablet} {
		padding: 32px 28px 84px 28px;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	&:not(:last-of-type) {
		margin-bottom: 16px;

		@media ${BREAKPOINTS.tablet} {
			margin-bottom: 0;
			margin-right: 10px;
		}

		@media ${BREAKPOINTS.desktop} {
			margin-right: 23px;
		}
	}

	&:hover {
		background-color: ${p =>
			p.selected ? COLORS.darkCyan : COLORS.paleOrange};
	}
`;

const CardHeading = styled.h4`
	font-size: ${FONT_SIZES.m};
	line-height: 1.33;
	margin-bottom: 8px;
`;

export default PlanAccordion;
