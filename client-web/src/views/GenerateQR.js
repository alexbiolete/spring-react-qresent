import { useEffect, useState } from 'react';

const GenerateQR = ({ dbApiUrl, attendance, attendances, setAttendances }) => {
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

    if (response.errors !== null) {
      setSuccessfulGeneration(true);
    } else {
      setSuccessfulGeneration(false);
    }

    setAttendances([...attendances, data]);
  }

  return (
    <>
      {successfulGeneration &&
        <div className="w-full min-h-screen flex justify-center items-center bg-white rounded-lg">
          <span className="text-2xl">
            {'Prezența a fost validată cu succes.'}
          </span>
        </div>
      }
    </>
  );
};

export default GenerateQR;
