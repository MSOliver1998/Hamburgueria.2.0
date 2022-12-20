import React, { createContext, useContext, useState } from "react";
import { ProductsContext } from "../productsContext/ProductsContext";

interface iCartProvider {
  cart: iProduct[];
  setCart: React.Dispatch<React.SetStateAction<iProduct[]>>;
  addToCart: (id: number) => void;
  removeToCart: (id: number) => void;
  zerarInCart: (id: number) => void;
  removeAll: () => void;
}

interface iCartContextProps {
  children: React.ReactNode;
}

interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantidade: number;
}

const CartContext = createContext({} as iCartProvider);

function CartProvider({ children }: iCartContextProps) {
  const { productsList } = useContext(ProductsContext);
  const [cart, setCart] = useState([] as iProduct[]);

  function removeToCart(id: number){
    const prod = cart.filter((prod) => prod.id ==id);
    if (prod.length > 0) {
      const newCart = cart.filter((el) => el);
      const index = newCart.indexOf(prod[0]);
      newCart[index]["quantidade"] -= 1;
      if (newCart[index]["quantidade"] == 0) {
        setCart(newCart.filter((prod) => prod.id != id));
      } else {
        setCart(newCart);
      }
    } else {
      const addProd = productsList.filter((prod) => prod.id == id);
      addProd[0]["quantidade"] = 1;
      setCart([...cart, addProd[0]]);
    }
  }

  function addToCart(id: number) {
    const prod = cart.filter((prod) => prod.id == id);
    if (prod.length > 0) {
      const newCart = cart.filter((el) => el);
      const index = newCart.indexOf(prod[0]);
      newCart[index]["quantidade"] += 1;
      setCart(newCart);
    } else {
      const addProd = productsList.filter(prod=>prod.id == id);
      addProd[0]['quantidade'] = 1;
      setCart([...cart, addProd[0]]);
    }
  }

  function zerarInCart(id: number) {
    const newCart = cart.filter((prod) => prod.id != id);
    setCart(newCart);
  }

  function removeAll() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, zerarInCart, removeToCart, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
