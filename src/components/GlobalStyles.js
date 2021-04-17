import { createGlobalStyle } from 'styled-components/macro';

import { COLORS, FONTS, FONT_SIZES, BREAKPOINTS } from '../constants';

const GlobalStyles = createGlobalStyle`
    /* RESET from https://piccalil.li/blog/a-modern-css-reset */

    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    /* Remove list styles on ul, ol elements */
    ul,
    ol {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* GLOBAL STYLES */
    body {
        background-color: ${COLORS.lightCream[100]};
        font-family: ${FONTS.primary};
        font-size: 15px;
        line-height: 1.67;
        width: 88%;
        max-width: 1440px;
        margin: 0 auto;
        margin-bottom: 72px;
        /* overflow-x: hidden; */

        @media ${BREAKPOINTS.laptop} {
            font-size: ${FONT_SIZES.xs};
            line-height: 1.625;
        }

        @media ${BREAKPOINTS.desktop} {
            margin-bottom: 77px;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${FONTS.secondary};
    }

    h1 {
        line-height: 1;
    }

    a:focus, button:focus {
        outline: 2px dotted ${COLORS.lightCyan};
        outline-offset: 2px;
    }
`;

export default GlobalStyles;
