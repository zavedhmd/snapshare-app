import React from 'react';
import ReactDOM from 'react-dom'
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './router/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'))