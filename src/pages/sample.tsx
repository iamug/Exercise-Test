import React from "react";
import logo from "../logo.svg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Sample: React.FC = () => {
  return (
    <div>
      <Container fluid className="p-3">
        <div className="bg-dark text-white shadow-lg py-4">
          <h1 className="header text-center fw-bold display-5">
            Welcome To Bootstrap Redux TypeScript Example
          </h1>
        </div>
        <div className="row my-4"></div>
        <div className="col-12 p-1 my-5 text-center">
          <Button variant="primary" size="lg" className="mr-1">
            Button
          </Button>
          <Button variant="primaryLight" size="lg" className="me-5">
            Button
          </Button>
          <Button variant="danger" size="lg" className="mr-1">
            Button
          </Button>
          <Button variant="primaryContrast" size="lg" className="mr-1">
            Button
          </Button>
        </div>
        <div className="text-center">
          <img src={logo} className="App-logo text-center" alt="logo" />
        </div>
        <div className="my-4 py-5"></div>
      </Container>
    </div>
  );
};

export default Sample;