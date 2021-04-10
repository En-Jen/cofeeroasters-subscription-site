import ukIcon from './assets/about/desktop/illustration-uk.svg';
import canadaIcon from './assets/about/desktop/illustration-canada.svg';
import australiaIcon from './assets/about/desktop/illustration-australia.svg';

export const questions = [
	{
		question: 'How do you drink your coffee?',
		answers: [
			{
				title: 'Capsule',
				description:
					'Compatible with Nespresso systems and similar brewers',
			},
			{
				title: 'Filter',
				description:
					'For pour over or drip methods like Aeropress, Chemex, and V60',
			},
			{
				title: 'Espresso',
				description:
					'Dense and finely ground beans for an intense, flavorful experience',
			},
		],
		answer: '',
	},
	{
		question: 'What type of coffee?',
		answers: [
			{
				title: 'Single Origin',
				description:
					'Distinct, high quality coffee from a specific family-owned farm',
			},
			{
				title: 'Decaf',
				description:
					'Just like regular coffee, except the caffeine has been removed',
			},
			{
				title: 'Blended',
				description:
					'Combination of two or three dark roasted beans of organic coffees',
			},
		],
		answer: '',
	},
	{
		question: 'How much would you like?',
		answers: [
			{
				title: '250g',
				description:
					'Perfect for the solo drinker. Yields about 12 delicious cups.',
			},
			{
				title: '500g',
				description:
					'Perfect option for a couple. Yields about 40 delectable cups.',
			},
			{
				title: '1000g',
				description:
					'Perfect for offices and events. Yields about 90 delightful cups.',
			},
		],
		answer: '',
	},
	{
		question: 'Want us to grind them?',
		answers: [
			{
				title: 'Wholebean',
				description:
					'Best choice if you cherish the full sensory experience',
			},
			{
				title: 'Filter',
				description:
					'For drip or pour-over coffee methods such as V60 or Aeropress',
			},
			{
				title: 'Cafetiére',
				description:
					'Course ground beans specially suited for french press coffee',
			},
		],
		answer: '',
	},
	{
		question: 'How often should we deliver?',
		answers: [
			{
				title: 'Every week',
				description:
					'$7.20 per shipment. Includes free first-class shipping.',
			},
			{
				title: 'Every 2 weeks',
				description:
					'$9.60 per shipment. Includes free priority shipping.',
			},
			{
				title: 'Every month',
				description:
					'$12.00 per shipment. Includes free priority shipping.',
			},
		],
		answer: '',
	},
];

export const headquarters = [
	{
		icon: ukIcon,
		location: 'United Kingdom',
		information: {
			street: '68 Ashfordby Rd',
			city: 'Alcaston',
			state: 'SY6 1YA',
			phone: '+44 1241 918425',
		},
	},
	{
		icon: canadaIcon,
		location: 'Canada',
		information: {
			street: '1529 Eglington Avenue',
			city: 'Toronto',
			state: 'Ontario M4P 1A6',
			phone: '+1 416 485 2997',
		},
	},
	{
		icon: australiaIcon,
		location: 'Australia',
		information: {
			street: '36 Swanston Street',
			city: 'Kewell',
			state: 'Victoria',
			phone: '+61 4 9928 3629',
		},
	},
];
