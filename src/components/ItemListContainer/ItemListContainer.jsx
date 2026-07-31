import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    // Referencia a la colección 'items' en Firestore
    const itemsRef = collection(db, 'items');

    // Si hay categoryId filtra por esa categoría, sino trae todo
    const q = categoryId 
      ? query(itemsRef, where('category', '==', categoryId))
      : itemsRef;

    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(docs);
      })
      .catch((error) => console.error('Error al obtener productos:', error))
      .finally(() => setTimeout(() => setLoading(false), 2000));

  }, [categoryId]);

  if (loading) {
  return (
    <div className="container my-4">
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="skeleton-img"></div>
              <div className="card-body">
                <div className="skeleton-line skeleton-title"></div>
                <div className="skeleton-line skeleton-text"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

