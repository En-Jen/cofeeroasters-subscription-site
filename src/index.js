import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import App from './App';
import GlobalStyles from './components/GlobalStyles';

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
		<GlobalStyles />
	</BrowserRouter>,
	document.getElementById('root')
);
