import { createContext, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCartContext = (product, amount) => {
    const newProduct = {amount, product};
    const arrayCopy = [...cart];
    
    if(!isInCart(product.item.id)){
      arrayCopy.push(newProduct);
      setCart(arrayCopy);
    }else{
      amountSum(product.item.id, newProduct)
    }
  };

  const isInCart = (productId) => {
    const repeated = cart.find( i => i.product.item.id === productId);
    return repeated ? true : false;
  };

  const amountSum = (productId) => {
    const index = cart.find( i => i.product.item.id === productId);
    return index.amount += 1;
  }

  const deleteToCartContext = (id) => {
    setCart([...cart.filter(i => i.product.item.id !== id)]);
  };

  const emptyCartContext = () => {
    setCart([]);
  };

  const contextValue = {
    cart: cart,
    addToCartContext: addToCartContext,
    deleteToCartContext: deleteToCartContext,
    emptyCartContext: emptyCartContext,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
