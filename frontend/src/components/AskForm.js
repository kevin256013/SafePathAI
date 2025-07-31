import React from 'react'
import axios from 'axios';
import { useState } from 'react';


const AskForm = () => {

const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleAsk = async (event) => {
    event.preventDefault();
    setAnswer('');
    setError('');

    try {
      
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (response.ok) {
        setAnswer(data.answer);
      } else {
        setError(data.error || 'Something went wrong');
      }

    } catch (error) {
      setError('Error connecting to the server.');
    }
  };


  return (
    <div>
        <div>
            <div className='flex items-center fixed bottom-0 left-0 right-0 p-4 bg-gray-800 border-t border-gray-700'>
              <textarea
              className='w-full p-2 rounded-lg bg-gray-700 text-white resize-none'
              type='text' 
              placeholder='Type your question here...'
              rows="1"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              ></textarea>
              
              <button type='submit' className='ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700' onClick={handleAsk}>Chat</button>
            </div>

            <div>
            {
                answer && (
                <>
                    <h3>Answer:</h3>
                    <p>{answer}</p>
                </>
                )
            }
            {
                error && (
                <>
                    <h3>Error:</h3>
                    <p>{error}</p>
                </>
                )
            }
            </div>
        </div>

      
    </div>
  )
}

export default AskForm
