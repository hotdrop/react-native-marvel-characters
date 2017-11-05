// @flow
import axios from 'axios';
import * as types from '../constants/actionTypes';

import md5 from 'js-md5';
import { MARVEL_URL, MARVEL_PUBLIC_API_KEY, MARVEL_PRIVATE_API_KEY } from '../constants/api';

export type Action = {
    type: string,
    characters: JSON
};

export type Dispatch = (
    action: Action
) => any;

const API_LIMIT = 30;

const retrieveCharactersSuccess = (res: Object): Action => {
    return {
        type: types.RETRIEVE_CHARACTERS_SUCCESS,
        characters: res.data.data.results
    };
}

export const retrieveCharacters = (offsetNum: number): Object => {
    return (dispatch: Dispatch) => {
        const timestamp = Number(new Date());
        const nowHash: string = md5(timestamp + MARVEL_PRIVATE_API_KEY + MARVEL_PUBLIC_API_KEY);
        return axios.get(`${MARVEL_URL}/characters`, {
            params: {
                ts: timestamp,
                orderBy: 'name',
                limit: API_LIMIT,
                hash: nowHash,
                offset: offsetNum,
                apikey: MARVEL_PUBLIC_API_KEY
            }
        })
        .then(res => {
            dispatch(retrieveCharactersSuccess(res));
        })
        .catch(error => {
            console.error("actions-retrieveCharacters Error:" + error);
        });
    };
}