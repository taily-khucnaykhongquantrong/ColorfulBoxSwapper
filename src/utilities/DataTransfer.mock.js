/* eslint-disable no-underscore-dangle */
class DataTransfer {
  constructor() {
    this._data = {};
  }

  getData = key => this._data[key];

  setData = (key, value) => {
    // text/plain case
    let newKey = key;

    if (key.includes("/")) {
      newKey = key.split("/")[0];
    }
    this._data[newKey] = value;
  };
}

export default DataTransfer;
