import React from "react";
import { shallow } from "enzyme";

import ColorBox from "./ColorBox";
import { generateRandomColor } from "../../../utilities";

describe("<ColorBox />", () => {
  test("should have default props color code", () => {
    const colorBox = shallow(<ColorBox />);

    expect(colorBox.prop("data-color")).toEqual("#000000");
  });

  test("should have specific  props color code", () => {
    const color = generateRandomColor();
    const colorBox = shallow(<ColorBox background={color} />);

    expect(colorBox.prop("data-color")).toBe(color);
  });
});
