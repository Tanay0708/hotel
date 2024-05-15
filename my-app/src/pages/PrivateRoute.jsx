import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../config/firebase-config';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const [authUser,setAuthUser] = useState({});

    onAuthStateChanged(auth,(user) => {
        console.log(user)
        if(user) {
            setAuthUser(user)
        }
        else {
            setAuthUser(null)
        }
    })

    if(authUser == null) {
        return (
            <Navigate to={"/login"} />
        )
    }
      return (
        children
      )
}

export default PrivateRoute