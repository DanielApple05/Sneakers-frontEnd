import React from 'react';
import Header from '../headerComponent/header';

const checkOut = () => {
  const steps = ["information", "payment", "review"];
  return (
    <div>
      <Header />
      <div>
        <h1 className='text-center text-2xl font-bold mt-10'>Checkout Page</h1>
        <div>
          <div className='flex space-x-20 '>
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center gap-2 `}>
                <div className='bg-blue-600 rounded-full px-2 ' >{index + 1}</div>
                <span>{step.charAt(0).toUpperCase() + step.slice(1)}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className='text-xl font-semibold mt-10'>Contact Information</h2>
            <p>
              We'll use this email to send you updates about your order, including shipping and delivery notifications.
            </p>
            <h6> Email address </h6>
            <form>
              <input type="email" placeholder='Enter your email' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
              <div>
                <input type="checkbox" />
                <span className='ml-2 text-sm text-gray-600'>Keep me up to date on news and exclusive offers</span>
              </div>
            </form>
            <div>
              <h2 className='text-xl font-semibold mt-10'>
                Shipping Address
              </h2>
              <form >
                <div>
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
                  <div className='flex'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>City</label>
                      <input type="text" placeholder='Enter your city' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
                    </div>
                     <div>
                      <label className='block text-sm font-medium text-gray-700'>City</label>
                      <input type="text" placeholder='Enter your city' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
                    </div>
                     <div>
                      <label className='block text-sm font-medium text-gray-700'>City</label>
                      <input type="text" placeholder='Enter your city' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Country</label>
                    <input type="text" placeholder='Enter your country' className='border border-gray-300 rounded-md p-2 w-full mt-2' />
                  </div>
                  <div>
                    <h2 className='text-xl font-semibold mt-10'>
                      Shipping Method
                    </h2>
                 
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkOut;
