import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { db } from '../config/firebase-config'
import { getDocs,collection, deleteDoc,doc } from 'firebase/firestore'


const ListUser = () => {

    const [user,setUser] = useState([]);
    const userCollectionRef = collection(db,'user-info');

    const deleteUser = async (id) => {    
        const userDoc = doc(db,"user-info",id)
        await deleteDoc(userDoc);
        window.location.reload();
    }

    useEffect(() => {

        const getUserList = async () => {
            try{
                const data = await getDocs(userCollectionRef)
                const filterdData = data.docs.map((doc) => ({...doc.data(),id:doc.id}))
                setUser(filterdData)
          
            }
            catch(err) {
                console.log(err)
            }
        }
        getUserList()

    },[])

  return (
    <>
    <Dashboard />
    <div className='overflow-scroll w-full'>
        <table className='text-center w-[200%] md:w-[80%] lg:w-[80%] m-auto ' >
            <thead className='w-full' >
            <tr className='border-2'>
                <th className='border border-black'>Name</th>
                <th className='border border-black '>Date From</th>
                <th className='border border-black'>Date To</th>
                <th className='border border-black'>Mobile No.</th>
                <th className='border border-black'>Room</th>
                <th className='border border-black'>Delete</th>
            </tr>
            </thead>
            <tbody>
        {
            user.map((el) => {
                return (
                <tr className='border-2'>
             <td className=''>{el.name}</td>
        
             <td className='border'>{el.dateFrom}</td>
             <td className='border'>{el.dateTo}</td>
             <td className='border'>{el.mobile}</td>
             <td className='border'>{el.rooms}</td>
             <td>
                <button className='bg-[#9B804E] w-full text-white' onClick={()=>deleteUser(el.id)}>
                Delete
                </button>
                </td>
                </tr>
            )
            })
        }
        </tbody>
        </table>
    </div>
    
    </>
  )
}

export default ListUser