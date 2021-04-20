import React from 'react';
import styled from 'styled-components/macro';

import { headquarters } from '../data';
import { COLORS, FONT_SIZES, BREAKPOINTS } from '../constants';

function Headquarters() {
	return (
		<Wrapper aria-label="headquarters">
			<SectionHeading>Our headquarters</SectionHeading>
			<ContentWrapper>
				{headquarters.map((location, i) => (
					<Location key={i}>
						<Icon
							src={location.icon}
							alt={`${location.location} map`}
						/>
						<LocationHeading>{location.location}</LocationHeading>
						<div>
							<div
								aria-label={`${location.location} headquarters address`}
							>
								<ContactInfo>
									{location.information.street}
								</ContactInfo>
								<ContactInfo>
									{location.information.city}
								</ContactInfo>
								<ContactInfo>
									{location.information.state}
								</ContactInfo>
							</div>
							<ContactInfo aria-label="phone number">
								{location.information.phone}
							</ContactInfo>
						</div>
					</Location>
				))}
			</ContentWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	text-align: center;

	@media ${BREAKPOINTS.tablet} {
		text-align: left;
	}

	@media ${BREAKPOINTS.laptop} {
		padding: 0 85px;
	}
`;

const SectionHeading = styled.h2`
	font-size: ${FONT_SIZES.m};
	line-height: 1.33;
	color: ${COLORS.grey[500]};
	margin-bottom: 72px;
`;

const ContentWrapper = styled.div`
	display: grid;
	gap: 80px;

	@media ${BREAKPOINTS.tablet} {
		grid-template-columns: repeat(3, auto);
		gap: 20px;
	}

	@media ${BREAKPOINTS.desktop} {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Location = styled.div`
	color: ${COLORS.grey[700]};
`;

const Icon = styled.img`
	margin: auto;
	margin-bottom: 48px;

	@media ${BREAKPOINTS.tablet} {
		margin: revert;
		margin-bottom: 48px;
	}
`;

const LocationHeading = styled.h3`
	font-size: 1.75rem;
	line-height: 1.29;
	margin-bottom: 22px;

	@media ${BREAKPOINTS.tablet} {
		font-size: ${BREAKPOINTS.m};
		line-height: 1.5;
	}

	@media ${BREAKPOINTS.desktop} {
		font-size: ${BREAKPOINTS.l};
		line-height: 1.125;
	}
`;

const ContactInfo = styled.p`
	font-size: ${FONT_SIZES.xs};
	line-height: 1.625;
`;

export default Headquarters;
