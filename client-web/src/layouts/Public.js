import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Public = ({ children }) => {
  return (
    <>
      {/* <div className="dark"> */}
      <div>
        <div className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Navbar />
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
