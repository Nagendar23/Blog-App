import React from 'react'
import Image from '../components/Image'
import { Link } from 'react-router-dom'  // <- You must import Link
import PostMenuActions from '../components/PostMenuActions'
import Search from '../components/Search';
import Comments from '../components/Comments';

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className="flex gap-8">
        {/* Left Column */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className='text-xl md:3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor </h1>
          <div className="flex items-center gap-2 text-sm text-gray-800">
            <span>Written By</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>On</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus incidunt ipsam ut, dolor nostrum obcaecati. Natus error voluptas nesciunt quibusdam dolorum, rem in repellendus velit saepe maiores voluptatibus perspiciatis.</p>
        </div>

        {/* Right Column */}
        <div className="hidden lg:block w-2/5">
          <Image src='postImg.jpeg'  w='600' className='rounded-2xl'/>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam odit adipisci, dolorum architecto esse eum tempore, laudantium nobis blanditiis, quam obcaecati nesciunt omnis cumque optio commodi sapiente voluptate temporibus.lorem</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam odit adipisci, dolorum architecto esse eum tempore, laudantium nobis blanditiis, quam obcaecati nesciunt omnis cumque optio commodi sapiente voluptate temporibus.lorem</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam odit adipisci, dolorum architecto esse eum tempore, laudantium nobis blanditiis, quam obcaecati nesciunt omnis cumque optio commodi sapiente voluptate temporibus.lorem</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam odit adipisci, dolorum architecto esse eum tempore, laudantium nobis blanditiis, quam obcaecati nesciunt omnis cumque optio commodi sapiente voluptate temporibus.lorem</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam odit adipisci, dolorum architecto esse eum tempore, laudantium nobis blanditiis, quam obcaecati nesciunt omnis cumque optio commodi sapiente voluptate temporibus.lorem</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatem mollitia nemo sapiente impedit, voluptatum nulla porro sunt tenetur cupiditate eaque sit deserunt quia. Voluptas eveniet rem corrupti magni cupiditate!
          Modi laborum doloribus nisi consectetur asperiores libero tempore beatae architecto! Officia dolorem facere illum corporis amet dolores magnam consectetur adipisci expedita reiciendis nam praesentium maxime a, suscipit, beatae voluptates non!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores cupiditate omnis vel, iusto iste, libero perspiciatis corrupti ipsum commodi, quas dolores dolorum sapiente quam tempora! Est dignissimos dicta tempore.
          Similique quibusdam nemo unde qui iste perspiciatis in quo labore, officiis libero alias sequi quae debitis animi at expedita aut voluptas praesentium totam ipsa tenetur nulla blanditiis. Dolor, fugit numquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores cupiditate omnis vel, iusto iste, libero perspiciatis corrupti ipsum commodi, quas dolores dolorum sapiente quam tempora! Est dignissimos dicta tempore.
          Similique quibusdam nemo unde qui iste perspiciatis in quo labore, officiis libero alias sequi quae debitis animi at expedita aut voluptas praesentium totam ipsa tenetur nulla blanditiis. Dolor, fugit numquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores cupiditate omnis vel, iusto iste, libero perspiciatis corrupti ipsum commodi, quas dolores dolorum sapiente quam tempora! Est dignissimos dicta tempore.
          Similique quibusdam nemo unde qui iste perspiciatis in quo labore, officiis libero alias sequi quae debitis animi at expedita aut voluptas praesentium totam ipsa tenetur nulla blanditiis. Dolor, fugit numquam.</p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=' mb-4 text-sm font-medium'>Author</h1>
          <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-8 ">
            <Image src='userImg.jpeg' className='w-12 h-12 rounded-full object-cover' w='48' h='48' />
            <Link className='text-blue-800'>John Doe</Link>
          </div>
            <p className='text-sm text-gray-600 '>Lorem is laboriosam placeat ullam. Vero nisi  maxime!</p>
            <div className='flex gap-2'>
              <Link>
              <Image src='facebook.svg'/>
              </Link>
              <Link>
              <Image src='instagram.svg'/>
              </Link>
              </div>
          </div>
          <PostMenuActions/>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Categories </h1>
          <div className="flex flex-col gap-2 text-sm ">
            <Link className='underline'>All </Link>
            <Link className='underline' to='/'>Web Design </Link>
            <Link className='underline' to='/'>Development </Link>
            <Link className='underline' to='/'>Databases</Link>
            <Link className='underline' to='/'>Search Engines</Link>
            <Link className='underline' to='/'>Marketing</Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search </h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>
  )
}

export default SinglePostPage
