import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../../context/cartContext';

const AddToCart = () => {

  const [isShopping, setIsShopping] = useState(false);
  const { cartItems } = useCart();

  return (
    <div>
      <button 
        onClick={() => setIsShopping(!isShopping)} 
        className='relative'
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-[20px] cursor-pointer hover:text-white transition"
        />

        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      {isShopping && (
        <div className="fixed inset-0 bg-black/40 z-40">
          <div className="fixed top-0 right-0 w-80 h-screen bg-white shadow-2xl p-6 transform transition-transform duration-300">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button onClick={() => setIsShopping(false)}>
                <FontAwesomeIcon 
                  icon={faX} 
                  className='rounded-xl p-1 hover:bg-gray-200' 
                />
              </button>
            </div>

            <div>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="mb-4 border-b pb-2">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AddToCart;

