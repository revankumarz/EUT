import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === product.id);
      if (existing) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, qty: it.qty + 1 } : it
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty } : it)));
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((s, it) => s + it.qty, 0);
  const totalPrice = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQty, clearCart, totalCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
