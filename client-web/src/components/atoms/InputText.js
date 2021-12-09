import PropTypes from 'prop-types';

const InputText = ({
  id,
  title,
  type='text',
  hasChildren,
  onChange,
  value,
  placeholder,
  required=false
}) => {
  return (
    <div>
      {hasChildren ? (
        <input
          id={id}
          name={id}
          key={id}
          title={title}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg font-light text-sm placeholder-gray-200 hover:border-blue-500 focus:outline-none transition ease-in-out duration-300"
          required={required}
        />
      ) : (
        <input
          id={id}
          name={id}
          key={id}
          title={title}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg font-light text-sm placeholder-gray-200 hover:border-blue-500 focus:outline-none transition ease-in-out duration-300"
          required={required}
        />
      )}
    </div>
  );
};

InputText.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  hasChildren: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default InputText;
