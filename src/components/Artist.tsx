import React from "react";
import {Card, Button  } from "react-bootstrap"

interface ArtistProps {
    name: string;
    email: string;
    phone : string | number;
}
const Artist : React.FC<ArtistProps> = ({ name, email, phone }) => {
  return (
//     <Card style={{ width: '18rem' }}>
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//     <h2 className="mb-2">Name : <small> hello</small> </h2>
//     <h2 className="mb-2">Name : <small> hello</small> </h2>
//     <h2 className="mb-2">Name : <small> hello</small> </h2>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the bulk of
//         the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//   </Card>

<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
    <h4 className="pt-5 mt-5 mb-5  lh-1 fw-bold">
        {name}
    </h4>
     <h6 className="py-2 lh-1 ">{email} </h6>
     <h6 className="py-2   lh-1 ">{phone} </h6>
</div>
</div>
  );
};

export default Artist;