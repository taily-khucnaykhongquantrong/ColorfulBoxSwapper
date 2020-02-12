import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

import s from "./Layout.module.scss";
// import Header from "./Header";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={s.background}>
      <Container>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
