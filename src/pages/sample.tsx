import React from "react";
import Container from "react-bootstrap/Container";


const Sample: React.FC = () => {
  return (
    <div>
      <Container fluid className="p-3">
        <div className="bg-dark text-white shadow-lg py-4">
          <h1 className="header text-center fw-bold display-5">
            Welcome To Bootstrap TypeScript Example
          </h1>
        </div>
        <div className="row my-4"></div>
       
        <div className="my-4 py-5"></div>
      </Container>
    </div>
  );
};

export default Sample;