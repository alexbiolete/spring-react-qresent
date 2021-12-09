import PropTypes from 'prop-types';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

const Public = ({ children, userType, authenticatedUserName, setAuthenticatedUserName }) => {
  return (
    <>
      {/* <div className="dark"> */}
      <div>
        <div className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Navbar userType={userType} authenticatedUserName={authenticatedUserName} setAuthenticatedUserName={setAuthenticatedUserName} />
          <main className="max-w-7xl w-full mt-16 mx-auto">
            <div className="p-4">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

Public.propTypes = {
  children: PropTypes.any,
};

export default Public;
