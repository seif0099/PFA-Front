import Cookies from "js-cookie"
import {decodeToken} from "react-jwt"
export const isUser=() =>{
    const token = Cookies.get("jwt")
    return decodeToken(token).typeUser === 'normal' ? true:false;
}