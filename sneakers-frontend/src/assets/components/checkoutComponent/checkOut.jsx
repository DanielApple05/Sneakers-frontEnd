import React from 'react';
import Header from '../headerComponent/header';

const checkOut = () => {
  const steps = ["information", "payment", "review"];
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
            <div className='border border-gray-400 rounded-lg p-3 space-y-3 mt-4'>
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
          <div className=' w-4/12 '>
            <div>
              <h2>
                Payment Method
              </h2>
              <p>
                All transactions are secure and encrypted
              </p>
            </div>
            <div className='border border-gray-300 space-y-3 rounded-lg p-3 mt-4'>
              <div>
                <p>Credit/Debit Card</p>
              </div>
              <div className='grid '>
                <label> Card Number</label>
                <input type="text" className='border border-gray-300' placeholder='7586 8659 6956' />
              </div>
              <div>
                <div className='grid '>
                  <label> Expiry date</label>
                  <input type="text" className='border border-gray-300'
                    placeholder='MM/YY' />
                </div>
                <div className='grid '>
                  <label> CVV </label>
                  <input type="text" className='border border-gray-300'
                    placeholder='123' />
                </div>
              </div>
              <div className='grid '>
                <label> Name On Card </label>
                <input type="text" className='border border-gray-300'
                  placeholder='John Doe' />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
}

export default checkOut;
