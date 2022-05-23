const axios = require("axios");

const baseUrl = "http://localhost:8000/group";

const profileService = {}

profileService.get = ( () => {
    return axios.get(baseUrl + "getUser").then(res => res.data);
});

profileService.getEmail = ((email) => {
    return axios.get(baseUrl + email).then(res => res.data);
});

profileService.getById = ((id) => {
    return axios.get(baseUrl + "getUser/" + id).then(res => res.data);
});

profileService.validPass = ((user) => {
    return axios.post(baseUrl + 'contrasenia', user).then(res => res.data);
})

profileService.save = ((user) => {
    return axios.post(baseUrl + "registrar", user).then(res => res.data);
})




module.exports = profileService;