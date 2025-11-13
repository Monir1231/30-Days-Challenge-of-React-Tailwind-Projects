import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setCount] = useState(0)
    const [isRunning,setisRunning] = useState(false)
    useEffect(()=>{
      let timer
      if(isRunning){
        timer = setInterval(() => {
            setCount((prv)=> prv + 1)
        }, 1000);
      }
      return () => clearInterval(timer)
    },[isRunning])

// start 

const handleStart = () => setisRunning(true)
const handleStop = () => setisRunning(false)
const handleReset = () => setCount(0)
  return (
    <div className=' min-h-screen  flex items-center justify-center bg-[url(san-francisco-1893985_1280.jpg)] bg-center bg-cover  '>
        <div className='max-w-sm p-6 rounded-lg shadow-lg text-center bg-[url(my.jpg)] bg-center bg-cover '>
            <h2 className=' text-2xl font-bold py-5 text-white/85'>Timer: {count}s</h2>
            <div className=' space-x-2.5 mb-2'>
                <button onClick={handleStart} className=' py-2 px-4 rounded-md bg-green-500 text-white/90  font-medium hover:bg-green-600 hover:cursor-pointer'>Start</button>
                 <button onClick={handleStop} className=' py-2 px-4 rounded-md bg-red-500  text-white/90   font-medium hover:bg-red-600 hover:cursor-pointer'>Stop</button>
                  <button  onClick={handleReset} className=' py-2 px-4 rounded-md bg-gray-500 text-white/90 font-medium hover:bg-gray-600 hover:cursor-pointer'>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Timer