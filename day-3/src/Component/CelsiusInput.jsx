import React from 'react'

const CelsiusInput = ({celsius,ontemperaturechange}) => {
  return (
    <div className='my-4'>
    <label className=' block font-semibold  text-start mb-1 text-gray-300'>Celsius:</label>
    <input value={celsius} onChange={(e)=>ontemperaturechange(e.target.value)} type='text' name='text' placeholder='0° c' className=' border border-gray-400 w-full py-2 px-4 rounded-md focus:border-none'/>
    </div>
  )
}

export default CelsiusInput