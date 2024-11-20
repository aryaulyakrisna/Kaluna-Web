import Lottie from "lottie-react";
import PropTypes from "prop-types";

const LootieComp = ({src, classStyle}) => {
  return (
    <Lottie
      animationData={src}
      loop={true}
      className={classStyle}
    />
  );
}

LootieComp.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  classStyle: PropTypes.string
}

export default LootieComp