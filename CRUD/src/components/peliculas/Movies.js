import {React,useState,Fragment, useEffect} from 'react'
import PeliculaService from '../../services/PeliculaService'



const Movies = (props) => {






    const [modoEdicion,setModoEdicion] = useState(false);
    const obtenerPeliculas = () =>{
        console.log(props);
        PeliculaService.getAll()
            .then(response => {
                setMovies(response.data);
                console.log(movies);
            })
            .catch(err => {
                // alert("Ocurrio un error");
                console.log(err)
            })
    }

    const eliminarPelicula = (id) => {


        const arrayFiltrado = movies.filter(item => item.id!==id)
        setMovies(arrayFiltrado)


            PeliculaService.remove(id)
            .then(response => {
            
                

            })
            .catch(err => {

            

            })
    }

    const editarPelicula = (item) => {
        console.log(item);
        setModoEdicion(true);
    }
    


    const [movies,setMovies] = useState(obtenerPeliculas);
    


    return (
        
        <div>
        
        
        {movies?(
            <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
            
            <Fragment>
            {movies.map((item,index) => (
                <tr key={item.id}>
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    <th><button 
                    className="btn btn-warning" 
                    onClick={()=>editarPelicula(item)}
                    >Editar</button></th>
                    <td>
                    
                    <button 
                    className="btn btn-danger" 
                    onClick={() => {eliminarPelicula(item.id,index)}}
                    >Eliminar</button></td>
                    </tr>
               
            ))}
            </Fragment>
            </tbody>
            </table>



        ):(
            <div>
                <p>No hay películas</p>
            </div>
        )}
          
         
       
      
        </div>
    )
}

export default Movies
