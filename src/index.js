import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './Container/App.js'
//corchetes porque ya no es un export default, devuelve mas de un objeto
import {robots} from './Robots';


ReactDOM.render( <App/>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
