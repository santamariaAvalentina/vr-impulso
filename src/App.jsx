import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/vr-impulso">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Nuestros Productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<h2>Página no encontrada (404)</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;