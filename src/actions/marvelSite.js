// @flow
import axios from 'axios';
import md5 from 'js-md5';
import { 
    MARVEL_URL, 
    API_LIMIT, 
    MARVEL_PUBLIC_API_KEY, 
    MARVEL_PRIVATE_API_KEY 
} from '../constants/api';

export const retrieveCharacters = (offset: number) => {
    const timestamp = Number(new Date());
    const hash = createHash(timestamp);
    return axios.get(`${MARVEL_URL}/characters`, {
        params: {
            ts: timestamp,
            orderBy: 'name',
            limit: API_LIMIT,
            hash: hash,
            offset: offset,
            apikey: MARVEL_PUBLIC_API_KEY
        }
    });
}

export const retrieveComics = (offset: number) => {
    const timestamp = Number(new Date());
    const hash = createHash(timestamp);
    return axios.get(`${MARVEL_URL}/comics`, {
        params: {
            ts: timestamp,
            limit: API_LIMIT,
            hash: hash,
            offset: offset,
            apikey: MARVEL_PUBLIC_API_KEY
        }
    });
}

const createHash = (timestamp: number) => {
    return md5(timestamp + MARVEL_PRIVATE_API_KEY + MARVEL_PUBLIC_API_KEY);
}