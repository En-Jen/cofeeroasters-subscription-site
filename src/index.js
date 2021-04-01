import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyles from './components/GlobalStyles';

ReactDOM.render(
	<BrowserRouter>
		<App />
		<GlobalStyles />
	</BrowserRouter>,
	document.getElementById('root')
);
