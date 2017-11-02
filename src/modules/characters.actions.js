import axios from 'axios';
import * as types from '../constants/actionTypes';

import md5 from 'js-md5';
import { MARVEL_URL, MARVEL_PUBLIC_API_KEY, MARVEL_PRIVATE_API_KEY } from '../constants/api';

const API_LIMIT = 30;

export function retrieveCharactersSuccess(res) {
    return {
        type: types.RETRIEVE_CHARACTERS_SUCCESS,
        characters: res.data.data.results
    };
}

export function retrieveCharacters(offsetNum) {
    return function (dispatch) {
        const timestamp = Number(new Date());
        const nowHash = md5(timestamp + MARVEL_PRIVATE_API_KEY + MARVEL_PUBLIC_API_KEY);
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
        .catch((error) => {
            console.error("actions-retrieveCharacters Error:" + error);
        });
    };
}