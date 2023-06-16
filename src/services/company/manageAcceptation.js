import axios from "axios"
import Cookies from "js-cookie";
const baseURL = "http://127.0.0.1:8000/api";

export const accept = (offre,user) =>{
    return new Promise((res,rej) =>{
        axios.patch(`${baseURL}/aceeptRefusePost?offre=${offre}&user=${user}`,{},{
            headers:{
                Authorization:Cookies.get("jwt")
            }
        }).then(response=>res(response)).catch(err=>rej(err))
    })
}
export const refuse = (offre,user) =>{
    return new Promise((res,rej) =>{
        axios.put(`${baseURL}/aceeptRefusePost?offre=${offre}&user=${user}`,{},{
            headers:{
                Authorization:Cookies.get("jwt")
            }
        }).then(response=>res(response)).catch(err=>rej(err))
    })
}