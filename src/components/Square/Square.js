import React from "react";
import PropTypes from "prop-types";

import ColorBox from "./ColorBox";

import s from "./Square.module.scss";

const Square = ({ length, colorList, className }) => {
  // Constructor
  const rowList = [...Array(length).keys()];

  // Event handling methods
  const onDragStart = event => {
    const { color } = event.currentTarget.dataset;
    const selectColor = color;
    event.dataTransfer.setData("text/plain", selectColor);
  };
  const onDragOver = event => {
    event.preventDefault();
  };
  const onDrop = event => {
    event.preventDefault();
    const selectColor = event.dataTransfer.getData("text");
    const { currentTarget } = event;

    currentTarget.dataset.color = selectColor;
    currentTarget.style.background = selectColor;
  };

  // Methods
  const renderBoxPerRow = rowIndex =>
    colorList
      .filter((_, index) => {
        const max = rowIndex * length;
        const min = (rowIndex - 1) * length;

        return min <= index && index < max;
      })
      .map(colorCode => (
        <ColorBox
          key={colorCode}
          background={colorCode}
          onDragOver={onDragOver}
          onDragStart={onDragStart}
          onDrop={onDrop}
        />
      ));

  const element = rowList.map(value => {
    // Index starts from 1
    const rowIndex = value + 1;
    const boxListPerRow = renderBoxPerRow(rowIndex);
    const rowElement = (
      <div className={s.row} key={rowIndex}>
        {boxListPerRow}
      </div>
    );

    return rowElement;
  });

  return <div className={className}>{element}</div>;
};

Square.propTypes = {
  colorList: PropTypes.arrayOf(PropTypes.string).isRequired,
  length: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Square.defaultProps = {
  className: "",
};

export default Square;
