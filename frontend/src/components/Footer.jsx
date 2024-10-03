import React from 'react'
import { assets } from '../assets/assets';
const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.ecommerce} className='mb-5 w-32' alt=" logo" />
            <p className='w-full md:w-2/3 text-gray-600'>This is for clothes</p>
        </div>
        <div >
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
             <li>Home</li>
             <li>About us</li>
             <li>Delivery</li>
             <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+251-924-118-022</li>
            <li>Contact@info.com</li>
          </ul>
        </div>
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@ info.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer