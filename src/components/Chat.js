import React, {useEffect, useState} from 'react'



import 'bootswatch/dist/slate/bootstrap.min.css'
import './Chat.css'
import 'materialize-css';
import { Hooks } from './Hooks';
import { db } from '../firebase';






export default function Chat() {

    const { handleOnChanges, sendMessage, logOut, } = Hooks();

    const [chat, setChat] = useState()

    useEffect( async () => {
        const res = await db.collection('messages').get()
        const data = res.docs.map(doc => doc.data())
        setChat(data)
    }, [])

    console.log({...chat})
    return (
        <div className="container" style={{width: "360" + "px"}}>
        <div className="card text-white bg-dark mt-4" >
            <div className="card-header d-flex">
                <h4 className="mr-5">GarkSapp</h4>
                <button onClick={logOut} type="button" className="btn btn-secondary ml-5">Salir</button>
                </div>
            <div className="card-body">
               <li>{}</li>   
            </div>
            <div className="card-footer text-muted d-flex">
                <input onChange={handleOnChanges} className="card-footer form-control text-muted"></input>
                <button onClick={sendMessage} className="btn btn-info ml-2"><i className="material-icons">send</i></button>
            </div>
        </div>
    </div>
    )
}
