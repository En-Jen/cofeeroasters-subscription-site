export const COLORS = {
	darkCyan: 'hsl(179deg, 81%, 29%)',
	lightCyan: 'hsl(178deg, 55%, 61%)',
	paleOrange: 'hsl(25deg, 94%, 86%)',
	lightCream: {
		100: 'hsl(43deg, 78%, 98%)',
		300: 'hsl(43deg, 30%, 94%)',
	},
	grey: {
		300: 'hsl(25deg, 11%, 87%)', //Disabled btn background-color
		500: 'hsl(215deg, 5%, 54%)',
		700: 'hsl(215deg, 20%, 25%)',
		900: 'hsl(216deg, 17%, 21%)',
	},
	white: 'hsl(0deg, 0%, 100%)',
};

export const FONTS = {
	primary: "'Barlow', sans-serif",
	secondary: "'Fraunces', serif",
};

export const WEIGHTS = {
	regular: 400,
	bold: 700,
};

export const FONT_SIZES = {
	xxs: '0.75rem', //12px
	xs: '1rem', //16px
	s: '1.125rem', //18px
	m: '1.5rem', //24px
	l: '2rem', //32px
	xl: '2.5rem', //40px
	xxl: '3rem', //48px
	xxxl: '4.5rem', //72px
};

// Media queries
export const BREAKPOINT_SIZES = {
	mobileSmall: 320,
	mobile: 540,
	tablet: 768,
	laptop: 1024,
	desktop: 1200,
	desktopLarge: 1380,
};

export const BREAKPOINTS = {
	mobileSmall: `(min-width: ${BREAKPOINT_SIZES.mobileSmall}px)`,
	mobile: `(min-width: ${BREAKPOINT_SIZES.mobile}px)`,
	tablet: `(min-width: ${BREAKPOINT_SIZES.tablet}px)`,
	laptop: `(min-width: ${BREAKPOINT_SIZES.laptop}px)`,
	desktop: `(min-width: ${BREAKPOINT_SIZES.desktop}px)`,
	desktopLarge: `(min-width: ${BREAKPOINT_SIZES.desktopLarge}px)`,
};