import { Link } from 'react-router-dom';

const NavbarLink = ({ label, icon, path }) => {
  return (
    <Link to={path} className="flex items-center space-x-1 text-gray-500 hover:text-green-500 px-2 md:px-4 py-2 rounded-xl transition ease-in-out duration-300">
      <span className="font-semibold tracking-wide mb-1">
        {label}
      </span>
    </Link>
  );
};

export default NavbarLink;
