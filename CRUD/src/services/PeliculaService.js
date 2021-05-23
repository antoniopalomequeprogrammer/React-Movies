import http from '../http-common';


const getAll = () => {
    return http.get('peliculas');
}

const getById = (id) => {
    return http.get(`pelicula/${id}`);
}

const create = (data) => {
    return http.post(`pelicula/guardar/`,data);
}

const update = (id,data) => {
    return http.put(`/pelicula/actualizar/${id}`,data);
}

const remove = (id) => {
    return http.delete(`/pelicula/borrar/${id}`);
}

export default {

    getAll,
    getById,
    create,
    update,
    remove

}