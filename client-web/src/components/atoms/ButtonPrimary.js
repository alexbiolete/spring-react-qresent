import PropTypes from 'prop-types';

const ButtonPrimary = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      className="px-2 py-1.5 bg-blue-500 border-2 border-blue-500 rounded-full text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 focus:outline-none transition ease-in-out duration-300"
      type={type}
      onClick={onClick}
    >
      <div className="flex items-center space-x-0.5">
        {children}
        <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
          {title}
        </span>
      </div>
    </button>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default ButtonPrimary;
