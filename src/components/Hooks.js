import { useState } from 'react'
import { db, auth } from '../firebase'




export const Hooks = (initialState) => {


    const [user, setUser] = useState()

    const [messages, setMessage] = useState({ messages: '' })



    //messages
    const handleOnChanges = (e) => {
        const message = e.target.value
        setMessage({ ...messages, message });
        console.log(messages)
    }


    const sendMessage = async () => {
        await db.collection('messages').doc().set(messages)
        console.log('messages saved')

    }

    //register
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log(user)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { correo, contraseña, nombre } = user

        auth.createUserWithEmailAndPassword(correo, contraseña)
            .then((res) => console.log('Usuario registrdo'))
            .catch(err => alert(err.message))
    }


    //login

    const [login, setLogin] = useState()

    const LoginChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setLogin({...login, [name]: value})
    }

    const LoginSubmit = (e) => {
        e.preventDefault()
        const {correo, contraseña} = login
        auth.signInWithEmailAndPassword(correo, contraseña)
            .then((res) => setUser({correo, contraseña}))
            .catch(err => alert(err.message))
    }

    // LogOut

    const logOut = (e)=>{
        e.preventDefault();
        auth.signOut()
        .then(()=> {
            console.log('user logOut')
        })
    }

    return {
        sendMessage,
        handleOnChanges,
        handleChange,
        handleSubmit,
        LoginChange,
        LoginSubmit,
        logOut,
        user,

    }
}



