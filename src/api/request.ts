import axios from "axios";

export const instance = axios.create({
    baseURL: `http://localhost:4000`,
    headers:{
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
    }
})

// instance.interceptors.request.use((config)=>{

//     const accessToken = localStorage.getItem("access_token")

//     if (accessToken && config.headers) {
//         config.headers["access_token"] = `Bearer ${accessToken}`;
//       }
//       return config;
// })