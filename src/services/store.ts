import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { socketMiddleware } from '../services/middleware';
import { WS_URL, WS_URL_AUTH } from '../constants/config';
import { wsActions } from './actions/ws';
import { wsActionsAuth } from './actions/ws-auth';


declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk,
	 socketMiddleware(WS_URL, wsActions, false), 
	 socketMiddleware(WS_URL_AUTH, wsActionsAuth, true))
);

export const store = createStore(rootReducer, enhancer);

