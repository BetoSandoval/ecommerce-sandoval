import { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const CustomComponent = ( {children} ) => {
  const [cart, setCart] = useState([]);

  const addToCartContext = ( product, amount ) => {
    console.log('Estoy en contexto');
    console.log(product, amount);
  }

  const deleteToCartContext = () => {

  }
  
  const emptyCartContext = () => {

  }

  const contextValue = {
    cart: cart,
    addToCartContext: addToCartContext,
    deleteToCartContext: deleteToCartContext,
    emptyCartContext: emptyCartContext
  }

  return(
    <Provider value={contextValue}>
        {children}
    </Provider>
  );
};

export default CustomComponent;
