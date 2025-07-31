import React from 'react'
import AskForm from '../components/AskForm'


const chatPage = () => {
  return (
    <div className='min-h-screen flex justify-center  items-center bg-beige'>

        <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center text-center text-white font-serif text-xl px-6 py-4 relative w-[600px] h-[400px] max-w-[90vw] bg-brown border-solid border-4 box-border border-darkbrown rounded-sm shadow-lg overflow-hidden'>
                <p className='break-words'>Message</p>
            </div>
            <div className='w-[20px] h-[150px] bg-darkbrown rounded-sm -mt-5 origin-top shadow-md'>

            </div>
        </div>

        <div>
            <AskForm/>
        </div>
      
    </div>
  )
}

export default chatPage
