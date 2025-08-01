import { useEffect, useState } from 'react'
import AskForm from '../components/AskForm'
import { Link, useLocation } from 'react-router-dom'


const ChatPage = () => {

    const location = useLocation();
    const { question, response } = location.state || {};
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // If user comes from homepage links
        if (response && !question) {
            setAnswer(response);
        } 
        // If user come from askForm
        if (question) {
      
            fetch('http://localhost:5000/ask', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.answer) {
                    setAnswer(data.answer);
                } else {
                    setError(data.error || "Something went wrong");
                }
            })
            .catch(() => setError("server error"))
    }
    }, [question, response]);

    return (
    <div className='min-h-screen flex justify-center  items-center bg-beige'>

            <div className='fixed top-0 left-0 flex items-center justify-center m-2'>

                <Link to="/"className='pb-10'>
                    <button className='bg-salmon hover:bg-lightsalmon text-white font-bold py-2 px-4 rounded-lg'>Home</button>
                </Link>
        
            </div>


        <div className='flex flex-col items-center'>

            <div className='flex justify-center items-center text-center text-white font-serif text-xl px-6 py-4 relative w-[600px] h-[400px] max-w-[90vw] bg-brown border-solid border-4 box-border border-darkbrown rounded-sm shadow-lg overflow-hidden'>

                <p className='break-words'>{error ? error : answer}</p>

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

export default ChatPage
