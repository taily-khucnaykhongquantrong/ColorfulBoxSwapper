import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import classnames from "classnames";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Square from "../../components/Square/Square";
import ColorBox from "../../components/Square/ColorBox";
import { generateRandomColor } from "../../utilities";

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
          <Col>
            <div className={classnames(s.container, s.centerFloat)}>
              <div>
                <div className={s.buttonContainer}>
                  <Button
                    className={classnames(s.button, s.shadow)}
                    onClick={this.changeColor}
                  >
                    <h4>Generate random color</h4>
                  </Button>
                </div>
                <ColorBox
                  className={classnames(s.replaceBox, s.shadow)}
                  background={replaceColor}
                  onDragStart={this.onDragStart}
                />
                <div className={s.arrow} />
                <div className={s.shadow}>
                  <Square length={8} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}
