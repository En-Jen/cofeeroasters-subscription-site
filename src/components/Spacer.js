// Borrowed from https://www.joshwcomeau.com/react/modern-spacer-gif/
// Used to create space between components

import styled from 'styled-components/macro';

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}

function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;
export default Spacer;