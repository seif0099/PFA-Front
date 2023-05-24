import Cookies from "js-cookie"
import { isExpired} from "react-jwt"

export const isAuth= () =>{
    const token = Cookies.get("jwt")
    if (token)
    return !isExpired(token)
    return false;
}