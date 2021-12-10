import { useEffect, useState } from 'react';

const ValidateQR = ({ dbApiUrl, attendance, attendances, setAttendances }) => {
  const [successfulGeneration, setSuccessfulGeneration] = useState(false);

  useEffect(() => {
    generateQR();
  }, []);

  const generateQR = async () => {
    const response = await fetch(`${dbApiUrl}/attendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(attendance)
    });
    const data = await response.json();

    console.log(response);
    console.log(data);

    if (response.status < 400) {
      setSuccessfulGeneration(true);
    } else {
      setSuccessfulGeneration(false);
    }

    setAttendances([...attendances, data]);
  }

  return (
    <div className="w-full px-6 py-4 bg-white rounded-lg shadow-sm">
      {successfulGeneration ? (
        <div className="flex justify-center items-center space-x-3 md:space-x-1">
          <span className="text-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span className="text-lg md:text-2xl">
            {'Attendance was successfully registered.'}
          </span>
        </div>
      ) : (
        <div className="flex justify-center items-center space-x-3 md:space-x-1">
          <span className="text-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span className="text-lg md:text-2xl">
            {'Attendance was not registered.'}
          </span>
        </div>
      )}
    </div>
  );
};

export default ValidateQR;
