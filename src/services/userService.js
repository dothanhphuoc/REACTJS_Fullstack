import axios from "../axios";   //axios da customize    

const handleLoginApi = (email, password) => {
    return axios.post("api/login", { email, password });
}

const getListUser = (inputID) => {
    //template string
    return axios.get(`api/display-list-user?id=${inputID}`);
}

//create new user
const createNewUserService = (dataUser) => {
    return axios.post('/api/create-new-user', dataUser);
}

//delete user
const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

//edit user
const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}
export {
    handleLoginApi,
    getListUser,
    createNewUserService,
    deleteUserService,
    editUserService
};