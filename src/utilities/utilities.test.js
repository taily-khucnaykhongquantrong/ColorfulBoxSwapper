import { generateDistincColorList, generateRandomColor } from "./index";

describe("Test distinct color list", () => {
  test("should have length of 64", () => {
    expect(generateDistincColorList(64)).toHaveLength(64);
  });

  test("should have length of 11", () => {
    expect(generateDistincColorList(11)).toHaveLength(11);
  });

  test("should have length of 1", () => {
    expect(generateDistincColorList(11)).toHaveLength(11);
  });

  test("should have length of 0", () => {
    expect(generateDistincColorList(0)).toHaveLength(0);
  });

  test("should have length of 0 with negative value", () => {
    expect(generateDistincColorList(-1)).toHaveLength(0);
  });

  test("should have throw error with typeof string", () => {
    expect(() => {
      generateDistincColorList("12");
    }).toThrow();
  });

  test("should have throw error with typeof undefined", () => {
    expect(() => {
      generateDistincColorList(undefined);
    }).toThrow();
  });

  test("should have throw error with typeof null", () => {
    expect(() => {
      generateDistincColorList(null);
    }).toThrow();
  });

  test("should have throw error with typeof infinite number", () => {
    expect(() => {
      generateDistincColorList(1 / 3);
    }).toThrow();
  });

  test("should have throw error with typeof object", () => {
    expect(() => {
      generateDistincColorList({ a: 1 });
    }).toThrow();
  });

  test("should have throw error with typeof array", () => {
    expect(() => {
      generateDistincColorList([0]);
    }).toThrow();
  });
});

describe("Test generate random color", () => {
  test("should have length of 7", () => {
    expect(generateRandomColor()).toHaveLength(7);
  });

  test("should have pattern of #XXXXXX", () => {
    expect(generateRandomColor()).toMatch(/#[a-zA-Z0-9]{6}/);
  });
});
