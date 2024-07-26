import { Button, Carousel } from '@material-tailwind/react'
import React from 'react'

const Testimonies = () => {
  return (
    <Carousel >
     
  <section className="relative isolate overflow-hidden bg-[#FBF6E8] px-6 py-24 sm:py-32 lg:px-8">
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXk5ueutLeor7Lf4ePn6eqrsbW5vsHIzM7a3d60ur3BxsjR1NbN0dPX2tzr7O29wsX2DjRMAAADaUlEQVR4nO2bW3LkIAwADYi3be5/25iZZB4bxyDZgqkt+ivZn+0SQgahTNNgMBgMBoPBYDAYDAaDwWCaAGBSG/mn3i53AFQMxt8xdpm6ewE466XU4getpZlVVy9YjHgKPcRE6Ke1KclfRnct2UkLprATpWe05g5W4PzfShmZVHOneGh0D1ZjK5j/yKZ3lpZLCPZ46R7Bcu2sKuN0i1Uzp1gXpxvN8qpeSQjTyMkgAiV0aJFWMGOctnrVpLZXJ/k3DRYQAi5Q2wJGdqkFqZThXj98oHKouK2wGZVhzqra78s/oXK8VobgxF2rHMVpY+WUipSU2goo5/pBoqTUtn6cZ+OV5sScVLTV4y0Kjhgp4fmOVajT3TuMUshTyxPG8kmr5xnGmnBCiu8C8b9JMS7fRyY6vSQwSi0fWDwn9YmfGaBKBUap1dOctGU8JVC3H29LaCGePHnvWKT104lVCgIpUMwXd1JR4KxSGcr+Y917NwhFXTIrTYQ7coNeHjhsVnFnVGZFtTyZL6IPFM7Js/YRfgBcWWduAz2sEN082e55prrPwV+iXii89T3i1NKp8tWhzWsDzqpxnDKlO6AW7J3q38BymFjSdHlvP3pu12LuYHRjdUHuaWlhew5xgApe6Fex7RffLUoPrWmxRkipM1KKNLv+IzjfuBjnuOTv3GcYAawvQN8Rqvy/K7dEG5L5Po4ak4KdF9dpvAtWtdhkvL5l02ue538RPoWoYG0oBpOKQUh9WNJz3pvZqSYRg9VZL3bL017B8iFyxwsmZ2uFniFLC2MpBYh7024VWt4yVQpQ9jiLDr1kYGhaHw+71WiJdHGTaosSMpP2kOnKWwTMlWfyAvq63ic4T+2//ta66L4M9iqju1Y6Xx+Kk5N4q9NTJhDP7bl9rZOZZS/Lple2S8UJJ+IYQhEt6ImF7EShoJasq1P8DeIjBGecMoRYAbeT0Ohsh8Cy797AdmjpT9gItEEtIL4vTULiPoTEx0YsGpHslLlJGr5eqs3iZRCN2tTKSVTPMNGnDwjoVPcgQX1SJ1pVherE7AhJqq6t3Wzr3amq67hHqvPImtMxceiVjimn+koaWT5DTaq3zahMcf2A8ucC5yhXdfqEG51UWrx23+InvphSLb97PxQz3cv2FN++VQeKyzcYDAaDwaA9XxcLKh2A6JUdAAAAAElFTkSuQmCC"
            alt=""
          />
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900">A.P</div>
           
            
          </div>
          <a href="https://www.google.com/travel/search?q=hotel%20indergarh%20heritage%20indore%20reviews&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C10210222%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72462234%2C72470899%2C72471280%2C72472051%2C72473841%2C72481459%2C72485658%2C72486593%2C72494250%2C72499705%2C72513513%2C72536387%2C72549171%2C72569093%2C72570850%2C72602734%2C72616120%2C72619927%2C72620306%2C72620962%2C72634630%2C72648289%2C72649493%2C72653660%2C72658035%2C72661848%2C72662543%2C72663440%2C72671093%2C72679703&hl=en-IN&gl=in&cs=1&ssta=1&qs=CAEyFENnc0k4TVBabXFqMG40U1VBUkFCOAJCCQnwYVaDon8IlEIJCfBhVoOifwiU&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiQ6vKX_sSHAxUAAAAAHQAAAAAQCw&ts=CAESCAoCCAMKAggDGkcKKRInMiUweDM5NjJlMzAwMWU0ZjE4NTc6MHg5NDA4N2ZhMjgzNTY2MWYwEhoSFAoHCOgPEAcYHBIHCOgPEAcYHRgBMgIQAA%3D%3D" target='_blank'>
           <Button  className='bg-[#9B804E] w-[25%] h-full'>
        Reviews
      </Button>
      </a> 
        </figcaption>
      </figure>
    </div>
  </section>
    </Carousel>
  )
}

export default Testimonies