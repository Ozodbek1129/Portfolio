import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-around items-center py-10 shadow-md w-full h-6 '>
          <div>
            <a href="/" className='text-3xl font-bold'>Ozodbek</a>
          </div>
          <ul className='flex gap-10'>
            <li>
              <a href="#about" className='text-xl hover:underline'>About</a>
            </li>
            <li>
              <a href="#skills" className='text-xl hover:underline'>Skills</a>
            </li>
            <li>
              <a href="#projects" className='text-xl hover:underline'>Projects</a>
            </li>
            <li>
              <a href="#contact" className='text-xl hover:underline'>Contact</a>
            </li>
            
          </ul>
        </nav>
    </div>
  )
}
