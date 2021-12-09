import DebugMenu from '../components/organisms/DebugMenu';

const Home = ({
  userTypes,
  userType,
  setUserType
}) => {
  return (
    <>
      <DebugMenu
        userTypes={userTypes}
        userType={userType}
        setUserType={setUserType}
      />
    </>
  );
};

export default Home;
