import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-evenly p-3 '>
      <h1 className='text-3xl md:text-3xl text-orange-400 font-bold'>Abiya & Co.</h1>
      <div className='hidden md:flex items-center gap-10'>
        <Link href='/' className='text-white text-lg hover:text-orange-400 hover:font-bold'>Home</Link>
        <Link href='/' className='text-white text-lg hover:text-orange-400 hover:font-bold'>Services</Link>
        <Link href='/' className='text-white text-lg hover:text-orange-400 hover:font-bold'>About Us</Link>
        <Link href='/' className='text-white text-lg hover:text-orange-400 hover:font-bold'>Blogs</Link>
        <Link href='/' className='text-white text-lg hover:text-orange-400 hover:font-bold'>Contact Us</Link>
      </div>
     <Link href='/' className='text-white bg-orange-400 p-2 rounded-full text-lg hover:text-slate-900 hover:bg-orange-500 hover:shadow-2xl'>Our Professionals</Link>
    </div>
  )
}

export default Navbar