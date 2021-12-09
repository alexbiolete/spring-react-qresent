import PropTypes from 'prop-types';
import Label from '../atoms/Label';
import InputText from '../atoms/InputText';

const WrapperInput = ({
  children,
  id,
  title,
  type,
  onChange,
  value,
  placeholder,
  required
}) => {
  return (
    <div className="relative w-full text-gray-600 mt-2">
      <Label id={id} title={title} />
      {children ? (
        <InputText
          id={id}
          key={id}
          title={title}
          type={type}
          hasChildren={true}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <InputText
          id={id}
          key={id}
          title={title}
          type={type}
          hasChildren={false}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          required={required}
        />
      )}
      <span className="absolute top-2.5 left-3.5 w-5 h-5 text-gray-500">
        {children}
      </span>
    </div>
  );
};

WrapperInput.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default WrapperInput;
