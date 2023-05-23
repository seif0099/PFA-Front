import Cookies from "js-cookie"
import {decodeToken} from "react-jwt"
export const isCompany=() =>{
    const token = Cookies.get("jwt")
    if (token)
    return decodeToken(token).typeUser === 'company' ? true:false;
    return false;
}