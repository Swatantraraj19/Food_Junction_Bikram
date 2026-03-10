import { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

// 1. Create the Context (the empty memory bank)
const CartContext = createContext();

// 2. Export a custom hook to easily access the memory bank
export const useCart = () => useContext(CartContext);

// 3. Create the Provider (the manager of the memory bank)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // A function to add an item to the order list
  const addToCart = (item) => {
    setCartItems((prevList) => {
      // Check if this specific food is already in our list
      const existingItem = prevList.find((i) => i.id === item.id);
      
      if (existingItem) {
        // If yes, just increase the quantity by 1
        return prevList.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      
      // If no, add the brand new item and say quantity is 1
      return [...prevList, { ...item, quantity: 1 }];
    });

    // Trigger the popup notification we installed in Step 2!
    toast.success(`${item.name} added to cart!`, {
      style: { background: '#1F2937', color: '#fff' },
      iconTheme: { primary: '#EF4444', secondary: '#fff' },
    });
  };

  // A function to remove an item completely
  const removeFromCart = (itemId) => {
    setCartItems((prevList) => prevList.filter((item) => item.id !== itemId));
    toast.error('Item removed from cart', {
        style: { background: '#1F2937', color: '#fff' },
    });
  };

  // A function to increase/decrease quantity (+ or - buttons)
  const updateQuantity = (itemId, changeAmount) => {
    setCartItems((prevList) => {
      return prevList.map((item) => {
        if (item.id === itemId) {
          const newTotal = item.quantity + changeAmount;
          // Don't let quantity drop below 1 (they should use 'remove' instead)
          return newTotal > 0 ? { ...item, quantity: newTotal } : item;
        }
        return item;
      });
    });
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Math helper: count total items (e.g., 2 burgers + 1 fry = 3 items)
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Math helper: calculate total bill amount
  const cartTotal = cartItems.reduce((total, item) => {
    // Convert "₹280" string into the number 280
    const priceNumber = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
    return total + (priceNumber * item.quantity);
  }, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        isCartOpen, 
        toggleCart, 
        cartTotal, 
        cartCount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
