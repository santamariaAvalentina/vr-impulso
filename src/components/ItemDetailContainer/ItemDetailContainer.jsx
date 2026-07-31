import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 👈 De react-router-dom
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'items', itemId);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          setItem(null);
        }
      })
      .catch((error) => console.error("Error al traer el producto:", error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return <div className="text-center my-5"><h3>Cargando detalle del producto...</h3></div>;
  }

  if (!item) {
    return <div className="text-center my-5"><h3>El producto solicitado no existe.</h3></div>;
  }

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;