import { onAuthStateChanged, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../config/firebase-config';
import {useNavigate} from 'react-router-dom'
import { hotelLogo } from '../Images';

const Signin = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [authUser,setAuthUser] = useState({})


    const navigate = useNavigate()

    useEffect(() => {
      const listen = onAuthStateChanged(auth,(user) =>{
        if(user) {
          setAuthUser(user)
        }
        else {
          setAuthUser(null)
        }
      })
    })

    console.log(auth?.currentUser?.email)

    const signIn = async (e) => {
      e.preventDefault()
        try{
         const user =   await signInWithEmailAndPassword(auth, email, password)
         navigate('/dashboard')
        }
        catch(err){
            alert("wrong credentials")
        }
    };
    


 
    const logout = async () => {
        try{
            await signOut(auth)
        }
        catch(err){
            console.log(err)
        }
    };


  return (
    <div>

       
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={hotelLogo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
              
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                 
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
          
               onClick={signIn}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  )
}

export default Signin