# VR Impulso 🛍️

E-commerce de indumentaria deportiva y casual, desarrollado con React. Permite explorar un catálogo de productos por categorías, ver el detalle de cada uno, agregarlos a un carrito de compras y finalizar la compra generando una orden en la base de datos.

## Funcionalidades

- **Listado de productos**: muestra el catálogo completo obtenido desde Firestore.
- **Filtrado por categoría**: navegación a listados filtrados (Remeras, Conjuntos, Jogging) mediante rutas dinámicas.
- **Navegación al detalle de producto**: cada producto lleva a una vista individual con su información completa y stock disponible.
- **Agregar productos al carrito**: selector de cantidad limitado por stock, gestión del carrito mediante Context (agregar, eliminar, modificar cantidades) y cálculo automático de subtotales y total.
- **Finalizar orden de compra**: formulario de datos del comprador que genera una orden en Firestore, con confirmación y visualización del ID de la orden generada.
- **Navegación general** entre catálogo, categorías, detalle, carrito y checkout mediante React Router, sin recargas de página.
- **Renderizado condicional** para estados de carga, carrito vacío y confirmación de compra.

## Tecnologías y dependencias

**Dependencias principales:**

| Paquete | Versión | Documentación |
|---|---|---|
| React | ^19.2.7 | [react.dev](https://react.dev/) |
| React DOM | ^19.2.7 | [react.dev/reference/react-dom](https://react.dev/reference/react-dom) |
| React Router DOM | ^7.18.1 | [reactrouter.com](https://reactrouter.com/) |
| Firebase | ^12.16.0 | [firebase.google.com/docs](https://firebase.google.com/docs) |
| Bootstrap | ^5.3.8 | [getbootstrap.com](https://getbootstrap.com/docs/) |

**Dependencias de desarrollo:**

| Paquete | Versión | Documentación |
|---|---|---|
| Vite | ^8.1.1 | [vitejs.dev](https://vitejs.dev/) |
| ESLint | ^10.6.0 | [eslint.org](https://eslint.org/docs/latest/) |
| @vitejs/plugin-react | ^6.0.3 | [github.com/vitejs/vite-plugin-react](https://github.com/vitejs/vite-plugin-react) |
| eslint-plugin-react-hooks | ^7.1.1 | [npmjs.com/package/eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) |
| eslint-plugin-react-refresh | ^0.5.3 | [npmjs.com/package/eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) |
| @types/react | ^19.2.17 | [npmjs.com/package/@types/react](https://www.npmjs.com/package/@types/react) |
| @types/react-dom | ^19.2.3 | [npmjs.com/package/@types/react-dom](https://www.npmjs.com/package/@types/react-dom) |
| globals | ^17.7.0 | [npmjs.com/package/globals](https://www.npmjs.com/package/globals) |
| @eslint/js | ^10.0.1 | [npmjs.com/package/@eslint/js](https://www.npmjs.com/package/@eslint/js) |

## Instalación y uso

Cloná el repositorio e instalá las dependencias:

```bash
git clone <https://github.com/santamariaAvalentina/vr-impulso>
cd mi-primer-ecommerce
npm install
```

Corré el proyecto en modo desarrollo:

```bash
npm run dev
```

La aplicación queda disponible en `http://localhost:5173` (o el puerto que indique la terminal).

## Estructura del proyecto

```
src/
├── components/
│   ├── Cart/
│   ├── CheckoutForm/
│   ├── ItemDetailContainer/
│   ├── ItemListContainer/
│   └── NavBar/
├── context/
│   └── CartContext.jsx
├── firebase/
│   └── config.js
├── App.jsx
└── main.jsx
```
