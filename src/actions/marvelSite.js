// @flow
import axios from 'axios';
import md5 from 'js-md5';
import {
    API_LIMIT, 
    MARVEL_URL, 
    MARVEL_PUBLIC_API_KEY, 
    MARVEL_PRIVATE_API_KEY 
} from '../constants/api';

export const retrieveCharacters = (offset: number) => {
    const ts = getNumberOfTimestamp();
    const hash = createHash(ts);
    return axios.get(`${MARVEL_URL}/characters`, {
        params: {
            ts,
            hash,
            offset,
            orderBy: 'name',
            limit: API_LIMIT,
            apikey: MARVEL_PUBLIC_API_KEY
        }
    });
}

export const retrieveComics = (offset: number) => {
    const ts = getNumberOfTimestamp();
    const hash = createHash(ts);
    return axios.get(`${MARVEL_URL}/comics`, {
        params: {
            ts,
            hash,
            offset,
            limit: API_LIMIT,
            apikey: MARVEL_PUBLIC_API_KEY
        }
    });
}

const getNumberOfTimestamp = () => Number(new Date());
const createHash = (ts: number): number => md5(ts + MARVEL_PRIVATE_API_KEY + MARVEL_PUBLIC_API_KEY);
