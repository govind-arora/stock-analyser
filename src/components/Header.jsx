import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
  return (
    <header>
      <Navbar color="primary" dark expand className="px-3 shadow">
        <NavbarBrand href="/" className="fw-bold">
          Stock Analyser
        </NavbarBrand>
      </Navbar>
    </header>
  );
}
