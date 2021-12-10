import PropTypes from 'prop-types';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

const Auth = ({
  children,
  authenticatedUserName,
  setAuthenticatedUserName,
  refreshPage
}) => {
  return (
    <>
      {/* <div className="dark"> */}
      <div>
        <div className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Navbar
            authenticatedUserName={authenticatedUserName}
            setAuthenticatedUserName={setAuthenticatedUserName}
            refreshPage={refreshPage}
          />
          <main className="max-w-7xl w-full mt-16 mb-16 md:mb-0 mx-auto">
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

Auth.propTypes = {
  children: PropTypes.any,
};

export default Auth;
