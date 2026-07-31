import { useState } from 'react';
import { Link } from 'react-router-dom';
const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center my-3">
      <div className="d-flex align-items-center mb-3">
        <button 
          className="btn btn-outline-secondary px-3" 
          onClick={decrement}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="mx-4 font-weight-bold fs-5">{quantity}</span>
        <button 
          className="btn btn-outline-secondary px-3" 
          onClick={increment}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>

      <button 
        className="btn btn-primary w-100" 
        onClick={() => onAdd(quantity)}
        disabled={stock <= 0}
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
    </div>
  );
};

export default ItemCount;