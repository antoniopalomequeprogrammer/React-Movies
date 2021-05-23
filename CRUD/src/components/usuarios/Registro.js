import React from 'react'
import { useState } from "react";
import UsuarioService from '../../services/UsuarioService';
import {withRouter, BrowserRouter, Router} from 'react-router-dom';




export const Registro = (props) => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password_confirm,setPassword_confirm] = useState('')
    const [phone,setPhone] = useState('')
    const [error,setError] = useState(null);
    const [esRegistro,setEsRegistro] = useState(true);


    const guardarDatos = (e) => {
        e.preventDefault();
        console.log(name);

        if(password!=password_confirm){
            setError('Las contraseñas tienen que coincidir');
            return;
        }

        let data = {
            name: name,
            password:password,
            phone:phone,
            email:email,
            password_confirm:password_confirm
        }
        console.log(data);
        UsuarioService.registro(data)
            .then(response => {
                console.log(response);
                

                
            })
            .catch(err => {
                alert('Ocurrio un error');
                console.log(err);
            });
        
    }

    const iniciarSesion = (e) => {
        e.preventDefault();
        let data = {
            name: name,
            password:password,
            phone:phone,
            email:email,
            password_confirm:password_confirm
        }
        console.log(data);
        UsuarioService.login(data)
            .then(response => {
                console.log(response);
                

                
            })
            .catch(err => {
                alert('Ocurrio un error');
                console.log(err);
            });
    }

    return (
        <div className="container mt-5">
            <h2>
            {
                esRegistro? 'Registro de usuarios': 'Login de acceso'
            }
            
            
            
            
            </h2>
            <form onSubmit={
                
                esRegistro?  guardarDatos: iniciarSesion  
                
            
            
            
            }>
                {
                   error ? (
                       <div className="alert alert-danger">
                        {error}
                       </div>
                   ):null
                }

                <input 
                type="text"
                onChange={ (e) => setName(e.target.value)  }
                placeholder="Ingrese un nombre de usuario"
                required
                className="form-control mb-2"/>
                <input 
                type="password"
                onChange={ (e) => setPassword(e.target.value)  }
                placeholder="Ingrese una contraseña valida"
                required
                className="form-control mb-2"/>
                <input 
                type="password"
                onChange={ (e) => setPassword_confirm(e.target.value)  }
                placeholder="Confirme la contraseña"
                required
                className="form-control mb-2"/>
                <input 
                type="text"
                onChange={ (e) => setPhone(e.target.value)  }
                placeholder="Ingrese un telefono de contacto"
                required
                className="form-control mb-2"/>
                <input 
                type="email"
                required
                onChange={ (e) => setEmail(e.target.value)  }
                placeholder="Ingrese un correo electrónico"
                className="form-control mb-2"/>
                <button type="submit"  className="btn btn-success btn-block">
                
                {
                    esRegistro? 'Registrarse': 'Iniciar sesión'
                }
                
                
                
                
                </button>
                <button onClick = {() => setEsRegistro(!esRegistro)}   className="btn btn-info btn-block">
                
                {
                    esRegistro? 'Ya tienes cuenta de usuario?': '¿No tienes cuenta?'
                }

                
                
                
                
                </button>
            </form>
            <hr></hr>
            
            
            
            

        </div>
    )
}

