import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* A dark faded background behind the cart list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* The actual sliding white panel of the cart */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* The Top Header of the Cart (Says "Your Order" and has a big X button to close) */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-brand-light/20">
              <div className="flex items-center space-x-3">
                <div className="bg-brand-primary/10 p-2 rounded-full">
                  <ShoppingBag className="text-brand-primary" size={24} />
                </div>
                <h2 className="text-xl font-bold font-serif text-brand-dark">Your Order</h2>
              </div>
              <button 
                onClick={toggleCart}
                className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* The Middle Scrollable Area: Shows a list of the actual food they added */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                // IF CART IS EMPTY: Show a friendly message
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={40} className="text-gray-300" />
                  </div>
                  <p className="text-lg font-medium">Your cart is feeling light!</p>
                  <p className="text-sm">Let's add some delicious food to it.</p>
                  <button 
                    onClick={toggleCart}
                    className="mt-6 text-brand-primary font-semibold hover:underline"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                // IF CART HAS ITEMS: Show the items in a styled list
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={item.id} 
                      className="flex space-x-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm"
                    >
                      {/* Food Image */}
                      <div className="h-20 w-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Food Details (Name, Price, Add/Remove Buttons) */}
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-gray-800 leading-tight">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <p className="font-bold text-brand-primary text-sm">{item.price}</p>
                          
                          {/* Plus and Minus buttons to change quantity */}
                          <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-2 py-1 border border-gray-100">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 rounded-full text-gray-500 hover:text-brand-dark hover:bg-gray-200 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="font-bold text-sm min-w-[20px] text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 rounded-full text-gray-500 hover:text-brand-dark hover:bg-gray-200 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* The Bottom Sticky Area: Shows the Total Bill and the green Checkout Button */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center mb-4 text-lg">
                  <span className="text-gray-600 font-medium">Subtotal</span>
                  <span className="font-bold font-serif text-2xl text-brand-dark">₹{cartTotal}</span>
                </div>
                <p className="text-sm text-gray-400 mb-6 text-center">Taxes and delivery calculated at checkout</p>
                
                <button className="w-full bg-brand-dark hover:bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <span>Proceed to Checkout</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-sm ml-2">₹{cartTotal}</span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
