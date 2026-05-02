import React, { useState } from 'react';
import Header from '../headerComponent/header';
import { useCart } from '../../../context/cartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const checkOut = () => {
  const steps = ["information", "payment", "review"];
  const { cartItems, emptyCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
      <Header />
      <div className='p-10 w-full'>
        <h1 className='text-center text-2xl font-bold'>Checkout Page</h1>
        <div className='flex space-x-15 '>
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center gap-2 `}>
              <div className='bg-blue-600 rounded-full px-2 ' >{index + 1}</div>
              <span>{step.charAt(0).toUpperCase() + step.slice(1)}</span>
            </div>
          ))}
        </div>
        <form className='flex space-x-4 mt-5'>
          <div className=' w-4/12 space-y-5 '>
            <div className='border border-gray-400 rounded-lg p-3 space-y-3 '>
              <h2 className='text-xl font-semibold'>Contact Information</h2>
              <p>
                We'll use this email to send you updates about your order, including shipping and delivery notifications.
              </p>
              <h6> Email address </h6>

              <input type="email" placeholder='Enter your email' className='border border-gray-300 rounded-md p-2 w-full' />
              <div className=''>
                <input type="checkbox" />
                <span className='ml-2 text-sm text-gray-600'>Keep me up to date on news and exclusive offers</span>
              </div>
            </div>
            <div className='border border-gray-400 rounded-lg p-3 space-y-3 mt-4'>
              <h2 className='text-xl font-semibold'>
                Shipping Address
              </h2>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>Full Name</label>
                  <input type="text" placeholder='Enter your full name' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>Phone number</label>
                  <input type="tel" placeholder='+234 3454 5433' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Address</label>
                <input type="text" placeholder='Enter your address' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
              </div>
              <div className='flex space-x-3'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>City</label>
                  <input type="text" placeholder='Enter your city' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>State</label>
                  <input type="text" placeholder='Enter your city' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>ZIP Code</label>
                  <input type="text" placeholder='Enter your city' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Country</label>
                <input type="text" placeholder='Enter your country' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
              </div>
              <div>
                <h2 className='text-xl font-semibold mt-5'>
                  Shipping Method
                </h2>
              </div>
            </div>
          </div>
          <div className=' w-4/12'>
            <div className='border border-gray-300 rounded-lg p-2'>
              <div>
                <h2 className=' font-bold'>
                  Payment Method
                </h2>
                <p>
                  All transactions are secure and encrypted
                </p>
              </div>
              <div className='border border-gray-300 space-y-3 rounded-lg p-3 mt-4 text-sm'>
                <div>
                  <p>Credit/Debit Card</p>
                </div>
                <div>
                  <label className='block font-medium text-gray-700'> Card Number</label>
                  <input type="text" className='border border-gray-300 rounded-md p-2 w-full mt-2'
                    placeholder='7586 8659 6956' />
                </div>
                <div className='flex space-x-3'>
                  <div>
                    <label className='block font-medium text-gray-700'> Expiry date</label>
                    <input type="text" className='border border-gray-300 rounded-md p-2 w-full mt-2'
                      placeholder='MM/YY' />
                  </div>
                  <div>
                    <label className='block font-medium text-gray-700'> CVV </label>
                    <input type="text" className='border border-gray-300 rounded-md p-2 w-full mt-2'
                      placeholder='123' />
                  </div>
                </div>
                <div>
                  <label className='block font-medium text-gray-700'> Name On Card </label>
                  <input type="text" className='border border-gray-300 rounded-md p-2 w-full mt-2'
                    placeholder='John Doe' />
                </div>
              </div>
            </div>
            <div className='text-sm mt-5 gap-2 grid border border-gray-300 rounded-lg p-3 '>
              <h2 className=' font-bold'> Billing Address</h2>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <p>
                  Same as shipping address
                </p>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <p>
                  Use a different billing address
                </p>
              </div>
            </div>
            <div className=' space-y-2 w-full'>
              <button className='bg-black text-white p-2 w-full rounded-lg mt-3 font-bold cursor-pointer hover:translate-y-1 hover:bg-red-800 hover:text-black'>
                Continue to Review
              </button>
              <p>
                your payment information is secure and encrypted
              </p>
            </div>
          </div>
          <div className=' flex-1 border border-gray-300 p-1 rounded-lg'>
            <div className='flex justify-between py-2'>
              <p>
                Order Summary ({cartItems.length})
              </p>
              <p>
                Edit Cart
              </p>
            </div>
            <div className=' overflow-y-auto'>
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
                  </div>
                ))
              )}
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold'>
                Total
              </p>
              <p className='font-bold'>
                ${total}.00
              </p>
            </div>
            <div className='p-1 grid gap-4 mt-7 text-xs'>
              <div>
                <p className='font-semibold'>
                  100% Authentic Products
                </p>
                <p>
                  We guarantee authentic sneakers
                </p>
              </div>
              <div>
                <p className='font-semibold'>
                  Free Returns
                </p>
                <p>
                  Return within 7 days of delivery
                </p>
              </div>
                 <div>
                <p className='font-semibold'>
                  Secure Payment
                </p>
                <p>
                 Your payment is safe with us 
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
}

export default checkOut;
