import axios from 'axios';
import * as types from '../constants/actionTypes';

import md5 from 'js-md5';
import { MARVEL_URL } from '../constants/api';

export function retrieveCharactersSuccess(res) {
    return {
        type: types.RETRIEVE_CHARACTERS_SUCCESS,
        characters: res.data
    };
}

export function retrieveCharacters() {
    return function (dispatch) {
        return axios.get(`${MARVEL_URL}/companies`, {
            params: {
              fromDateEpoch: 0
            }
          })
          .then(res => {
            dispatch(retrieveCharactersSuccess(res));
          })
          .catch((error) => {
            console.error(error);
          });
    };
}