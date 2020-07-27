import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className={styles.childrenContainer}>{children}</div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
