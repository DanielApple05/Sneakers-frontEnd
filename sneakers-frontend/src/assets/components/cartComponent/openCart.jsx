import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faX, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../../context/cartContext';
import { useNavigate } from 'react-router-dom';

const openCart = () => {
  const [isShopping, setIsShopping] = useState(false);
  const { cartItems, removeAnItemFromCart, emptyCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {/* Cart Icon Button */}
      <button onClick={() => setIsShopping(!isShopping)} className='relative'>
        <FontAwesomeIcon icon={faCartShopping} className="text-[20px] cursor-pointer hover:text-white transition" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      {isShopping && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsShopping(false)}>
          <div className="fixed top-0 right-0 w-80 h-screen bg-white shadow-2xl p-6 flex flex-col" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Your Cart ({cartItems.length})</h2>
              <button onClick={() => setIsShopping(false)}>
                <FontAwesomeIcon icon={faX} className='rounded-xl p-1 hover:bg-gray-200' />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 mb-4 border-b pb-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeAnItemFromCart(item.id)} className="text-red-400 hover:text-red-600">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-xl font-bold hover:bg-blue-600" onClick={() => navigate('/checkout')}>
                  Checkout
                </button>
                <button onClick={emptyCart} className="w-full border border-red-400 text-red-400 py-2 rounded-xl hover:bg-red-50">
                  Clear Cart
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default openCart;

