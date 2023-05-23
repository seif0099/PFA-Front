import Cookies from "js-cookie"
import {decodeToken} from "react-jwt"
export const isCompany=() =>{
    const token = Cookies.get("jwt")
    return decodeToken(token).typeUser === 'company' ? true:false;
}