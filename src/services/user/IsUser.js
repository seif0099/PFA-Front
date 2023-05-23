import Cookies from "js-cookie"
import {decodeToken} from "react-jwt"
export const isUser=() =>{
    const token = Cookies.get("jwt")
    if(token)
    return decodeToken(token).typeUser === 'normal' ? true:false;
    return false;
}