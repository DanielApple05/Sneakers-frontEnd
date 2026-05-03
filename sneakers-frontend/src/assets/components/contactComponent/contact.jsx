import React from 'react';
import Header from '../headerComponent/header';
import contactHero from '../../images/contactHeroBg.jpg';

const contact = () => {
  return (
    <div>
      <Header />
      <div className='relative ' >
        <img
          src={contactHero}
          className='object-cover w-full h-100'
          alt="" />
        <div className='absolute top-0 p-15 ml-5 mt-10 font-bold w-4/12 space-y-3 '>
          <p className=''>
            We're Here
          </p>
          <h1>To Help</h1>
          <p className='font-semibold text-xs'>
            Have a question or just want to say hello? Get in touch with us today.
          </p>
          <h3 className='font-bold'>
            Contact Us
          </h3>
        </div>
      </div>
      <div className='flex'>
        <div className='text-sm space-y-3 p-4 '>
          <div className='mb-6'>
            <h3 className='block font-medium text-gray-700'>
              Send us a message
            </h3>
            <p>
              Have questions or need help with your order? fill out the form below and we will get back to you as soon as possible.
            </p>
          </div>
          <div>
            <label className='block font-medium text-gray-700'> Full name </label>
            <input type="text" className='border border-gray-300 rounded-md p-2 w-full mt-2' />
          </div>
          <div>
            <label className='block font-medium text-gray-700' > Email Address </label>
            <input type="text" className='border border-gray-300 rounded-md p-2 w-full mt-2' />
          </div>
          <div>
            <label className='block font-medium text-gray-700'> Subject </label>
            <input type="text" className='border border-gray-300 rounded-md p-2 w-full mt-2' />
          </div>
          <div>
            <label className='block font-medium text-gray-700'> Message </label>
            <textarea className='border border-gray-300 rounded-md p-5 w-full mt-2'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
