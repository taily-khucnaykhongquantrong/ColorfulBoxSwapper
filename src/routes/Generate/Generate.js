import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Square from "../../components/Square/Square";
import { generateRandomColor } from "../../components/Square/utilities";
import ColorBox from "../../components/Square/ColorBox";

import s from "./Generate.module.scss";

export default class Generate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      replaceColor: "#a87b7b",
    };
  }

  changeColor = () => {
    const colorCode = generateRandomColor();
    this.setState(() => ({ replaceColor: colorCode }));
  };

  onDragStart = event => {
    const { replaceColor } = this.state;
    event.dataTransfer.setData("text/plain", replaceColor);
  };

  render() {
    const { replaceColor } = this.state;

    return (
      <Layout>
        <Row>
          <Col xs="12" md="6">
            <Button onClick={this.changeColor} value="Generate random color" />
            <ColorBox
              id="selectColor"
              className={s.replaceBox}
              background={replaceColor}
              onDragStart={this.onDragStart}
            />
          </Col>
          <Col xs="12" md="6">
            <Square length={8} />
          </Col>
        </Row>
      </Layout>
    );
  }
}
