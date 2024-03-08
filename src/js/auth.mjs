import {getLogin} from './externalServices.mjs'
import {setLocalStorage, getLocalStorage} from './utils.mjs'
import jwt_decode from "jwt-decode";

const tokenKey = 'so-token';

export async function login(creds, redirect = '/') {
    try{
        let token = await getLogin(creds.login, creds.password);
        setLocalStorage(tokenKey, token);

        window.location = redirect;
    } catch (err){
        alertMessage(err.message.message);
    }

}

function isTokenValid(token) {
    if (token){
        const decoded = jwt_decode(token);

        let currentDate = new Date();

        if (decoded.exp * 100 < currentDate.getTime()){
            return false;
        } else {
            return true;
        }
    } else {
        return false
    }
} 

export function checkLogin() {
    const token = getLocalStorage(tokenKey);

    const valid = isTokenValid(token);

    if (!valid){
        localStorage.removeItem(tokenKey);
        const location = window.location;

        window.location = `/login/index.html?redirect=${location.pathname}`;
    } else {
        return token;
    }
}