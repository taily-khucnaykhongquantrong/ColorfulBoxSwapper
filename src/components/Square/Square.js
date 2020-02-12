import React from "react";
import PropTypes from "prop-types";

import ColorBox from "./ColorBox";
import { generateDistincColorList } from "../../utilities";

import s from "./Square.module.scss";

const onDragOver = event => {
  event.preventDefault();
};
const onDrop = event => {
  event.preventDefault();
  const replaceColor = event.dataTransfer.getData("text");
  const { currentTarget } = event;

  currentTarget.style.background = replaceColor;
};
const renderBoxListPerRow = ({ colorList, rowIndex, length }) =>
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
        onDrop={onDrop}
      />
    ));
const renderRow = (boxList, rowIndex) => (
  <div className={s.row} key={rowIndex}>
    {boxList}
  </div>
);

const Square = ({ length }) => {
  // Constructor
  const area = length * length;
  const colorList = generateDistincColorList(area);
  const rowIndexList = [...Array(length).keys()];

  const element = rowIndexList.map(value => {
    const rowIndex = value + 1;
    const rowRecord = { colorList, rowIndex, length };
    const boxListPerRow = renderBoxListPerRow(rowRecord);
    const rowElement = renderRow(boxListPerRow, rowIndex);

    return rowElement;
  });

  return element;
};

Square.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Square;
