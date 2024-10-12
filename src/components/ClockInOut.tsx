import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import useSound from 'use-sound';

const ClockInOut: React.FC = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [playBeep] = useSound('/sounds/beep.mp3');

  const handleNumberClick = (number: string) => {
    playBeep();
    if (employeeId.length < 4) {
      setEmployeeId(prev => prev + number);
    }
  };

  const handleClear = () => {
    setEmployeeId('');
    setError('');
  };

  const handleEnter = () => {
    if (employeeId.length === 4) {
      // TODO: Implement actual employee validation
      const isValidEmployee = Math.random() < 0.8; // 80% chance of being valid for demo purposes
      if (isValidEmployee) {
        navigate(`/employee/${employeeId}`);
      } else {
        setError('Invalid employee ID. Please try again.');
      }
    } else {
      setError('Please enter a 4-digit employee ID.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="text-6xl font-bold mb-8 flex items-center">
        <Clock className="mr-4" size={48} />
        <h1>TimeTrack Pro</h1>
      </div>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 w-full max-w-4xl flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 flex items-center justify-center">
          <img src="https://i.imgur.com/EvVWYgL.png" alt="Fat Freddy's Catering" className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <input
            type="password"
            value={employeeId}
            readOnly
            className="w-full text-2xl font-bold text-center mb-4 p-2 rounded"
            placeholder="••••"
            maxLength={4}
          />
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'Clear', 0, 'Enter'].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (typeof item === 'number') handleNumberClick(item.toString());
                  else if (item === 'Clear') handleClear();
                  else if (item === 'Enter') handleEnter();
                }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded text-xl transition duration-200"
              >
                {item}
              </button>
            ))}
          </div>
          {error && (
            <div className="text-red-500 text-center mt-4">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClockInOut;