import React from "react";
import { Link } from "react-router-dom"

interface AlbumProps {
    title: string;
    picture: string;
}
const Album : React.FC<AlbumProps> = ({ title, picture }) => {
  return (
    
<div className="card card-cover overflow-hidden h-100 rounded-5 shadow-lg text-decoration-none">
    <img src={picture} alt={title} loading="lazy" />
<div className="d-flex flex-column justify-content-between p-5 pb-5 text-primary">
    <h5 className="py-2 h4 text-decoration-none lh-1 fw-bold ">
        {title}
    </h5>
</div>
</div>
  );
};

export default Album;