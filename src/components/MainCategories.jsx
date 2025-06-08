import React from 'react'
import { Link } from 'react-router-dom'

const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-2xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 '>
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link to="/posts" 
          className='bg-blue-800 text-white rounded-full px-4 py-2'>
          All posts
        </Link>

        <Link to="/posts?cat=web-design" 
          className='bg-gray-100 text-gray-800 hover:bg-blue-800 hover:text-white rounded-full px-4 py-2'>
          Web Design
        </Link>

        <Link to="/posts?cat=development" 
          className='bg-gray-100 text-gray-800 hover:bg-blue-800 hover:text-white rounded-full px-4 py-2'>
          Development
        </Link>

        <Link to="/posts?cat=database" 
          className='bg-gray-100 text-gray-800 hover:bg-blue-800 hover:text-white rounded-full px-4 py-2'>
          DataBase
        </Link>

        <Link to="/posts?cat=search-engine" 
          className='bg-gray-100 text-gray-800 hover:bg-blue-800 hover:text-white rounded-full px-4 py-2'>
          Search Engines
        </Link>

        <Link to="/posts?cat=marketing" 
          className='bg-gray-100 text-gray-800 hover:bg-blue-800 hover:text-white rounded-full px-4 py-2'>
          Marketing
        </Link>
      </div>
      <span className='text-xl font-medium '>|</span>

      {/* search */}
      <div>
        <input
          type="text"
          placeholder="Search a post"
          className="px-3 py-1 border border-gray-300 rounded-full text-sm outline-none"
        />
      </div>
    </div>
  )
}

export default MainCategories
