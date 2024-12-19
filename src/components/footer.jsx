import React from 'react'

export default function Footer() {
  return (
    <div>
        

        <footer className=" bottom-0 left-0 w-full bg-white">
          <h2 id='contact' className='pl-10 text-3xl py-5 font-bold'>Contact</h2>
          <ul className='px-10'>
            <li>
              <a href="tel:+998912854691" className='text-xl flex gap-3'><i class="fa-solid fa-phone flex items-center"></i>(91) 285-46-91</a>
            </li>
            <li>
              <a href="https://eminovozodbek903@gmail.com" target='_blank' className='text-xl flex gap-3'><i class="fa-solid fa-envelope flex items-center"></i>eminovozodbek903@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/Ozodbek1129" target='_blank' className='text-xl flex gap-3'><i class="fa-brands fa-github flex items-center"></i>github.com/Ozodbek1129</a>
            </li>
            <li>
              <a href="https://t.me/bek2oo2" target='_blank' className='text-xl flex gap-3'><i class="fa-brands fa-telegram flex items-center"></i>@bek2oo2</a>
            </li>
            
          </ul>      
        </footer>

    </div>
  )
}
