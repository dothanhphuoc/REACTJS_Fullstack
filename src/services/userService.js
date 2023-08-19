import { stringify } from "react-auth-wrapper/helpers";
import axios from "../axios";   //axios da customize    

const handleLoginApi = (email, password) => {
    return axios.post("api/login", { email, password });
}

export { handleLoginApi };