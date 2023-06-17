import axios from "axios"
import Cookies from "js-cookie";
const baseURL = "http://127.0.0.1:8000/api";
export const deleteOffer = (id) =>{
    return new Promise((res,rej)=>{
        axios.delete(`${baseURL}/offre?id=${id}`,{
            headers:{
                Authorization:Cookies.get("jwt")
            }
            
        }).then(response=>res(response.data)).catch(err=>rej(err))
    })
}