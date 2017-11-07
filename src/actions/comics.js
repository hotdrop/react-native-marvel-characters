// @flow
import axios from 'axios';
import * as types from './actionTypes';
import md5 from 'js-md5';
import { MARVEL_URL } from '../constants/api';

export type ComicsAction = {
    type: string,
    comics: JSON
};

export type ComicsDispatch = (
    action: ComicsAction
) => any;

const retrieveComicsSuccess = (res: Object): ComicsAction => {
    return {
        type: types.RETRIEVE_COMICS_SUCCESS,
        comics: res.data.data.results
    }
}