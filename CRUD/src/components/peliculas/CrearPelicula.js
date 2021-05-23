import React from 'react'
import { useState } from "react";
import PeliculaService from '../../services/PeliculaService';

const CrearPelicula = () => {

    const initialPeliculaState = {
        name: '',
    };

    const [pelicula,setPelicula] = useState(initialPeliculaState);
    const [submitted,setSubmitted] = useState(false);

    const handleInputChange = event => {
        const {name,value} = event.target;
        // Con los 3 puntos estoy insertando los valores en el objeto
        setPelicula({...pelicula, [name]: value})
    }

    const saveMovie = () => {
        let data = {
            name: pelicula.name,
        }

        PeliculaService.create(data)
            .then(response => {
                setPelicula({
                    id: response.data.id,
                    name: response.data.name,
                });

                setSubmitted(true);
                console.log(pelicula);
            })
            .catch(err => {
                alert('Ocurrio un error');
                console.log(err);
            });
    }

    const newMovie = () => {
        setPelicula(initialPeliculaState);
        setSubmitted(false);
    }



    return (
        
        <div className="submit-form">

            {submitted ? (
                <div>

                <h4>Has creado exitosamente tu película</h4>
                <button className="btn btn-primary" onClick={newMovie}>Crear Otra</button>
                </div>
            ): (
                <div>
                    <div className="form-group">
                    <label>Título</label>
                    <input

                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={pelicula.name}
                    onChange={handleInputChange}
                    name="name"



                    />
                    </div>
                    <br/>
                    <button className="btn btn-success" onClick={saveMovie}>Crear Película</button>
                </div>
            )}

        </div>
    )
}

export default CrearPelicula;
