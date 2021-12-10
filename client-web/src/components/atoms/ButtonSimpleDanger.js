import PropTypes from 'prop-types';

const ButtonSimpleDanger = ({
  children,
  title,
  type='button',
  onClick
}) => {
  return (
    <button
      type={type}
      className="px-3 py-2 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-800 focus:outline-none transition ease-in-out duration-300"
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        {children}
        <span className="uppercase font-medium tracking-wider text-xs whitespace-nowrap">
          {title}
        </span>
      </div>
    </button>
  );
};

ButtonSimpleDanger.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default ButtonSimpleDanger;
