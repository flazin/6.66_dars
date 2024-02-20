import Card from "../Card";
import "./index.css";
function Cars(props) {
  const { cars } = props;

  return (
    <div className="cars-wrapper">
      {cars.map((car, index) => {
        return <Card car={car} key={index}></Card>;
      })}
    </div>
  );
}

export default Cars;
