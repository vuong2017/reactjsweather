import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducers from './Redux/Reducers';
import {RequestApiWeather} from './Redux/Actioncreators';
const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(RequestApiWeather());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
