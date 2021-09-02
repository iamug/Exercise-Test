import React from "react";
import { Link } from "react-router-dom"

interface AlbumProps {
    name: string;
    albumId : number
    userId : number
}
const Album : React.FC<AlbumProps> = ({ name, albumId, userId }) => {
  return (
    <Link to={`/artists/${userId}/albums/${albumId}/photos`} className="text-decoration-none">
<div className="card card-cover overflow-hidden h-100 rounded-5 shadow-lg text-decoration-none">
<div className="d-flex flex-column justify-content-between p-5 pb-5 text-primary">
    <h5 className="py-2 h4 text-decoration-none lh-1 fw-bold ">
        {name}
    </h5>
    <button className="btn btn-primary mt-3">View Photos</button> 
</div>
</div>
</Link>
  );
};

export default Album;