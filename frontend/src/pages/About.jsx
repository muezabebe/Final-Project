import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about} alt='about us' className='w-full max-w-[330px] max-h-[356px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Beat the market with our enterprise feature set. See our latest digital commerce releases. Create unforgettable customer experiences with unmatched digital commerce features. </p>
          <p>The message is that e-commerce is some kind of “passive” income business. A business where you decide to sell things online while you drink pina coladas on the ...</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Tigray ecommerce, we are committed to pushing the boundaries of style and innovation. We seek to empower individuals through high-quality, sustainable fashion that respects our planet and those who inhabit it.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm  mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We supply highly qualified products for our stake holders and we are committed to pushing the boundaries of style and innovation. We seek to empower individuals through high-quality, sustainable fashion that respects our planet and those who inhabit it.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Consumers are known for having a deep appreciation for simplicity. Many of their decisions during the customer lifecycle revolve around their ability to easily navigate experiences.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Chewy: We exceed expectations by anticipating customer needs</p>
         </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About