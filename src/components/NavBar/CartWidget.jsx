import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      🛒 Carrito
      {totalQuantity > 0 && (
        <span className="badge bg-danger ms-2">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;