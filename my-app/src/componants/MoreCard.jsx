import React from 'react'

const MoreCard = ({pic,head}) => {
  return (
    <section className='w-[100%] h-auto flex flex-col gap-5 border-2 border-double border-[#9b804e] p-2'>


    <h1 className='forum tracking-wider text-xl hover:text-[#9b804e] whitespace-break-spaces'>{head}</h1>

    
   </section>
  )
}

export default MoreCard