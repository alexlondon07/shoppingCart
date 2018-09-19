import { BASE_API, HTTP_USER } from './../config';
import HttpBase from '../http-base';

class HttpUser {

    async login(){
        try {
            const url  = `${ BASE_API }${ HTTP_USER.login }`
            const data = await HttpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpUser;