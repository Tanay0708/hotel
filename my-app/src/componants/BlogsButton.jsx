import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../config/firebase-config';
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage';
import {v4} from 'uuid';



const BlogsButton = () => {
  
    const [open, setOpen] = useState(false);
    const [head,setHead] = useState();
    const [content,setContent] = useState();
    const [image,setImage] = useState(null);
    const [imgLink,setImgLink] = useState();

    const handleOpen = () => setOpen(!open);

    const blogsCollectionRef = collection(db,"blogs")
    
    const handleSubmit = async () => {
      try {
        await addDoc(blogsCollectionRef,
          {
          headline: head,
          content: content,
          image: imgLink
        })
       

        alert("Blog added")
        handleOpen();
        window.location.reload()
      }
      catch(err) {
     
        alert("Enter All Details")
      }
    }

    const imageUpload = () => {
      if(image == null) return alert("Select Image File");

      const imageRef = ref(storage,`images/${v4()}`)
      uploadBytes(imageRef,image).then((data) => {
        getDownloadURL(data.ref).then(val => {
          setImgLink(val)
        })
        alert("Image uploded")
      })
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
          <label>Image</label>
          <br />
          <input type="file"  className='border-2 w-[100%] h-12 md:w-[80%] lg:w-[80%] ' onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button onClick={imageUpload} className='w-32 md:w-52 mt-2 bg-[#9B804E] text-white'>Upload Image</button>
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