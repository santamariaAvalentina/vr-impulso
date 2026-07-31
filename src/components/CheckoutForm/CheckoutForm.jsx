import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { CartContext } from '../../context/CartContext';

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      alert('Por favor completá todos los campos');
      return;
    }

    setLoading(true);

    const order = {
      buyer: { name, phone, email },
      items: cart.map(prod => ({ id: prod.id, title: prod.name, price: prod.price, quantity: prod.quantity })),
      total: totalPrice,
      date: Timestamp.now(),
    };

    try {
      const ordersRef = collection(db, 'orders');
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al guardar la orden: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center my-5"><h3>Procesando tu compra en Firebase...</h3></div>;
  }

  if (orderId) {
    return (
      <div className="container text-center my-5">
        <div className="alert alert-success p-4">
          <h2 className="alert-heading">¡Gracias por tu compra! 🎉</h2>
          <p className="lead">Tu orden fue guardada en nuestra base de datos con éxito.</p>
          <hr />
          <p className="mb-0 fs-5">
            ID oficial de tu orden en Firestore: <strong>{orderId}</strong>
          </p>
        </div>
        <Link to="/" className="btn btn-primary mt-3">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container text-center my-5">
        <h2>No hay productos en el carrito para generar una orden</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Datos del Comprador</h2>
      
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="form-group mb-3">
          <label className="form-label font-weight-bold">Nombre Completo</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Juan Pérez"
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label font-weight-bold">Teléfono</label>
          <input 
            type="tel" 
            className="form-control" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="1112345678"
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label font-weight-bold">Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="juan@email.com"
            required 
          />
        </div>

        <div className="mt-4">
          <h5 className="mb-3">Resumen de compra: ${totalPrice}</h5>
          <button type="submit" className="btn btn-primary btn-block w-100 btn-lg">
            Confirmar Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;