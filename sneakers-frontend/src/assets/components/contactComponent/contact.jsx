import React from 'react';
import Header from '../headerComponent/header';
import contactHero from '../../images/contactHeroBg.jpg';

const contact = () => {
  return (
    <div>
      <Header />
      <div className='relative' > 
        <img
          src={contactHero}
          className='object-cover w-full h-100'
          alt="" />
        <div className='absolute top-0 p-15 font-bold '>
          <p className=''>
            We're Here 
          </p>
          <h1 className='tracking-widest'>To Help</h1>
          <p className='font-semibold text-xs'>
            Have a question or
          </p>
          <h3 className='font-bold'>
            Contact Us
          </h3>
        </div>
      </div>
      <div className='flex'>
        <div>
          <div>
            <h3>
              Send us a message
            </h3>
            <p>
              Have questions or need help with your order? fill out the form below and we will get back to you as soon as possible.
            </p>
          </div>
          <div>
            <label> Full name </label>
            <input type="text" />
          </div>
          <div>
            <label> Email Address </label>
            <input type="text" />
          </div>
          <div>
            <label> Subject </label>
            <input type="text" />
          </div>
          <div>
            <label> Message </label>
            <textarea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
