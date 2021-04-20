import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SkipLink from './components/SkipLink';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Plan from './pages/Plan';
import Attribution from './components/Attribution';

function App() {
	return (
		<>
			<SkipLink />
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route
					exact
					path="/plan"
					render={routeProps => <Plan {...routeProps} />}
				/>
			</Switch>
			<Footer />
			<Attribution />
		</>
	);
}

export default App;
