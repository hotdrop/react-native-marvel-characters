import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default configureStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}