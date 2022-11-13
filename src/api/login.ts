import axios from "axios";
import { instance } from "./request";

export const loginApi = async (email:string, password:string) => {
    const data = {
        "email":email,
        "password":password
    }
    console.log("data", data)
    return await instance.post("/login", data);
}