import { Link } from 'react-router-dom';
import Select from 'react-select';

const DebugMenu = ({
  userTypes,
  userType,
  setUserType
}) => {
  return (
    <div className="bg-white px-4 py-3 rounded-lg shadow-sm space-y-2">
      <div className="flex space-x-1">
        <span className="bg-red-200 px-2 py-1 rounded-md uppercase font-medium tracking-wider text-xs text-black">
          {'Debug menu'}
        </span>
        <Link to="/dev" className="-mt-0.5">
          <span className="border border-blue-500 px-2 py-1 rounded-md uppercase font-medium tracking-wider text-xs text-blue-700 transition ease-in-out duration-500 hover:bg-blue-100">
            {'Dev URLs'}
          </span>
        </Link>
        <Link to="/validate-qr" className="-mt-0.5">
          <span className="border border-blue-500 px-2 py-1 rounded-md uppercase font-medium tracking-wider text-xs text-blue-700 transition ease-in-out duration-500 hover:bg-blue-100">
            {'Validate QR'}
          </span>
        </Link>
      </div>
      {/* <div className="flex items-center space-x-2">
        <span>
          {'Choose user type:'}
        </span>
        <Select
          id="userType"
          name="userType"
          title="User type"
          value={userType}
          onChange={setUserType}
          options={userTypes}
          className="border-b-2 border-gray-300 hover:border-blue-500 transition ease-in-out duration-300"
        />
      </div> */}
    </div>
  );
};

export default DebugMenu;
