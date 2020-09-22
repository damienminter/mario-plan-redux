import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// 1 import redux and imply middleware
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
// 3 add provider level around our app
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// 2 Need to add a root reducer
const store = createStore(rootReducer, applyMiddleware(thunk));

// 4. wrap with provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
