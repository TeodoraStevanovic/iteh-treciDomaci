import React from 'react';
import OneCar from "./OneCar.jsx";

const Cars = () => {
    return (
        <div className="all-cars">
          <OneCar />
          <OneCar />
          <OneCar/>
        </div>
      );
    };

export default Cars;
