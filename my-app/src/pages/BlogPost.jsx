import React, { useEffect, useState } from 'react'
import Navbar from '../componants/Navbar'
import { collection,getDocs } from 'firebase/firestore'
import { db } from '../config/firebase-config'
import { pic12, pic4, pic5 } from '../Images'

const BlogPost = () => {

  const [blogList,setBlogList] = useState([]);
  const collectionBlogRef = collection(db,'blogs');
  const [one,setOne] = useState();

  useEffect(() => {

    const getBlogs = async () => {
      try {
        const data = await getDocs(collectionBlogRef)
        const filterdData = data.docs.map((doc) => ({...doc.data(),id:doc.id}))
        setBlogList(filterdData)
        setOne(filterdData[0].id);
      }
      catch(err) {
        console.log(err)
      }
    }

    getBlogs();

  },[])
const handleClick = (id) => {
  setOne(id)
}

  console.log(blogList);
  console.log(one)
  return (
    <section className='bg-[#FBF6E8]'>
      <Navbar />
      <div className='w-full '>
        <div className=' w-full md:w-[50%] h-60 m-auto mt-5'>
        <img src={pic5} alt="" className='h-full w-full' />
        </div>
        <div>
          <h1>
            {
            blogList.map((el) => {
              if(el.id == one) {
                return (
                <div className='text-center forum text-4xl mt-10'>
                  <h1>{el.headline}</h1>
                  <p className='text-2xl mt-5 md:mt-10'>
                    {el.content}
                  </p>
                </div>
              )
              }
            })
            }
          </h1>
        </div>
        <div className='flex flex-col w-[50%]'>
         {
          blogList.map((el) => {
            if(el.id != one){
              return <button className='border-2' onClick={()=>handleClick(el.id)}>{el.headline}</button>
            }
            
          })
         }
        </div>
      </div>
    </section>
  )
}

export default BlogPost