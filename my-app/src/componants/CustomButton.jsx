import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import {addDoc ,collection} from 'firebase/firestore';
  import {db} from '../config/firebase-config';


const CustomButton = () => {

    const [open, setOpen] = useState(false);
    const [name,setName] = useState('')
    const [date1,setDate1] = useState();
    const [date2,setDate2] = useState();
    const [mobile,setMobile] = useState();
    const [room,setRoom] = useState('deluxe')
 
  const handleOpen = () => setOpen(!open);
  const userCollectionRef = collection(db,"user-info")



  const handleClick = async () => {

    

      try {
        await addDoc(userCollectionRef,
          {
          name:name,
          dateFrom:date1,
          dateTo:date2,
          mobile:mobile,
          rooms:room
        })

        alert("thank you for contacting us, we will reach you shortly")
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
        Book Now
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
            <label  >Name</label><br />
          <input type="text" required className='border-2 w-[100%] h-12 md:w-[80%] lg:w-[80%]' placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} /><br />
          <label  >Check-in</label><br />
          <input type="date" required className='border-2 w-[100%] h-12  md:w-[80%] lg:w-[80%]' onChange={(e) =>  setDate1(e.target.value)} /><br />
          <label >Check-out</label><br />
          <input type="date" required className='border-2 w-[100%] h-12  md:w-[80%] lg:w-[80%]' onChange={(e) => setDate2(e.target.value)} /><br />
          <label >Mobile-no.</label><br />
          <input type="number" className='border-2 w-[100%] h-12  md:w-[80%] lg:w-[80%]' placeholder='Enter your mobile no.'onChange={(e) => setMobile(e.target.value)}   /><br />
          <label >Room Type</label><br />
          <select className='border-2 w-[100%] md:w-[80%] h-12  lg:w-[80%]' onChange={(e) => setRoom(e.target.value)} >
            <option value="deluxe">Deluxe Room</option>
            <option value="grand-heritage">Grand Heritage</option>
            <option value="grand-royal">Grand Royal</option>
        </select>
          
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
          <Button variant="gradient"  className='bg-[#9B804E]' onClick={handleClick}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default CustomButton