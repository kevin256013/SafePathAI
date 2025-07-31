import React from 'react'
import { Link } from 'react-router-dom'
import { PiGavelFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";

const HomePage = () => {
  return (
        <div className='h-screen flex flex-col items-center bg-beige'>
            <div className='relative flex flex-col items-center justify-center bg-teal-900 h-60 w-screen'>

                <div className='text-center text-white font-bold text-3xl pb-12'>
                <h1>You're Not Alone.</h1>
                <h1>We're Here To Help.</h1>
                </div>
                <Link to="Chat"className='pb-10'>
                <button className='bg-salmon hover:bg-lightsalmon text-white font-bold py-2 px-4 rounded-lg'>Talk to SafePath AI</button>
                </Link>

            </div>

            <div className='flex flex-col items-center absolute h-96 w-96 top-52 rounded-lg bg-lightbeige'>

                <div className='m-5'>
                <h3>Hi, I'm SafePath.</h3>
                <h3>How can I help you today?</h3>
                </div>

                <div className='m-5 text-teal-800 font-semibold'>
                <div className='flex items-center bg-teal-300 border-teal-800 border-2 border-solid rounded-md py-2 px-2 mb-2'>
                    <div className='pr-3'>
                    <PiGavelFill />
                    </div>
                    <Link to="/Chat">
                        <p>I need to know my rights</p>
                    </Link>
                </div>
                <div className='flex items-center bg-teal-300 border-teal-800 border-2 border-solid rounded-md py-2 px-2 mb-2'>
                    <div className='pr-3'>
                    <FaHeart />
                    </div>
                    <Link to="/Chat">
                        <p>I need emotional support</p>
                    </Link>
                </div>
                <div className='flex items-center bg-teal-300 border-teal-800 border-2 border-solid rounded-md py-2 px-2 mb-2'>
                    <div className='pr-3'>
                    <FaBookOpen />
                    </div>
                    <Link to="/Chat">
                        <p>
                            I want to learn about <br/>
                            available resources
                        </p>
                    
                    </Link>
                </div>
                </div>

                <div className='flex flex-col items-center text-teal-800'>
                <div className='py-1'>
                    <p>Basic Rights To Know</p>
                </div>
                <div>
                    <p>Local Organizations</p>
                </div>

                </div>

            </div>
            
            {/* <AskForm/> */}
        </div>
  )
}

export default HomePage
