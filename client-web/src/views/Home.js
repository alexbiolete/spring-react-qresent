import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import DebugMenu from '../components/organisms/DebugMenu';

const Home = ({
  userTypes,
  userType,
  setUserType
}) => {
  const [text, setText] = useState("http://localhost:3000/generate-qr");

  useEffect(() => {
    QRCode.toDataURL(text).then(setText);
  }, []);

  return (
    <div className="space-y-4">
      <DebugMenu
        userTypes={userTypes}
        userType={userType}
        setUserType={setUserType}
      />
      <div className="w-full bg-white rounded-lg shadow-sm">
        <div className="flex justify-center">
          <img src={text} className="w-32 h-32" alt="qrcode" />
        </div>
      </div>
    </div>
  );
};

export default Home;
