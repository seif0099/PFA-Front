import Cookies from "js-cookie"
import { isExpired,decodeToken} from "react-jwt"

export const isAuth= () =>{
    const token = Cookies.get("jwt")
    console.log(isExpired(token))
    return !isExpired(token)
}
export const isUser=() =>{
    const token = Cookies.get("jwt")
    return decodeToken(token).typeUser === 'normal' ? true:false;
}