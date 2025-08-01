import { Link, useNavigate } from 'react-router-dom'
import { PiGavelFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";


const HomePage = () => {
    const navigate = useNavigate();
    
    const handleClick = async(question) => {

        try {
        
            const response = await fetch('http://localhost:5000/ask', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });

            const data = await response.json();

            navigate('/Chat', {state: { response: data.answer || "Something went wrong"}});


            } catch (error) {
                navigate('/Chat', {state: {response: "Error connecting to the server"}});
            }
    }

  return (
        <div className='h-screen flex flex-col items-center bg-beige'>
            <div className='relative flex flex-col items-center justify-center bg-teal-900 h-60 w-screen'>

                <div className='text-center text-white font-bold text-3xl pb-12'>
                <h1>You're Not Alone.</h1>
                <h1>We're Here To Help.</h1>
                </div>
                <Link to="/Chat"className='pb-10'>
                <button className='bg-salmon hover:bg-lightsalmon text-white font-bold py-2 px-4 rounded-lg'>Talk to SafePath AI</button>
                </Link>

            </div>

            <div className='flex flex-col items-center absolute h-96 w-96 top-52 rounded-lg bg-lightbeige'>
                <div className='relative size-20'>
                    <img className='absolute top-3 bottom-0 -left-36 right-0'   src='/images/safepath-logo.png' alt='safepath-logo'/>
                </div>

                <div className='m-5'>
                <h3>Hi, I'm SafePath.</h3>
                <h3>How can I help you today?</h3>
                </div>

                <div className='m-5 text-teal-800 font-semibold'>
                <div className='flex items-center bg-teal-300 border-teal-800 border-2 border-solid rounded-md py-2 px-2 mb-2'>
                    <div className='pr-3'>
                    <PiGavelFill />
                    </div>
                    <button onClick={() => handleClick('I need to know my rights')}>
                        <p>I need to know my rights</p>
                    </button>
                </div>
                <div className='flex items-center bg-teal-300 border-teal-800 border-2 border-solid rounded-md py-2 px-2 mb-2'>
                    <div className='pr-3'>
                    <FaHeart />
                    </div>
                    <button onClick={() => handleClick('I need emotional support')}>
                        <p>I need emotional support</p>
                    </button>
                </div>
                <div className='flex items-center bg-teal-300 border-teal-800 border-2 border-solid rounded-md py-2 px-2 mb-2'>
                    <div className='pr-3'>
                    <FaBookOpen />
                    </div>
                    <button onClick={() => handleClick('What scholarships are available for undocumented students?')}>
                        <p>
                            What scholarships are available <br/>
                            for undocumented students?
                        </p>
                    
                    </button>
                </div>

                    <div className='flex items-center bg-teal-300 border-teal-800 border-2 border-solid rounded-md py-2 px-2 mb-2'>
                    <div className='pr-3 '>
                        <MdFamilyRestroom className='size-5'/>
                    </div>
                    <button onClick={() => handleClick('What should I do if a family member is detained by ICE?')}>
                        <p>
                            What should I do if a family <br/>
                            member is detained by ICE?
                        </p>
                    
                    </button>
                </div>

                
                </div>

            </div>
            
        </div>
  )
}

export default HomePage
