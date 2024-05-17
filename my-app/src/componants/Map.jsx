import React from 'react'

const Map = () => {
  return (
    <section className='w-full bg-[#FBF9EF] pt-10 pb-10'>
    <div className='w-[80%] m-auto  '>
        <div>
            <h1 className='text-4xl forum text-center'>LOCATION</h1>
        </div>
         <div className='w-full mt-5    '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4264435564373!2d75.89790257476227!3d22.749550226462716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3001e4f1857%3A0x94087fa2835661f0!2shotel%20indergarh%20heritage!5e0!3m2!1sen!2sin!4v1715753633323!5m2!1sen!2sin" width="100%" height="450" className="border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
    </section>
  )
}

export default Map