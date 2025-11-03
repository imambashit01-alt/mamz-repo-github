import { motion, AnimatePresence } from 'framer-motion';

const CartModal = ({ isOpen, onClose, cart, onRemoveFromCart, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-mamz-white dark:bg-gray-800 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-mamz-black dark:text-mamz-white">
                  Shopping Cart ({cart.length})
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                      >
                        <div
                          className="w-16 h-16 rounded flex items-center justify-center text-2xl"
                          style={{ background: item.gradient }}
                        >
                          {item.emoji}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-mamz-black dark:text-mamz-white">
                            {item.name}
                          </h3>
                          <p className="text-mamz-red font-bold">${item.price}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          🗑️
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-mamz-black dark:text-mamz-white">
                      Total: ${total.toFixed(2)}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onCheckout}
                    className="w-full btn-primary"
                  >
                    Proceed to Checkout
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
