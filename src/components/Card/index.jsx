import "./index.css";

function Card(props) {
  const { car } = props;
  return (
    <div className="card-wrapper">
      <img src={car.images} alt="" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>{car.title}</h3>
      <br />
      <br />

      <h3>{car.description}</h3>

      <h3>{car.price}</h3>

      <h3>{car.discountPercentage}</h3>
      <br />
      <br />
      <h3>{car.category}</h3>
      <br />
      <br />

      <button className="button">BUY THAT</button>
    </div>
  );
}

export default Card;
