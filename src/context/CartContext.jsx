import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito evitado duplicados (si existe, suma la cantidad)
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar un producto por ID
  const removeItem = (itemId) => {
    setCart(cart.filter((prod) => prod.id !== itemId));
  };

  // Vaciar el carrito completo
  const clearCart = () => {
    setCart([]);
  };

  // Saber si un producto ya está en el carrito
  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Calcular la cantidad total de items para el CartWidget
  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  // Calcular el precio total de la compra
  const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  const updateQuantity = (itemId, quantity) => {
  setCart(cart.map((prod) =>
    prod.id === itemId ? { ...prod, quantity } : prod
  ));
};
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        updateQuantity,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};