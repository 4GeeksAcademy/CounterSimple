import React from "react";

const Card = (props) => {
  return (
    <div className="card mb-3 mt-5 p-2 mx-auto bg-dark text-white" style={{ maxWidth: '600px', height: '290px' }}>
      <div className="row g-0">
        <div className="col-md-12">
          {/* Contador */}
          <h1 className="text-center">{props.time}</h1>
        </div>
        <div className="col-md-12">
          <div className="card-body text-center">
            {/* Título */}
            <h5 className="card-title">{props.title}</h5>
            {/* Descripción */}
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
