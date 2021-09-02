import React from "react";

interface TweetProps {
    comment : {
        body: string;
        name: string;
        id: number
    },
    // deletetweet : any
}
const Tweet : React.FC<TweetProps> = ( { comment :  { body, name, id }  }) => {
  return (
      <div className="row border py-2">
          <div className="col-11">
              <h4>{ body }</h4>
              <span className="text-muted">{ name }</span>
          </div>
          <div className="col-1 justify-content-end aligin-items-center align-content-center">
              <i className="fas fa-edit mx-2" ></i>
              <i className="fas fa-trash mx-2" ></i>
          </div>
      </div>

  );
};

export default Tweet;