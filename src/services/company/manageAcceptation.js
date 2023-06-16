import axios from "axios"
import Cookies from "js-cookie";
const baseURL = "http://127.0.0.1:8000/api";

export const accept = (id) =>{
    return new Promise((res,rej) =>{
        axios.patch(`${baseURL}/aceeptRefusePost?id=${id}`,{
            etat
        })
    })
}
export const refuse = () =>{
    
}