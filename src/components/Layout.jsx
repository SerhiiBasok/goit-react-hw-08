import PropTypes from "prop-types";

import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";

const styles = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "0 16px",
};

export const Layout = ({ children }) => {
  return (
    <div style={styles}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
