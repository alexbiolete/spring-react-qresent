import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import DebugMenu from '../components/organisms/DebugMenu';

const Home = ({
  userTypes,
  userType,
  setUserType
}) => {
  const [text, setText] = useState("http://www.google.ro/");

  useEffect(() => {
    QRCode.toDataURL(text).then((setText));
  }, []);

  return (
    <>
      <img src={text} alt="qrcode" />
      <DebugMenu
        userTypes={userTypes}
        userType={userType}
        setUserType={setUserType}
      />
    </>
  );
};

export default Home;
