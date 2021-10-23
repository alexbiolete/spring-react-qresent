import Logo from '../resources/Logo';

const Home = () => {
  return (
    <>
      <header className="w-full min-h-screen h-full flex justify-center items-center">
        <div className="p-5 rounded-3xl bg-gray-200 dark:bg-gray-800 transition ease-in-out duration-300 hover:shadow-2xl dark:hover:shadow-none transform hover:scale-150 cursor-pointer">
          <Logo className="w-96 h-32 fill-current" />
        </div>
      </header>
    </>
  );
};

export default Home;
