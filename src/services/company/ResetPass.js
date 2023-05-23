import axios from "axios";
const baseURL = "http://127.0.0.1:8000/api"
export const sendResetMail=(email)=>{
    return new Promise((res,rej)=>{
        axios.post(`${baseURL}/companyResetPass`,{
            email
        }).then(response=>res(response.data.message)).catch(response=>rej(response.response.data.message))
    })
}

export const resetPassword=(password)=>{
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid")
    return new Promise((res,rej)=>{
        axios.patch(`${baseURL}/companyResetPass?uid=${uid}`,{
            password
        }).then(response=>res(response.data.message)).catch(response=>rej(response.response.data.message))
    })
}