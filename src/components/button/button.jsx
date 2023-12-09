import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import "../button/button.css";

function ButtonWithIcon(props) {
  const { text, icon: Icon, onClick } = props;

  return (
    <Button
      variant="primary"
      className="border-0 outline-0 atur-height"
      onClick={onClick}
    >
      {text} {Icon && <Icon size="20px" />}
    </Button>
  );
}

ButtonWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  onClick: PropTypes.func.isRequired,
};

ButtonWithIcon.defaultProps = {
  onClick: () => {},
};
export default ButtonWithIcon;
