import { Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Logo from '../resources/Logo';
import NavbarTabs from './NavbarTabs';
import NavbarButton from './NavbarButton';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  let location = useLocation();
  let history = useHistory();

  return (
    <>
      <nav className="fixed top-0 bg-white w-full h-16 border-t md:border-t-0 border-gray-100 shadow-sm flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex">
          <div className="flex-1 inline-flex items-center justify-begin">
            <div className="flex-1 inline-flex md:hidden items-center justify-begin">

            </div>
            <div className="flex-grow flex items-center justify-center">
              <Logo className="w-36 h-12 fill-current" />
            </div>
            <div className="flex-1 hidden md:flex justify-between md:justify-evenly space-x-2 md:space-x-6">
              <NavbarTabs />
            </div>
            <div className="flex-1 inline-flex items-center justify-end">
              <NavbarLink label="Log in" path="/login" />
              <NavbarLink label="Sign up" path="/signup" />
            </div>
          </div>
        </div>
      </nav>
      <nav className="flex md:hidden items-center justify-between space-x-2 md:space-x-6 fixed bottom-0 bg-white w-full h-16 border-t border-gray-200 shadow-sm">
        <NavbarTabs />
      </nav>
    </>
  );
};

export default Navbar;
