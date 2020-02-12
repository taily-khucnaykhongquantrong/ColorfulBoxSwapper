import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import history from "../../history";

const Link = ({ children, className, to }) => {
  const handleClick = () => {
    history.push(to);
  };

  return (
    <div
      className={classnames(className)}
      onClick={handleClick}
      onKeyDown={() => {}}
      tabIndex="-1"
      role="button"
    >
      {children}
    </div>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  children: null,
  className: "",
};

export default Link;
