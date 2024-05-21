import React from 'react'
import { pic16} from '../Images'
import Navbar from '../componants/Navbar'
import PriceTable from '../componants/PriceTable'
import Footer from '../componants/Footer'
import CustomButton from '../componants/CustomButton'

const RoyalRoom = () => {
    return (
      <>
        <section className='bg-[#FFFCF2] text-[#3D3931] pb-10'>
          <Navbar />
          <div className='w-[80%] m-auto h-96'>
            <img src={pic16} alt="" className='w-full h-full object-contain'/>
          </div>
          <div className=' w-[80%] m-auto mt-5 leading-10'>
            <h1 className='text-4xl text-center forum'>
              Grand Royal ( ₹1800/night )
            </h1>
            <p className='mt-5 text-lg lora '>
            Welcome to your home away from home at Hotel Indergarh Heritage, where luxury meets convenience. Our meticulously designed rooms offer the perfect blend of comfort and functionality, ensuring a delightful stay for every guest.
            </p>
            <div className='text-lg mt-10 lora'>
            <span className='text-3xl'> Rooms Features:</span> 
              <ul className='list-disc  '>
                <li className='mt-5'>
               <span className='text-2xl'>Elegant Furnishings:</span> <br /> Step into a haven of sophistication, adorned with tasteful décor and plush furnishings that create a warm and inviting ambiance.
                </li>
                <li className='mt-5'>
               <span className='text-2xl'>Modern Amenities: </span> <br /> Enjoy the convenience of modern amenities, including a flat-screen TV for your entertainment, high-speed WiFi to stay connected, and air conditioning to keep you cool and comfortable throughout your stay.
                </li>
                <li className='mt-5'>
                <span className='text-2xl'>Comfortable Accommodations:</span> <br /> Retreat to the tranquility of your cozy sanctuary, complete with a comfortable bed dressed in premium linens, promising a restful night's sleep after a day of exploration.
                </li>
              </ul>
            </div>
            <div className='text-lg mt-10 lora'>
            <span className='text-3xl'> Check-In & Check-Out:</span> 
              <ul className='list-disc  '>
                <li className='mt-5'>
               <span className='text-2xl'>Check-In Time:</span> <br /> Arrive early and start your day refreshed with our convenient check-in time starting from 10:00 AM. We understand the importance of flexibility, allowing you to make the most of your time from the moment you arrive.
                </li>
                <li className='mt-5'>
               <span className='text-2xl'>Check-Out Time:</span> <br /> Begin your day leisurely and bid farewell to your temporary abode by 9:00 AM. Our early check-out time ensures a seamless transition as you embark on your journey ahead.
                </li>
                
              </ul>
            </div>
            <div className='text-lg mt-10 lora'>
            <span className='text-3xl'>Unwind and Recharge:</span> 
              <p className='mt-5'>
              After a day of sightseeing or business meetings, return to your room and unwind in comfort. Catch up on your favorite shows, stay connected with loved ones, or simply relax in the soothing ambiance of your private retreat.
              </p>
            </div>
            <div className='text-lg mt-10 lora'>
            <span className='text-3xl'>Book Your Stay:</span> 
              <p className='mt-5'>
              Experience the epitome of luxury and convenience at Hotel Indergarh Heritage. Book your stay with us today and immerse yourself in a world of unparalleled comfort and hospitality. We eagerly await the opportunity to exceed your expectations and create lasting memories during your visit.
              </p>
              <button className='text-xl w-36 h-10 mt-5 bg-[#9B804E] text-white'>
                <CustomButton />
              </button>
            </div>
          </div>
        
        </section>
        <PriceTable />
          <Footer />
        </>
      )
}

export default RoyalRoom