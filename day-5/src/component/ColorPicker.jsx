import React, { useState } from 'react'

const ColorPicker = () => {
    const [color,setColor] = useState("#FFFFFF")

    const handleColorChange = (e) =>{
        setColor(e.target.value)
    }
  return (
    <div className='min-h-screen bg-[url(vietnam-9913878_1280.png)] bg-cover bg-center flex flex-col items-center justify-center '>
        <h1 className=' text-white text-2xl font-bold mb-3' >Color Picker</h1>
        <div className='size-[230px] flex justify-center items-center rounded-md border border-amber-50  shadow ' style={{backgroundColor:color}}>
            <p className=' text-base font-semibold text-gray-100'>Selected color: {color}</p>
        </div>
        <div className=' flex flex-col items-center gap-3 mt-3.5'>
            <label className=' text-lg text-white font-semibold block'>Select a color:</label>
            <input className=' size-14 rounded-md' type='color' value={color} onChange={handleColorChange}/>
        </div>
    </div>
  )
}

export default ColorPicker