import axios from "axios";
import Cookies from "js-cookie"
const baseURL = "http://127.0.0.1:8000/api"
export const apply = (id) => {
    return new Promise((res,rej)=>{
        axios.post(`${baseURL}/postuleOffreUser?id=${id}`,{},{
            headers:{
                Authorization:Cookies.get("jwt")
            }
        }).then(response=>res(response)).catch(err=>rej(err))
    })
}