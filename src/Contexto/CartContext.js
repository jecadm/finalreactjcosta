import { createContext, useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const CartContext = ({children}) => {

  const [carrito, setCarrito] = useState([]);
  

  const addItem = (item, quantity) => {
    isInCart(item.id)
      ? sumarCantidad(item, quantity) 
      : setCarrito([...carrito, {...item, quantity}]);
  }

  const isInCart = (itemId) => {
    return carrito.some((prod) => prod.id === itemId);
  }

  const sumarCantidad = (item, quantity) => {
    const newProducts = carrito.map((prod) => {
        if (prod.id === item.id) {
            const newProduct = {
                ...prod,
                quantity: prod.quantity + quantity,
            };
            return newProduct;
        } else {
            return prod;
        }
    });
    setCarrito(newProducts);
  };
    
  const removeItem = (itemId) => {
    const filteredCart = carrito.filter((item) => item.id !== itemId);
    setCarrito(filteredCart);
  }

  const clear = () => {
    setCarrito([]);
  }

  const cartCounter = () => {
    const totalItems = carrito.reduce((acc, item) => acc + item.quantity, 0);
    return totalItems;
  }

  const totalPrice = () => {
    let totalCarrito = 0;
    carrito.forEach((prod) => {
        totalCarrito += prod.price * prod.quantity;
    });
    return totalCarrito;
  }

  const valorDelContexto = {
      carrito,
      addItem,
      clear,
      totalPrice,
      cartCounter,
      removeItem,
  }  

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  );
}

export default CartContext;
