
import React from 'react';

import { BiLike,BiDislike } from "react-icons/bi";
//const OneCar = (props) => {
  //u zagrade stavljamo objekat koji hocemo da izvucemo iz propsa
  function OneCar({car,onAdd,onDelete, inLikedCars}){
        
    return (
        <div className={inLikedCars === 1 ? "card" : "card-liked"}>
        <img
          className={inLikedCars ===1 ? "card-img-top" :"card-img-left"}
          src={car.img}
          alt="slika automobila "
        />
        <div className={inLikedCars === 1 ? "card-body" : "card-body-left"}>
          {inLikedCars === 1 ? (
        <>
         <h1 className="card-title">{car.title}</h1>
          <p className="card-text">{car.description}</p>
        
        </>
      ) : (
        <>
         <h1 className="card-title">{car.title}</h1>
          <p className="card-text">{car.description}</p>
          <h2 >Ukupan broj lajkova: {car.amount}</h2>
        </>
      )}
        </div>
   
{inLikedCars === 1 ? (
        <>
          <button
            className="btn" id='prvoDugme'
            onClick={() => onAdd(car.title, car.id)}
          >
            <BiLike />
          </button>
          <button className="btn"
          onClick={() => onDelete(car.title, car.id)}
          >
            <BiDislike />
          </button>
        </>
      ) : (
       <>
       </>
      )}
      </div>
    );
};

export default OneCar;







