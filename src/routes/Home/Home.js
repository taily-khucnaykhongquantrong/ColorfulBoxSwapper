import React from "react";
import { Row, Col } from "reactstrap";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

import s from "./Home.module.scss";

const Home = () => (
  <Layout>
    <Row>
      <Col>
        <div className={s.background}>
          <div className={s.container}>
            <div className={s.box}>
              <h1 className={s.title}>Colorful Box Swapper</h1>
              <Button value="Generate colorful box" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Layout>
);

export default Home;
