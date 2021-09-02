import React from "react";
import {Card, Button  } from "react-bootstrap"

const LeftSideNav = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
    <h2 className="mb-2">Name : <small> hello</small> </h2>
    <h2 className="mb-2">Name : <small> hello</small> </h2>
    <h2 className="mb-2">Name : <small> hello</small> </h2>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
};

export default LeftSideNav;