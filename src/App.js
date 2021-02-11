import { useState } from 'react'
import Login from './components/Login'
import Chat from './components/Chat'
import Register from './components/Register'
import {  auth } from './firebase'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






function App() {

  const [user, setUser] = useState(false)
  

  auth.onAuthStateChanged( User => {
    if (User) {
      setUser(true)
      console.log('logIn')
    }else {
      console.log('no Existe')
    }
  })


  return (
    <div className="App">
      
            { user ? <Chat /> : 
        <Router>      
          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>
        </Router>
          }


    </div>
  );
}

export default App;
