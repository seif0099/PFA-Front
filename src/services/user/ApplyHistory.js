import axios from "axios";
import Cookies from "js-cookie";
const baseURL = "http://127.0.0.1:8000/api";
export const getApplyHistory = () =>{
    return new Promise((res,rej)=>{
        axios.get(`${baseURL}/postuleOffreUser`,{
            headers:{
                Authorization:Cookies.get("jwt")
            }
        }).then(response => res(response.data)).catch(err=>rej(err))
    })
}
export const deleteApplication = (id) => {
    return new Promise((res,rej)=>{
        axios.delete(`${baseURL}/postuleOffreUser?id=${id}`,{
            headers: {
                Authorization:Cookies.get("jwt")
            }
        }).then(response => res(response)).catch(err=>rej(err))
    })
}