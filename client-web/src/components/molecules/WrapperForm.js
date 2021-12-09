import PropTypes from 'prop-types';

const WrapperForm = ({
  children
}) => {
  return (
    <div className="w-full min-h-screen -mt-24 flex justify-center items-center">
      <div className="max-w-lg w-full shadow-lg overflow-hidden rounded-2xl">
        {children}
      </div>
    </div>
  );
};

WrapperForm.propTypes = {
  children: PropTypes.any
};

export default WrapperForm;
