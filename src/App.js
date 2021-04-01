import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Plan from './pages/Plan';
import './App.css';

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/plan" component={Plan} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
