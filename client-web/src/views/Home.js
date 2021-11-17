const Home = () => {
  return (
    <>
      <header className="w-full min-h-screen h-full flex justify-center items-center">
        <div className="p-10 rounded-3xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center space-y-4 transition ease-in-out duration-300 hover:shadow-2xl dark:hover:shadow-none md:transform hover:scale-150 cursor-not-allowed">
          <div className="flex flex-col lg:flex-row space-y-2 space-y-2 sm:space-y-4 md:space-y-0 lg:space-x-4 xl:space-x-8">
            <a
              href="https://github.com/alexbiolete/spring-react-qresent"
              target="_blank"
              rel="noreferrer"
              className="relative text-gray-700 dark:text-gray-300"
            >
              <span className="absolute w-6 h-6">
                <title>Back</title>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="bg-gray-200 dark:bg-gray-800 flex items-center space-x-1 transition ease-in-out duration-300 transform hover:translate-x-6">
                <span className="block w-6 h-6 fill-current">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
                    <title>GitHub</title>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <span className="select-none">
                  {'Repository'}
                </span>
              </div>
            </a>
            <a
              href="https://ocw.cs.pub.ro/courses/mps/proiect/proiect-1"
              target="_blank"
              rel="noreferrer"
              className="relative text-gray-700 dark:text-gray-300"
            >
              <span className="absolute w-6 h-6">
                <title>Back</title>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="bg-gray-200 dark:bg-gray-800 flex items-center space-x-1 transition ease-in-out duration-300 transform hover:translate-x-6">
                <span className="block w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" role="img">
                    <title>Document</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <span className="select-none">
                  {'Requirements'}
                </span>
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
