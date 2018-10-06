import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faAngleleft } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faAngleleft);

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

ReactDOM.render(<BrowserRouter basename="/neighborhood-map/"><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
