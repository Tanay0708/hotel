import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase-config';
import Dashboard from './Dashboard';
import BlogsButton from '../componants/BlogsButton';

const CreateBlog = () => {

    const [blogList,setBlogList] = useState([]);
    const blogCollectionRef = collection(db,'blogs');


    const deleteBlog = async (id) => {
        const blogD = doc(db,'blogs',id);
        await deleteDoc(blogD)
        window.location.reload()
     }



    useEffect(() => {

        const getBlogs = async () => {
          try {
            const data = await getDocs(blogCollectionRef)
            const filterdData = data.docs.map((doc) => ({...doc.data(),id:doc.id}))
            setBlogList(filterdData)
        
          }
          catch(err) {
            console.log(err)
          }
        }
    
        getBlogs();
    
      },[])

   


  return (
    <>
     <Dashboard />
     <div className='h-10 w-36 m-auto mt-10 mb-5 '>
    <BlogsButton />
     </div>
    <div className='w-full md:w-[50%] m-auto'>
        <table className='text-center w-[100%] md:w-[80%] lg:w-[80%] m-auto ' >
            <thead className='w-full' >
            <tr className='border-2'>
                <th className='border border-black'>Blogs</th>
              
             
                <th className='border border-black'>Delete</th>
            </tr>
            </thead>
            <tbody>
        {
            blogList.map((el) => {
                return (
                <tr className='border-2'>
             <td className=''>{el.headline}</td>
                             
             <td>
                <button className='bg-[#9B804E] w-full text-white' onClick={() => deleteBlog(el.id)} >
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

export default CreateBlog