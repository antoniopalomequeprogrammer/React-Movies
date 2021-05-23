import React from 'react'
import { BrowserRouter as Router,Link,Switch,Route,NavLink } from "react-router-dom";
import Peliculas from '../peliculas/Peliculas';
import Pelicula from '../peliculas/Pelicula';
import CrearPelicula from '../peliculas/CrearPelicula';
import Formulario from '../peliculas/Formulario';
import { Registro } from '../usuarios/Registro';
import RutaProtegida from '../peliculas/RutaProtegida';
const Navegacion = () => {
    return (
        <Router>

        <div>
        
        <nav className="nav mt-3">
        <Link to="/" className="btn btn-dark mr-3">Inicio</Link>
        <Link to="/formulario" className="btn btn-dark mr-3">Formulario</Link>
        <Link to="/crear-pelicula" className="btn btn-dark mr-3">Nueva Película!</Link>
        <NavLink to="/peliculas" className="btn btn-dark mr-3" >Peliculas</NavLink>
        <Link to="/admin" className="btn btn-dark mr-3">Admin</Link>
        </nav>
        <hr/>        
        <Switch>
        <Route path="/peliculas">
        <Peliculas/>
        </Route>
        <Route path="/formulario">
        <Formulario/>
        </Route>

        <Route path="/admin">
        <RutaProtegida/>
        </Route>
        


        <Route path="/pelicula/:id">

        <Pelicula />
        </Route>

        <Route path="/crear-pelicula">
        <CrearPelicula/>
        </Route>

        <Route path="/editar-pelicula">
        
        </Route>

        <Route path="/" exact>
        <Registro/>
        </Route>

        </Switch>
            
        </div>
       
        </Router>
    )
}

export default Navegacion
