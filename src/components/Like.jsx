import OneCar from "./OneCar";

const Like = ({ cars }) => {
    return (
      <div className="liked-container">
      {cars.map((c) => (
          <OneCar car={c} key={c.id} inLikedCars={0} />
        ))}
     
      </div>
    );
  };
  
  export default Like; 
  // 0 znaci da jeste u lajkovanim kolima