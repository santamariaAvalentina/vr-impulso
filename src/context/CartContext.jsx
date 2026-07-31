import { createContext, useState } from "react";

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

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod,
        ),
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((prod) => prod.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, prod) => acc + prod.price * prod.quantity,
    0,
  );

  const updateQuantity = (itemId, quantity) => {
    setCart(
      cart.map((prod) => (prod.id === itemId ? { ...prod, quantity } : prod)),
    );
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
