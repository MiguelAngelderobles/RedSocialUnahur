const axios = require("axios");

const baseUrl = "http://localhost:8000/user";

const userService = {}

userService.get = ( () => {
    return axios.get(baseUrl + "getUser").then(res => res.data);
});

userService.getEmail = ((email) => {
    return axios.get(baseUrl + email).then(res => res.data);
});

userService.getById = ((id) => {
    return axios.get(baseUrl + "getUser/" + id).then(res => res.data);
});

userService.validPass = ((user) => {
    return axios.post(baseUrl + 'contrasenia', user).then(res => res.data);
})

userService.save = ((user) => {
    return axios.post(baseUrl + "registrar", user).then(res => res.data);
})

module.exports = userService;