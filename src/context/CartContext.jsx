import { createContext } from "react";

export const CartContext = createContext([]);

const { Provider } = CartContext;

const CustomComponent = ( {children} ) => {
    const context_value = [];

  return(
    <Provider value={context_value}>
        {children}
    </Provider>
  );
};

export default CustomComponent;
