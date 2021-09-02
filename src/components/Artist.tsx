import React from "react";
import {Card, Button  } from "react-bootstrap"
import { Link } from "react-router-dom"

interface ArtistProps {
    name: string;
    email: string;
    phone : string | number;
    userId : number
}
const Artist : React.FC<ArtistProps> = ({ name, email, phone, userId }) => {
  return (
    <Link to={`/artists/${userId}/albums`}>
<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
<div className="d-flex flex-column h-100 p-5 pb-5 text-white text-shadow-1">
    <h4 className="pt-5 mt-5 mb-5  lh-1 fw-bold">
        {name}
    </h4>
     <h6 className="py-2 lh-1 ">{email} </h6>
     <h6 className="py-2   lh-1 ">{phone} </h6>
    <button className="btn btn-primary mt-3">View Album</button> 
     
</div>
</div>
</Link>
  );
};

export default Artist;