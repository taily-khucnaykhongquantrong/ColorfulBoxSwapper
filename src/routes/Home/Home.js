import React from "react";
import { Row, Col } from "reactstrap";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

import s from "./Home.module.scss";
import Link from "../../components/Link";

const Home = () => (
  <Layout>
    <Row>
      <Col>
        <div className={s.background}>
          <div className={s.container}>
            <div className={s.box}>
              <h1 className={s.title}>Colorful Box Swapper</h1>
              <Button>
                <Link to="/generate">Generate colorful box</Link>
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Layout>
);

export default Home;
