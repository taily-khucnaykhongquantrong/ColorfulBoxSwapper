import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { createUseStyles } from "react-jss";

const boxStyles = createUseStyles({
  box: ({ background }) => ({
    background,
    display: "inline-flex",
    width: 50,
    height: 50,
  }),
});

const ColorBox = ({ ...props }) => {
  const classes = boxStyles(props);
  const { className, id, onDragStart, onDragOver, onDrop } = props;

  return (
    <span
      id={id}
      className={classnames(classes.box, className)}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      draggable
    />
  );
};

ColorBox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onDragStart: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
};

ColorBox.defaultProps = {
  className: "",
  id: "",
  onDragStart: () => {},
  onDragOver: () => {},
  onDrop: () => {},
};

export default ColorBox;
