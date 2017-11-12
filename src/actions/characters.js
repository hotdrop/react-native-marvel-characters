// @flow
import * as types from './actionTypes';
import * as marvelSite from './marvelSite';

import type { AxiosPromise } from 'axios';
import type { Character, CharactersResponse } from '../constants/types';

const retrieveCharactersSuccess = (res: CharactersResponse) => {
    return {
        type: types.RETRIEVE_CHARACTERS_SUCCESS,
        characters: res.data.data.results
    };
}

export const retrieveCharacters = (offset: number) => {
    return (dispatch: Dispatch): AxiosPromise<any> => {
        return marvelSite.retrieveCharacters(offset)
                .then(res => {
                    dispatch(retrieveCharactersSuccess(res));
                }).catch(error => {
                    console.error("retrieveCharacters Error:" + error);
                });
    };
}
