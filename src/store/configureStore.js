// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

import type { Characters } from '../reducers/initialState';

export default (initialState: Characters) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}