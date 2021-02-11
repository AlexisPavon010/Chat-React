import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'
import { Hooks } from './Hooks'


import { BrowserRouter as Router, Link } from 'react-router-dom'






export default function Login() {

    const { LoginChange, LoginSubmit } = Hooks({
    });



    return (
        <div className="container mt-5" style={{ width: "360" + "px" }}>
            <div className="card text-white bg-primary " >
                <form className="card-body" onSubmit={LoginSubmit} >
                    <h4 className="card-title">Logearse</h4>
                    <div className="form-group">
                        <label className="col-form-label">Correo</label>
                        <input onChange={LoginChange} name="correo" type="email" className="form-control" placeholder="correo"></input>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Contraseña</label>
                        <input onChange={LoginChange} name="contraseña" type="password" className="form-control" placeholder="contraseña"></input>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary btn-success">Iniciar sesion</button>
                        <Link to="/Register" className="d-flex align-items-center" >Registrarse</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
