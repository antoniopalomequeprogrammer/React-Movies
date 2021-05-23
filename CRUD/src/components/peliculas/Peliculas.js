import React  from 'react'
import PeliculaService from '../../services/PeliculaService';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Favoritas from './Favoritas';

const Peliculas = () => {
    
    const [peliculas,setPeliculas] = useState([]);
    const [peliculaActual,setPeliculaActual] = useState(null);
    const [peliculaClicada,setPeliculaClicada] = useState(-1);
    const [openModal,setOpenModal] = useState(false);

    // useEffect, vamos  hacer algo despues de renderizar el componente

    useEffect(() => {
        obtenerPeliculas();
        
    }, [])


    const obtenerPeliculas = () =>{
        PeliculaService.getAll()
            .then(response => {
                setPeliculas(response.data);
                console.log(peliculas);
            })
            .catch(err => {
                // alert("Ocurrio un error");
                console.log(err)
            })
    }

    const refreshList = () => {
        obtenerPeliculas();
    }


    const setActiveMovie = (movie,index) => {
        setPeliculaActual(movie);
        setPeliculaClicada(index);
    }

    const mostrarMensaje = () => {
        setOpenModal(true);
    }


    return (
        <div className="row">
        <div className="col-6">
        <h4>Listado de Películas</h4>
        <table className="table table-dark">
  <thead>
    <tr>
      
      <th>ID</th>
      <th>NOMBRE</th>
      <th>Acciones</th>

      
    </tr>
  </thead>
  <tbody>

    {peliculas && 
        peliculas.map((pelicula,index) => (

            <tr key = {index}>
                <th>{pelicula.id}</th>
                <td>{pelicula.name}</td>
                <td>
                    <i className="bi bi-eye" onClick={() => setActiveMovie(pelicula,index)}></i>
                    <Link className="bi bi-pencil" to={'/pelicula/'+ pelicula.id}></Link>
    
                </td>
    
            </tr>

        ))


    }

    
   
  </tbody>
</table>
        </div>

        <div className="col-6">
        {(peliculaActual) ? (
            <div>

            <h4>{peliculaActual.name}</h4>


            </div>
        ):(
            <div>
            <br />
            <p>Primero selecciona una película....</p>
            </div>
        )}
        
        
        </div>
        <div className="col-12">
        <button className="btn btn-primary " role="button" onClick={mostrarMensaje}>Mostrar Parrafo</button>
        </div>
        <div>
        {(openModal)? (
            <Favoritas name="antonio"/>

        ):
        <p></p>    
        }
        </div>
        </div>
    )

}

export default Peliculas
