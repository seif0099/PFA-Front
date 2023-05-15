import Cookies from "js-cookie"
import { isExpired} from "react-jwt"

export const isAuth= () =>{
    const token = Cookies.get("jwt")
    return !isExpired(token)
}