import { Carousel } from '@material-tailwind/react'
import React from 'react'

const Testimonies = () => {
  return (
    <Carousel >
     
  <section className="relative isolate overflow-hidden bg-[#FCF9EF] px-6 py-24 sm:py-32 lg:px-8">
    <div className="absolute inset-0 -z-10  opacity-20" />
    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%]  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div className=" max-w-2xl lg:max-w-4xl m-auto text-center">
      <h1 className='text-3xl lg:text-6xl forum'>What our client says</h1>
      <figure className="mt-10">
        <blockquote className="text-center text-xl  leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p className='lora'>
            “I recently stayed at Hotel Indergarh Heritage and was blown away by the level of service and comfort. The Deluxe Room was beautifully appointed, and the staff went above and beyond to ensure I had everything I needed.  I highly recommend this hotel to anyone looking for a luxurious and memorable stay.”
          </p>
        </blockquote>
        <figcaption className="mt-10">
          <img
            className="mx-auto h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900">Judith Black</div>
            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="text-gray-600">CEO of Workcation</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
    </Carousel>
  )
}

export default Testimonies