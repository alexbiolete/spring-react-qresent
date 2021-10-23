import { useHistory } from 'react-router-dom';

const NotFound = () => {
  let history = useHistory();

  return (
    <div className="w-full min-h-screen h-full flex items-center justify-center">
      <div className="px-10 py-8 rounded-3xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center space-y-8 select-none">
        <div className="flex flex-col items-center space-y-5">
          <span className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            {'Error 404'}
          </span>
          <span className="uppercase font-extralight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {'Page not found.'}
          </span>

        </div>
        <button className="flex items-center space-x-1 transition ease-in-out duration-300 transform hover:scale-125 text-gray-700 dark:text-gray-300" onClick={history.goBack}>
          <span className="w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="font-medium tracking-wide text-xl align-text-top">
            {'Back'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
