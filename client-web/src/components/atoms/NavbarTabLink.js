import { Link, useLocation } from 'react-router-dom';

const NavbarTabLink = ({ label, icon, path }) => {
  let location = useLocation();

  return (
    <Link to={path} className="flex-1">
      <p className={`flex flex-col items-center space-y-1 tracking-tighter
        ${"/".concat(location.pathname.split('/')[1]) !== path ?
          'text-gray-500 hover:text-gray-700 transition ease-in-out duration-300'
        :
          'text-black'
        }
        px-2 py-2 rounded-xl
      `}>
        <span className="relative">
          {icon}
        </span>
        <span className="font-semibold text-sm">
          {label}
        </span>
      </p>
    </Link>
  );
};

export default NavbarTabLink;
