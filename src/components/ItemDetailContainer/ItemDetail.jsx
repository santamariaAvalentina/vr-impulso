import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  // 1. Traemos addItem desde el Context
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    // 2. Le pasamos el producto Y la cantidad seleccionada al carrito
    addItem(item, quantity);
  };

  return (
    <div
      className="card mb-3 my-5 p-3"
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <div className="row g-0 align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={item.img}
            className="img-fluid rounded-start"
            alt={item.name}
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>

            <p className="card-text my-3">{item.descripcion}</p>

            <h4 className="card-text text-primary mb-3">${item.price}</h4>

            <p className="text-muted">Stock disponible: {item.stock}</p>

            <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
            
            <Link to="/" className="btn btn-outline-secondary w-100 mt-3">
              ← Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
