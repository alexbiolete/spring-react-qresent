const ProfileSidebar = ({
  userName,
  userUsername,
  userEmail
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
      <div className="bg-white mx-auto rounded-full shadow-xl w-32 h-32 p-1">
        <div className="bg-gray-100 w-full h-full rounded-full flex justify-center items-center">
          <span className="font-semibold uppercase text-5xl">
            {userName.substring(0, 2)}
          </span>
        </div>
      </div>
      <div>
        <h1 className="font-semibold uppercase text-center text-xl">
          {userName}
        </h1>
        <h2 className="font-light tracking-wider lowercase text-center text-lg">
          {'@'}{userUsername}
        </h2>
      </div>
      <a href={`mailto:${userEmail}`} className="flex items-center space-x-1 p-4 hover:text-gray-500 transition ease-in-out duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="tracking-wide text-sm">
          {userName}
        </span>
      </a>
    </div>
  );
};

export default ProfileSidebar;
