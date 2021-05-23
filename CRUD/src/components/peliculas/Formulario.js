import {React,useState} from 'react'
import PeliculaService from '../../services/PeliculaService';
import Movies from './Movies';

const Formulario = () => {

    const [pelicula,setPelicula] = useState('')
    const [peliculas,setPeliculas] = useState([]);
    const [form,setForm] = useState(false);
    const [error,setError] = useState(null);





    const guardarDatos = (e) => {
        e.preventDefault();
        console.log("Procesando Datos....");
        // Comprobamos si ha escrito algo el usuario.

        if(!pelicula.trim()){
            console.log("Esta vacio");
            setError('Escriba algo por favor...')
            return
        }
        agregarPelicula(pelicula);
        // Limpiamos los inputs del formulario
        e.target.reset();
        // Limpiamos los estados 
        setPelicula('');
        setError(null)

        

    }

    const agregarPelicula = (elemento) =>{
        
        let data = {
            name: elemento,
        }
        console.log(data);
        PeliculaService.create(data)
            .then(response => {
                console.log(response);

                
            })
            .catch(err => {
                alert('Ocurrio un error');
                console.log(err);
            });
        setPeliculas([...peliculas,elemento]);
        


    }



    return (
        <div className="container mt-5">
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                {
                    error? <span className="text-danger">{error}</span> : null
                }

                <input 
                type="text"
                onChange={ (e) => setPelicula(e.target.value)  }
                placeholder="Ingrese Pelicula"
                className="form-control mb-2"/>
                <button type="submit"  className="btn btn-success btn-block">Agregar</button>
                <Movies data={pelicula}/>
            </form>
            <hr></hr>
            
            
            
            

        </div>
    )
}

export default Formulario
