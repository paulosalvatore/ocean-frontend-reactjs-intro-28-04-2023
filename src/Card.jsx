import "./Card.css";

function Card(props) {
  const item = props.item;

  return (
    <div className="card">
      <h2>{item.nome}</h2>
      <img width="200" src={item.imagemUrl} />
    </div>
  );
}

export default Card;
