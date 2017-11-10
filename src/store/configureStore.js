// @flow

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

import type { State } from '../constants/types';

let middleware = [thunk];

export default (initialState: State) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}