import React, { useEffect, useState } from 'react'
import BlogsCard from './BlogsCard'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config';

const Blogs = () => {

    const [list,setList] = useState([]);

    const blogCollectionRef = collection(db,'blogs');

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await getDocs(blogCollectionRef)
                const filterdData = data.docs.map((doc) => ({...doc.data(),id:data.id}))
                setList(filterdData)
                
            }
            catch(err) {
                console.log(err)
            }
        }

        getBlogs();
    },[])
console.log(list[0])

  return (
   <section className='w-full h-auto  p-5 md:p-10 lg:p-20 bg-[#FBF9EF] pb-20 pt-10'>
        <div className='w-[80%] m-auto text-center h-auto '>
            <h1 className='lora text-sm md:text-base lg:text-base  tracking-widest text-[#9b804e]'>
                TENDING TOPICS
            </h1>
            <h1 className='forum text-4xl md:text-5xl lg:text-7xl mt-5'>
            Blogs
            </h1>
            
        </div>
        <div className='w-[100%] md:w-[50%] m-auto mt-10'>
            <Link to={'/blogs'}>
        <BlogsCard pic={list[0]?.image} head = {list[0]?.headline} />
        </Link>  
        </div>
   </section>
  )
}

export default Blogs