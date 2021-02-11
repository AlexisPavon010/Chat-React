import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'
import { Hooks } from './Hooks'

import {Link} from 'react-router-dom' 




export default function Login() {

    const { handleChange, handleSubmit } = Hooks({
    });



    return (
        <div className="container mt-5" style={{width: "360" + "px"}}>
            <div className="card text-white bg-primary " >
                <form className="card-body" onSubmit={handleSubmit} >
                    <h4 className="card-title">Registrarse</h4>
                    <div className="form-group">
                        <label className="col-form-label">Usuario</label>
                        <input onChange={handleChange} name="nombre" type="text" className="form-control" placeholder="Nombre de Usuario"></input>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Correo</label>
                        <input onChange={handleChange} name="correo" type="text" className="form-control" placeholder="correo"></input>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Contraseña</label>
                        <input onChange={handleChange} name="contraseña" type="password" className="form-control" placeholder="contraseña"></input>
                    </div>
                    <div className="d-flex justify-content-between">
                    <button className="btn btn-primary btn-success">Registrarse</button>
                    <Link to="/Login">Iniciar sesion</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
