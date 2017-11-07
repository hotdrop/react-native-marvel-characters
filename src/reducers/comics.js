// @flow
import * as types from '../actions/actionTypes';
import type { ComicsAction } from '../actions/comics';

type ComicsState = {
    items: Object
};

const initialState: ComicsState = {
    items: {}
};

export default function comics(state: ComicsState = initialState, action: ComicsAction) {
    switch (action.type) {
        case types.RETRIEVE_COMICS_SUCCESS:
            return {
                ...state,
                items: action.comics
            };
        default:
            return state;
    }
}