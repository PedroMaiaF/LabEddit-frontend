import axios from "axios";
export const BASE_URL = "http://localhost:3003";
export const validateEmail = (email => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email))
export const validatePassword = (password => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,12}$/.test(password))
export const validadenickName = nickName => /.{2,}/.test(nickName)
export const validaNewPost = content  => /.{2,}/.test(content)

export const Login = async (body)=>{
   
   const {data} = await axios.post(`${BASE_URL}/users/login`,body)
   return data
}
export const Signup = async (body)=>{
    const {data} = await axios.post(`${BASE_URL}/users/signup`,body)
    return data
}




