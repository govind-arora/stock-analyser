import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-auto">
      <Container>
        <div className="d-flex justify-content-between align-items-center small">
          <div>
            <span className="text-muted">
              © {new Date().getFullYear()} Stock Analyser
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
