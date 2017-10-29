import axios from 'axios';
import * as types from '../constants/actionTypes';
import { MY_API_URL } from '../constants/api';

export function retrieveItemsSuccess(res) {
    return {
        type: types.RETRIEVE_ITEMS_SUCCESS,
        companies: res.data
    };
}

export function retrieveItems() {
    return function (dispatch) {
        return axios.get(`${MY_API_URL}`, {
            params: {
              fromDateEpoch: 0
            }
          })
          .then(res => {
            dispatch(retrieveItemsSuccess(res));
          })
          .catch((error) => {
            console.error(error);
          });
    };
}