import React from 'react'

const PriceTable = () => {
  return (
    <section className=' h-auto bg-[#FCF9EF] p-10 '>
        <h1 className='text-4xl md:text-6xl forum text-center text-[#3d3931] '>Pricing</h1>
        <div className=' w-full md:w-[50%] lg:w-[50%] mt-10 h-full m-auto lora '>
            <h1 className='text-2xl md:text-3xl mb-5 tracking-wider forum font-bold text-[#3d3931] '>EUROPEAN PLAN <br className='lg:hidden md:hidden'/> <span className=' text-base md:text-xl '>(Without Breakfast)</span> </h1>
            <table className='w-full text-center text-base md:text-lg lg:text-2xl' >
               <thead>
               <tr className='h-10 bg-[#9B804E] text-white '>
                    <th rowSpan={2} className='border-2'>ROOM TYPE</th>
                    <th colSpan={2} className='border-2'>OCCUPANCY</th>
                </tr>
                <tr className='h-10 bg-[#9B804E] text-white'>
                    
                    <td className='border-2'>Single</td>
                    <td className='border-2 '>Double</td>
                </tr>
               </thead>
               <tbody>
                <tr className='h-10 text-[#9B804E]'>
                    <td className='border-2 bg-[#9B804E] text-white'>Grand Heritage</td>
                    <td className='border-2 font-bold'>₹2000/-</td>
                    <td className='border-2 font-bold'>₹2200/-</td>
                </tr>
                <tr className='h-10 text-[#9B804E]'>
                    <td className='border-2 bg-[#9B804E] text-white '>Grand Royal</td>
                    <td className='border-2 font-bold'>₹1800/-</td>
                    <td className='border-2 font-bold'>₹2000/-</td>
                </tr>
                <tr className='h-10 text-[#9B804E]'>
                    <td className='border-2 bg-[#9B804E] text-white'>Deluxe</td>
                    <td className='border-2 font-bold'>₹1600/-</td>
                    <td className='border-2 font-bold'>₹1800/-</td>
                </tr>
                </tbody>
            </table>
            <p className='mt-2 text-lg'>Exta Person:- ₹500/-</p>
        </div>



        <div className=' w-full md:w-[50%] lg:w-[50%] h-full m-auto mt-20 lora'>
            <h1 className='text-2xl md:text-3xl mb-5 forum font-bold text-[#3d3931] tracking-wider '>CONTINENTAL PLAN  <br className='lg:hidden md:hidden'/> <span className=' text-base md:text-xl '>(With Breakfast)</span> </h1>
            <table className='w-full text-center text-base md:text-lg lg:text-2xl' >
              <thead>
                <tr className='h-10 bg-[#9B804E] text-white'>
                    <th rowSpan={2} className='border-2'>ROOM TYPE</th>
                    <th colSpan={2} className='border-2'>OCCUPANCY</th>
                </tr>
                <tr className='h-10 bg-[#9B804E] text-white '>
                    
                    <td className='border-2'>Single</td>
                    <td className='border-2 '>Double</td>
                </tr>
                </thead>
                <tbody>
                <tr className='h-10 text-[#9B804E]'>
                    <td className='border-2 bg-[#9B804E] text-white'>Grand Heritage</td>
                    <td className='border-2 font-bold'>₹2300/-</td>
                    <td className='border-2 font-bold'>₹2500/-</td>
                </tr>
                <tr className='h-10 text-[#9B804E]'>
                    <td className='border-2 bg-[#9B804E] text-white'>Grand Royal</td>
                    <td className='border-2 font-bold'>₹2100/-</td>
                    <td className='border-2 font-bold'>₹2300/-</td>
                </tr>
                <tr className='h-10 text-[#9B804E]'>
                    <td className='border-2 bg-[#9B804E] text-white'>Deluxe</td>
                    <td className='border-2 font-bold'>₹1900/-</td>
                    <td className='border-2 font-bold'>₹2100/-</td>
                </tr>
                </tbody>
            </table>
            <p className='mt-2 text-lg'>Exta Person:- ₹700/-</p>
        </div>
    </section>
  )
}

export default PriceTable