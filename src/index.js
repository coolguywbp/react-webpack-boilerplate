import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.sass';
import './img/favicon.ico';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
