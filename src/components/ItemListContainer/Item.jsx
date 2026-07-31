import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="card h-100">
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary btn-block">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
