import React from 'react'
import { Link } from 'react-router'

const BlogCard = ({blog}) => {
    
  return (
    
    <div className=' bg-white shadow-md rounded-md p-5 cursor-pointer hover:-translate-y-3 transition-all duration-200'>
        <h2 className=' text-2xl font-semibold mb-2'>{blog.title}</h2>
        <p className=' text-gray-600 truncate mb-4'>{blog.body}</p>
        <Link to={`/blogs/${blog.id}`} className=' inline-block p-1 rounded text-blue-400'>Read Moro ⇒</Link>
    </div>
  )
}

export default BlogCard