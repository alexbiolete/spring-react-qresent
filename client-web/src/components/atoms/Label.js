import PropTypes from 'prop-types';

const Label = ({ id, title }) => {
  return (
    <label
      htmlFor={id}
      className="absolute -mt-2 left-2 block select-none px-1 font-medium tracking-wider text-xs bg-white rounded"
    >
      {title}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};

export default Label;
