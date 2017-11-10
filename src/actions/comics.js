// @flow
import * as types from './actionTypes';
import * as marvelSite from './marvelSite';

import type { AxiosPromise } from 'axios';
import type { Comic, ComicsResponse } from '../constants/types';

const retrieveComicsSuccess = (res: ComicsResponse) => {
    return {
        type: types.RETRIEVE_COMICS_SUCCESS,
        comics: res.data.data.results
    }
}

export const retrieveComics = (offset: number) => {
    return (dispatch: Dispatch): AxiosPromise<any> => {
        return marvelSite.retrieveComics(offset)
                .then(res => {
                    dispatch(retrieveComicsSuccess(res));
                }).catch(error => {
                    console.error("retrieveComics Error:" + error);
                });
    };
}