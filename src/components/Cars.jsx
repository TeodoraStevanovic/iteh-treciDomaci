import React from 'react';
import OneCar from "./OneCar.jsx";

  const Cars = ({cars , onAdd, onDelete }) => {
   

    return (
        <div className="all-cars">
          
            {cars.map((c) => (
              //jedinica znaci da nije u korpi
        <OneCar car={c} key={c.id} onAdd={onAdd} onDelete={onDelete} inLikedCars={1}/>
      ))}
     
        </div>
      );
    };

export default Cars;
