// @flow
import * as types from './actionTypes';
import * as marvelSite from './marvelSite';

export type ComicsAction = {
    type: string,
    comics?: Object
};

type Dispatch = (
    action: ComicsAction
) => any;

const retrieveComicsSuccess = (res: Object) => {
    return {
        type: types.RETRIEVE_COMICS_SUCCESS,
        comics: res.data.data.results
    }
}

export const retrieveComics = (offset: number) => {
    return (dispatch: Dispatch) => {
        return marvelSite.retrieveComics(offset)
                .then(res => {
                    dispatch(retrieveComicsSuccess(res));
                }).catch(error => {
                    console.error("retrieveComics Error:" + error);
                });
    };
}