import React from "react";
import { shallow } from "enzyme";

import Generate from "./Generate";
import Button from "../../components/Button";

describe("<Generate />", () => {
  test("should have change color state", () => {
    const generate = shallow(<Generate />);
    const prevState = generate.state();
    generate.find(Button).simulate("click");

    expect(generate.state()).not.toBe(prevState);
  });
});
