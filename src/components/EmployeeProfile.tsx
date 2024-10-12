import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, LogIn, LogOut, ArrowLeft, User } from 'lucide-react';

interface TimeEntry {
  date: string;
  clockIn: string;
  clockOut: string;
  hoursWorked: number;
}

const EmployeeProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [employeeName, setEmployeeName] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // TODO: Fetch actual employee data and time entries from the backend
    setEmployeeName('John Doe'); // Replace with actual employee name fetch
    setTimeEntries([
      { date: '2023-04-01', clockIn: '09:00', clockOut: '17:00', hoursWorked: 8 },
      { date: '2023-04-02', clockIn: '08:30', clockOut: '16:30', hoursWorked: 8 },
      { date: '2023-04-03', clockIn: '09:15', clockOut: '17:15', hoursWorked: 8 },
    ]);
  }, [id]);

  const handleClockIn = () => {
    setIsClockedIn(true);
    // TODO: Implement actual clock-in logic
  };

  const handleClockOut = () => {
    setIsClockedIn(false);
    // TODO: Implement actual clock-out logic
  };

  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hoursWorked, 0);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-4 flex items-center text-white hover:text-gray-200"
      >
        <ArrowLeft className="mr-2" /> Back to Clock-In
      </button>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <User className="mr-3" size={32} />
            {employeeName}
          </h1>
          <div className="text-xl text-gray-600 flex items-center">
            <Clock className="mr-2" />
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg mb-6 text-xl font-semibold">
          {getGreeting()}, {employeeName.split(' ')[0]}!
        </div>
        <div className="mb-6">
          {isClockedIn ? (
            <button
              onClick={handleClockOut}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full transition duration-300"
            >
              <LogOut className="mr-2" /> Clock Out
            </button>
          ) : (
            <button
              onClick={handleClockIn}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full transition duration-300"
            >
              <LogIn className="mr-2" /> Clock In
            </button>
          )}
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Current Pay Period</h2>
        <div className="overflow-x-auto">
          <table className="w-full mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Clock In</th>
                <th className="p-3 text-left">Clock Out</th>
                <th className="p-3 text-left">Hours Worked</th>
              </tr>
            </thead>
            <tbody>
              {timeEntries.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{entry.date}</td>
                  <td className="p-3">{entry.clockIn}</td>
                  <td className="p-3">{entry.clockOut}</td>
                  <td className="p-3">{entry.hoursWorked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-xl font-semibold text-gray-800">
          Total Hours: {totalHours}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;