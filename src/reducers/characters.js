// @flow
import * as types from '../actions/actionTypes';
import type { CharactersAction } from '../actions/characters';

type CharactersState = {
    items: Object
};

const initialState: CharactersState = {
    items: {}
};

export default function characters(state: CharactersState = initialState, action: CharactersAction) {
    switch (action.type) {
        case types.RETRIEVE_CHARACTERS_SUCCESS:
            return {
                ...state,
                items: action.characters
            };
        default:
            return state;
    }
}