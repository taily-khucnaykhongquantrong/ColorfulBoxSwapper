import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import classnames from "classnames";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Square from "../../components/Square/Square";
import { generateDistincColorList } from "../../utilities";

import s from "./Generate.module.scss";

export default class Generate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorList: generateDistincColorList(64),
    };
  }

  changeColor = () => {
    this.setState(() => ({ colorList: generateDistincColorList(64) }));
  };

  render() {
    const { colorList } = this.state;

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
                <div className={s.shadow}>
                  <Square colorList={colorList} length={8} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}
