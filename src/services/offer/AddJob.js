import axios from "axios";
import Cookies from "js-cookie"

export const addJob = (title,salaire,description,type,experience,adresse,deadLine) =>{
    return new Promise((res,rej)=>{
        const baseURL = "http://127.0.0.1:8000/api"
        const token = Cookies.get("jwt");
        const data = new FormData();
        data.append("titre",title)
        data.append("description",description)
        data.append("salaire",salaire)
        data.append("typee",type)
        data.append("experience",experience)
        data.append("adresse",adresse)
        data.append("deadLine",deadLine)
        axios.post(`${baseURL}/offre`,data,{
            headers:{
                Authorization:token
            }
        }
        ).then(response =>res(response.data)).catch(err=>rej(err.response.data.message))
    })
    
}