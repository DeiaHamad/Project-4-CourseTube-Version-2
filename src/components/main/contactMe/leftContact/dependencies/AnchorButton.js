import React from "react";
import PropTypes from "prop-types";

function AnchorButton(props) {
  return (
    <a
      className="form-btn"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={props.testId}
    >
      {props.icon}
    </a>
  );
}

AnchorButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  testId: PropTypes.string,
};

export default AnchorButton;
