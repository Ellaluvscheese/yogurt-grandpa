import {getLogin} from './externalServices.mjs'

const tokenKey = 'so-token';

async function login(creds, redirect = '/') {
    try{
        let token = await getLogin(creds.login, creds.password);
        setLocalStorage(tokenKey, token);

        window.location = redirect;
    } catch (err){
        alertMessage(err.message.message);
    }

}
function isTokenValid(redirect = '/login') {
    let token = getLocalStorage(tokenKey)
    if (!token){
        return false;
    } else {
        window.location = redirect;
    }
} 
function checkLogin() {

}