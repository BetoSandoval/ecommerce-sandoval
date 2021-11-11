import { createContext, useState } from "react";

export const CartContext = createContext([]);

const { Provider } = CartContext;

const CustomComponent = ( {children} ) => {
  const [cart, setCart] = useState([])

  return(
    <Provider value={context_value}>
        {children}
    </Provider>
  );
};

export default CustomComponent;
