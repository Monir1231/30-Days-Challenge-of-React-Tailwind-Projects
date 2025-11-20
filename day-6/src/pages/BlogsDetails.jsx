import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const BlogsDetails = () => {
    let {id} = useParams()
    // console.log("id:",id)
    const [blog,setBlog] = useState(null)
     useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then( data =>{
          setBlog(data)
        })
      },[])

    //   console.log(blog)
    if(!blog) return<p className=' text-lg font-semibold text-center text-pink-500'>Loding...</p>
  return (
    <div className=' container mx-auto p-6'>
        <h1 className=' text-3xl font-bold my-8 border-b border-blue-500 inline-block'>Blogs Details Page </h1>
        <div className=' bg-white shadow-md max-w-sm rounded-md p-8'>
         <h2 className=' text-2xl font-bold mb-4'> {blog?.title}</h2>
         <p className=' text-gray-700 mb-3'>{blog?.body}</p>
         <Link to={"/"} className=' text-blue-500 mt-4 '> ← Go back</Link>
        </div>
    </div>
  )
}

export default BlogsDetails