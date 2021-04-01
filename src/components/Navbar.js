import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import logo from '../assets/shared/desktop/logo.svg';
import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';
import iconClose from '../assets/shared/mobile/icon-close.svg';

function Navbar() {
	return (
		<Nav>
			<Link exact to="/">
				<img src={logo} alt="coffeeroasters logo" />
			</Link>
			<List role="list">
				<li>
					<Link exact to="/">
						Home
					</Link>
				</li>
				<li>
					<Link exact to="/about">
						About us
					</Link>
				</li>
				<li>
					<Link exact to="/plan">
						Create your plan
					</Link>
				</li>
			</List>
		</Nav>
	);
}

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
`;

const List = styled.ul`
	display: flex;
`;

export default Navbar;
