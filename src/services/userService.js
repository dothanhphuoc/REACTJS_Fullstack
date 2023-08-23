import { stringify } from "react-auth-wrapper/helpers";
import axios from "../axios";   //axios da customize    

const handleLoginApi = (email, password) => {
    return axios.post("api/login", { email, password });
}

const getListUser = (inputID) => {

    //template string
    return axios.get(`api/display-list-user?id=${inputID}`);
}

export { handleLoginApi, getListUser };