import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import SkipLink from './components/SkipLink';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Plan from './pages/Plan';
import Attribution from './components/Attribution';

function App() {
	const location = useLocation();
	return (
		<>
			<SkipLink />
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route
						exact
						path="/plan"
						render={routeProps => <Plan {...routeProps} />}
					/>
				</Switch>
			</AnimatePresence>
			<Footer />
			<Attribution />
		</>
	);
}

export default App;
