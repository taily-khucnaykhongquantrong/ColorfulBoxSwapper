import React from "react";
import { shallow } from "enzyme";

import Square from "./Square";
import ColorBox from "./ColorBox";
import { generateDistincColorList } from "../../utilities";
import DataTransfer from "../../utilities/DataTransfer.mock";

const colorList = generateDistincColorList(64);

describe("<Square />", () => {
  test("should have 64 boxes", () => {
    const square = shallow(<Square colorList={colorList} length={8} />);

    expect(square.find(ColorBox)).toHaveLength(64);
  });

  test("should have 36 boxes", () => {
    const square = shallow(<Square colorList={colorList} length={6} />);

    expect(square.find(ColorBox)).toHaveLength(36);
  });

  test("should have 0 boxes", () => {
    const square = shallow(<Square colorList={colorList} length={0} />);

    expect(square.find(ColorBox)).toHaveLength(0);
  });

  test("should have 1 boxes", () => {
    const square = shallow(<Square colorList={colorList} length={1} />);

    expect(square.find(ColorBox)).toHaveLength(1);
  });

  test("should throw proptypes error with wrong proptypes length", () => {
    const square = () => shallow(<Square colorList={colorList} length="8" />);
    expect(square).toThrow();
  });

  test("should throw proptypes error with wrong proptypes colorList", () => {
    const square = () => shallow(<Square colorList={64} length={8} />);
    expect(square).toThrow();
  });

  test("should throw proptypes error with no props", () => {
    const square = () => shallow(<Square />);
    expect(square).toThrow();
  });

  test("should have 0 boxes with empty colorList", () => {
    const square = shallow(<Square colorList={[]} length={8} />);

    expect(square.find(ColorBox)).toHaveLength(0);
  });

  test("should have 0 boxes with empty colorList and length 0", () => {
    const square = shallow(<Square colorList={[]} length={0} />);

    expect(square.find(ColorBox)).toHaveLength(0);
  });
});

describe("<Square /> event drag and drop", () => {
  const square = shallow(<Square colorList={colorList} length={8} />);
  const draggedBox = square.find(ColorBox).at(5);
  const droppedBox = square.find(ColorBox).at(62);

  test("should have same data color between dataTransfer event and data-color attribute", () => {
    const dataColor = draggedBox.prop("background");
    const mockedEvent = {
      dataTransfer: new DataTransfer(),
      currentTarget: { dataset: { color: dataColor } },
    };
    draggedBox.simulate("dragstart", mockedEvent);

    expect(mockedEvent.dataTransfer.getData("text")).toBe(dataColor);
  });

  test("should drag and drop have the same color", () => {
    const box = square.find(ColorBox).at(63);
    const draggedDataColor = box.prop("background");
    const mockedEvent = {
      dataTransfer: new DataTransfer(),
      currentTarget: {
        dataset: { color: draggedDataColor },
        style: { background: "" },
      },
      preventDefault: jest.fn(),
    };

    box.simulate("dragstart", mockedEvent);
    box.simulate("dragover", mockedEvent);
    box.simulate("drop", mockedEvent);

    const droppedDataColor = mockedEvent.currentTarget.style.background;

    expect(droppedDataColor).toBe(draggedDataColor);
  });

  test("should have the same color on same box", () => {
    const draggedDataColor = draggedBox.prop("background");
    const mockedEvent = {
      dataTransfer: new DataTransfer(),
      currentTarget: {
        dataset: { color: draggedDataColor },
        style: { background: "" },
      },
      preventDefault: jest.fn(),
    };

    draggedBox.simulate("dragstart", mockedEvent);
    droppedBox.simulate("dragover", mockedEvent);
    droppedBox.simulate("drop", mockedEvent);

    const droppedDataColor = mockedEvent.currentTarget.style.background;

    expect(droppedDataColor).toBe(draggedDataColor);
  });
});
