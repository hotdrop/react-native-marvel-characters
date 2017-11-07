// @flow
import * as types from './actionTypes';
import * as marvelSite from './marvelSite';

export type CharactersAction = {
    type: string,
    characters: JSON
};

export type Dispatch = (
    action: CharactersAction
) => any;

const retrieveCharactersSuccess = (res: Object): CharactersAction => {
    return {
        type: types.RETRIEVE_CHARACTERS_SUCCESS,
        characters: res.data.data.results
    };
}

export const retrieveCharacters = (offsetNum: number): Object => {
    return (dispatch: Dispatch) => {
        return marvelSite.retrieveCharacters(offsetNum)
                .then(res => {
                    dispatch(retrieveCharactersSuccess(res));
                }).catch(error => {
                    console.error("retrieveCharacters Error:" + error);
                });
    };
}
