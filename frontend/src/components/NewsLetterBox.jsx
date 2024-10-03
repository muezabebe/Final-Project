import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler=(event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className=' text-2xl font-medium text-gray-800'>Subscribe now and get 20% off discount</p>
      <p className='mt-3 text-gray-400'> This is just for __</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='enter your email' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox