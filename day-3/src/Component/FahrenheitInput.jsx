import React from 'react'

const Fahrenheit = ({fahrenheit,ontemperaturechange}) => {
  return (
     <div className='my-4'>
      <label className=' block font-semibold text-start mb-1 text-gray-300'> Fahrenheit:</label>
    <input value={fahrenheit} onChange={(e)=> ontemperaturechange(e.target.value)} type='text' name='text' placeholder='32° f' className=' border border-gray-500 w-full py-2 px-4 rounded-md '/>
    </div>
  )
}

export default Fahrenheit