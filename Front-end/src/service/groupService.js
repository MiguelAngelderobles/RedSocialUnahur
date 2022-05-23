const axios = require("axios");

const baseUrl = "http://localhost:8000/profile/";

const groupService = {}

groupService.get = ( () => {
    return axios.get(baseUrl).then(res => res.data);
});

groupService.getEmail = ((email) => {
    return axios.get(baseUrl).then(res => res.data);
});

groupService.getById = ((id) => {
    return axios.get(baseUrl + id).then(res => res.data);
});

groupService.delete = ((id) => {
    return axios.delete(baseUrl, id).then(res => res.data);
})

groupService.post = ((user) => {
    return axios.post(baseUrl, user).then(res => res.data);
})

groupService.put = ((id, user) => {
    return axios.put(baseUrl + id,user).then(res => res.data);
})



module.exports = groupService;