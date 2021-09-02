import React from "react";

interface AlbumPhotoProps {
    comment : {
        body: string;
        name: string;
        id: number
    }
}
const AlbumPhoto : React.FC<AlbumPhotoProps> = ( { comment :  { body, name, id }}) => {
  return (
      <div className="row">
          <div className="col-8">
              <h4>{ body }</h4>
              <h6>{ name }</h6>
          </div>
          <div className="col-4 justify-content-end">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash"></i>
          </div>
      </div>

  );
};

export default AlbumPhoto;