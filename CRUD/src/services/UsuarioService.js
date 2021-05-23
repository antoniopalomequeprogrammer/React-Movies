import http from '../http-common';


const registro = (data) => {
    return http.post(`/registro/`,data);
}

const login = (data) => {
    return http.post(`/login/`,data);
}



export default {

    registro,
    login,

}