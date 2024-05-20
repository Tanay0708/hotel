import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";



const BlogsButton = () => {
  
    const [open, setOpen] = useState(false);
  

    const handleOpen = () => setOpen(!open);

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
          <input type="text" placeholder='Enter your Blog headline' className='border-2 w-[100%] h-12 md:w-[80%] lg:w-[80%]'/> 
          <br />
          <label >Image</label><br />
          <input type="file" className='border-2 w-[100%] h-12 md:w-[80%] lg:w-[80%]' />
          <br />
          <label >Content</label>
          <br />
          <textarea className='border-2 w-full md:w-[80%]' rows="10"></textarea>
          
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
          <Button variant="gradient"  className='bg-[#9B804E]' >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default BlogsButton