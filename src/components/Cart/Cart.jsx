import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="container text-center my-5">
        <h2>El carrito está vacío 🛒</h2>
        <p className="text-muted mt-2">No agregaste ningún producto todavía.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Ir a ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Tu Carrito de Compras</h2>

      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded">
        <button className="btn btn-outline-danger" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/" className="btn btn-outline-secondary mb-4">
          ← Seguir comprando
        </Link>
        <div className="text-right">
          <h4>
            Total: <span className="text-success">${totalPrice}</span>
          </h4>
        </div>
      </div>

      <div className="text-right mt-4">
        <Link to="/checkout" className="btn btn-success btn-lg">
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;

