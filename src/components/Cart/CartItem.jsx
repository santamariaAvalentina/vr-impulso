import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ product }) => {
  const { removeItem, updateQuantity } = useContext(CartContext);

  return (
    <div className="card mb-3 p-3 shadow-sm">
      <div className="row align-items-center">
        <div className="col-md-2 text-center">
          <img
            src={product.img}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "80px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-4">
          <h5 className="mb-1">{product.name}</h5>
          <p className="text-muted mb-0">Precio unitario: ${product.price}</p>
        </div>
        <div className="col-md-2 text-center d-flex align-items-center justify-content-center gap-2">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => updateQuantity(product.id, product.quantity - 1)}
            disabled={product.quantity <= 1}
          >
            -
          </button>
          <span className="font-weight-bold">{product.quantity}</span>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => updateQuantity(product.id, product.quantity + 1)}
            disabled={product.quantity >= product.stock}
          >
            +
          </button>
        </div>
        <div className="col-md-2 text-center">
          <span className="text-primary font-weight-bold">
            Subtotal: ${product.price * product.quantity}
          </span>
        </div>
        <div className="col-md-2 text-center">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => removeItem(product.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
