import React, { useEffect, useState } from 'react'
import BlogCard from '../component/BlogCard'


const Blogs = () => {
  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then( data =>{
      setBlogs(data)
    })
  },[])
// console.log(blogs)

if(!blogs) return <p className=' text-lg  text-center text-pink-500 mt-6'>Loding...</p>
 
  return (
    <div className=' container mx-auto px-6 mt-10'>
      <h1 className=' text-3xl font-bold border-l-4 border-l-blue-600 pl-5 py-6 mb-2'>All Blog Page</h1>
     <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-5'>
            {blogs.map((blog)=>(
       
        <BlogCard key={blog.id} blog={blog}/>
      ))}
     </div>
    </div>
  )
}

export default Blogs