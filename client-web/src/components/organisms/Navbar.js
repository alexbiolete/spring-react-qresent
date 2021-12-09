import { Link } from "react-router-dom";
import Logo from '../../resources/Logo';
import NavbarTabs from '../molecules/NavbarTabs';

const Navbar = ({ userType, authenticatedUserName }) => {
  return (
    <>
      <nav className="z-50 fixed top-0 bg-white w-full h-16 border-t md:border-t-0 border-gray-100 shadow-sm flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex">
          <div className="flex-1 inline-flex items-center justify-begin">
            <div className="flex-1 inline-flex md:hidden items-center justify-begin">

            </div>
            <div className="flex-1 flex items-center">
              <Logo className="w-36 h-12 fill-current" />
            </div>
            <div className="flex-1 hidden md:flex justify-between md:justify-evenly space-x-2 md:space-x-6">
              <NavbarTabs userType={userType} />
            </div>
            {/* TO DO: Responsive navbar menu */}
            <div className="flex-1 inline-flex items-center justify-end">
              {/* <NavbarLink label="Log in" path="/login" />
              <NavbarLink label="Sign up" path="/signup" /> */}
              <Link
                className="flex items-center space-x-1 focus:outline-none border-2 border-transparent md:hover:border-gray-200 px-2 py-1 rounded-full text-gray-600 hover:text-gray-700 transition ease-in-out duration-500"
                to="/login"
              >
                <span className="bg-transparent rounded-full overflow-hidden">
                  {/* ../Resources/svg/user.svg */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="hidden md:block font-medium text-sm">
                  {authenticatedUserName}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="z-50 flex md:hidden items-center justify-between space-x-2 md:space-x-6 fixed bottom-0 bg-white w-full h-16 border-t border-gray-200 shadow-sm">
        <NavbarTabs />
      </nav>
    </>
  );
};

export default Navbar;
