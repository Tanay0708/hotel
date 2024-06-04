import React from 'react'
import { Link } from 'react-router-dom'

const HomeGallery = () => {
  return (
    <section className="text-gray-600 body-font bg-[#FCF9EF]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://swarajya.gumlet.io/swarajya/2022-10/30a2a1eb-967e-4457-92b9-457baaab996d/AC34C070_C900_4391_9C9B_4F6CECBC10AD.jpeg?w=640&q=75&auto=format,compress&format=webp" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 forum">Places to Visit near
        <br className="hidden lg:inline-block"/> Indore within 100Kms
      </h1>
      <p className="mb-8 leading-relaxed">Ralamandal Wildlife Sanctuary, Mahakal Lok, Patalpani Falls, Omkareshwar, Ved Shala, Narmada Ghat, Tincha Falls, Chidiya Bhadak Waterfall and many more such exciting places.</p>
      <div className="flex justify-center">
        <Link to={'/gallery'}>
        <button className="inline-flex text-white bg-[#9B804E] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Know More</button>
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default HomeGallery