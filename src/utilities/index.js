const { isFinite } = Number;
const isInteger = id =>
  typeof id === "number" && isFinite(id) && Math.round(id) === id;

/**
 * @summary Generate random hex color code.
 * @description
 * - First line to make sure color code won't exceed RGB range.
 * - Second line to convert it to hex base.
 * - Third line to make sure code length is 6.
 */
const generateRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

/**
 * @summary Generate a list of distinct color
 * @param {int} area - generate number of color based on the square area.
 */
const generateDistincColorList = area => {
  let result = [];

  if (isInteger(area) === false) {
    throw new Error("Area must be an integer");
  }

  if (area === 1) {
    result = [generateRandomColor()];
  } else if (area > 1) {
    // Using Set to avoid duplicates
    const colorSet = new Set(
      [...Array(area)].map(() => {
        const colorCode = generateRandomColor();

        return colorCode;
      })
    );

    // Loop until Set size is equal to Square length
    while (colorSet.size !== area) {
      const colorCode = generateRandomColor();
      colorSet.add(colorCode);
    }

    result = [...colorSet];
  }

  return result;
};

export { generateRandomColor, generateDistincColorList };
