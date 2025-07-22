import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "reactstrap";

export default function StockAnalyser() {
  return (
    <React.Fragment>
      <Header />

      {/* Main content area */}
      <Container>hanji</Container>

      {/* Footer with keyboard shortcuts and stats link */}
      <Footer />
    </React.Fragment>
  );
}
