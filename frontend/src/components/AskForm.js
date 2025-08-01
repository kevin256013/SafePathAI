import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AskForm = () => {
  const [question, setQuestion] = useState('');

  const navigate = useNavigate();

  const handleAsk = async (event) => {
    event.preventDefault();
    if (question.trim() !== '') {
      navigate('/Chat', {state: { question }});
      setQuestion('');
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
        </div>

      
    </div>
  )
}

export default AskForm
