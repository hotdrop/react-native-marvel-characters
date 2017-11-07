// @flow
import * as types from './actionTypes';
import * as marvelSite from './marvelSite';

export type CharactersAction = {
    type: string,
    characters: JSON
};

type Dispatch = (
    action: CharactersAction
) => any;

const retrieveCharactersSuccess = (res: Object) => {
    return {
        type: types.RETRIEVE_CHARACTERS_SUCCESS,
        characters: res.data.data.results
    };
}

export const retrieveCharacters = (offset: number) => {
    return (dispatch: Dispatch) => {
        return marvelSite.retrieveCharacters(offset)
                .then(res => {
                    dispatch(retrieveCharactersSuccess(res));
                }).catch(error => {
                    console.error("retrieveCharacters Error:" + error);
                });
    };
}
