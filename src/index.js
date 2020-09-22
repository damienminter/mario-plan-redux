import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// 1 import redux and imply middleware and compose
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
// 3 add provider level around our app
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// install below 2 packages to allow redux to work with firestore
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbconfig'

// 2 Need to add a root reducer
const store = createStore(rootReducer,
    // Use compose to add more than 1 middleware
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(fbConfig),
        reduxFirestore(fbConfig),
        )
    );

// 4. wrap with provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
