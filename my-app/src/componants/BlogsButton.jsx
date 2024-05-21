import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase-config';





const BlogsButton = () => {
  
    const [open, setOpen] = useState(false);
    const [head,setHead] = useState();
    const [content,setContent] = useState();

    const handleOpen = () => setOpen(!open);

    const blogsCollectionRef = collection(db,"blogs")
    
    const handleSubmit = async () => {
      try {
        await addDoc(blogsCollectionRef,
          {
          headline: head,
          content: content
        })

        alert("Blog added")
        handleOpen();
        window.location.reload()
      }
      catch(err) {
     
        alert("Enter All Details")
      }
    }

    return (
    <>
      <Button onClick={handleOpen} className='bg-[#9B804E] w-full h-full'>
        ADD BLOG
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader></DialogHeader>
        <DialogBody className='text-left md:text-center  text-black  w-[80%] m-auto lora '>
          
          <label>Headline</label> 
          <br />
          <input type="text" placeholder='Enter your Blog headline' className='border-2 w-[100%] h-12 md:w-[80%] lg:w-[80%]' onChange={(e) => setHead(e.target.value)}/> 
          <br />
          <label >Content</label>
          <br />
          <textarea className='border-2 w-full md:w-[80%]' rows="10" onChange={(e) => setContent(e.target.value)}></textarea>
          
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient"  className='bg-[#9B804E]' onClick={handleSubmit} >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default BlogsButton