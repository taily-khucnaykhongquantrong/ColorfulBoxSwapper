import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

// import Header from "./Header";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Container>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
