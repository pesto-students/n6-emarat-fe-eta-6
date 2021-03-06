import React from 'react';
import ReactDOM from 'react-dom';
import initSentry from 'config/initSentry';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { listenUserAuthState } from 'lib/firebaseAuth';

if (process.env.NODE_ENV === 'development') {
	// eslint-disable-next-line global-require
	// const { worker } = require('mocks/browser');
	// worker.start();
} else {
	initSentry();
}

listenUserAuthState();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
