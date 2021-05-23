import React from 'react'
import { useState,useEffect } from "react";
import PeliculaService from '../../services/PeliculaService';
import { useParams } from 'react-router-dom';

const Pelicula = (props) => {
    const {id} = useParams();
    
    const initialPeliculaState = {
        name: '',
    };

    const [peliculaActual,setPeliculaActual] = useState(initialPeliculaState);
    const [message,setMessage] = useState('');

    const getMovie = (id) => {
        PeliculaService.getById(id)
        .then(response => {
            console.log(response);
            setPeliculaActual(response.data)

        })
        .catch(err => {
            
            console.log(err)
        })
    }

    useEffect(() => {
        
        getMovie(id);
    }, [id]);




    const handleInputChange = event => {
        const {name,value} = event.target;
        // Con los 3 puntos estoy insertando los valores en el objeto
        setPeliculaActual({...peliculaActual, [name]: value})
    }

    const updateMovie = () => {
        PeliculaService.update(peliculaActual.id,peliculaActual)
        .then(response => {
            setMessage('La película fue actualizada correctamente');

        })
        .catch(err => {
            setMessage('Ocurrio un error al actualizar la película');
            console.log(err);
        })
    }

    



    return (
        
        <div className="submit-form">

            {!peliculaActual ? (
                <div>

                <h4>Por favor selecciona una película</h4>
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
                    defaultValue={peliculaActual.name}
                    onChange={handleInputChange}
                    name="name"



                    />
                    </div>
                    <br/>
                    <button className="btn btn-success" onClick={updateMovie}>Editar Película</button>
                </div>
            )}

        </div>
    )
}

export default Pelicula;
