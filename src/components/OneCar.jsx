
import React from 'react';
import { BsSuitHeart } from "react-icons/bs";
const OneCar = () => {
    
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="https:/picsum.photos/200"
          alt="slika automobila "
        />
        <div className="card-body">
          <h1 className="card-title">Car name</h1>
          <p className="card-text">This is description of the products.</p>
        </div>
        <button className="btn">
          <BsSuitHeart />
        </button>
      </div>
    );
};

export default OneCar;







