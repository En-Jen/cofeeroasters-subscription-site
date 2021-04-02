import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/shared/desktop/logo.svg';

const Logo = () => {
  return (
    <Link exact to="/">
        <img src={logo} alt="coffeeroasters logo" />
    </Link>
  );
};

export default Logo;