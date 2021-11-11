import { createContext, useState } from "react";

export const CartContext = createContext([]);

const { Provider } = CartContext;

const CustomComponent = ( {children} ) => {
  const [cart, setCart] = useState([]);

  const addToCart = ( product, amount ) => {
    console.log('Estoy en contexto')
    console.log(product, amount);
  }

  const contextValue = {
    cart: cart,
    addToCart: addToCart
  }

  return(
    <Provider value={contextValue}>
        {children}
    </Provider>
  );
};

export default CustomComponent;
