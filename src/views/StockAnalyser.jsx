import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "reactstrap";

export default function StockAnalyser() {
  return (
    <React.Fragment>
      <Header />

      {/* Main content area */}
      <Container>
        <div className="container py-4">
          <h1 className="mb-4">📈 Portfolio Dashboard</h1>

          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Total Investment</h5>
                  <p className="card-text">₹ 0.00</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Current Value</h5>
                  <p className="card-text">₹ 0.00</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                  <h5 className="card-title">Profit / Loss</h5>
                  <p className="card-text">₹ 0.00</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mb-3">Holdings</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Buy Price</th>
                <th>Current Price</th>
                <th>Value</th>
                <th>P/L</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TCS</td>
                <td>10</td>
                <td>₹3200</td>
                <td>₹3400</td>
                <td>₹34,000</td>
                <td className="text-success">+₹2,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>

      {/* Footer with keyboard shortcuts and stats link */}
      <Footer />
    </React.Fragment>
  );
}
