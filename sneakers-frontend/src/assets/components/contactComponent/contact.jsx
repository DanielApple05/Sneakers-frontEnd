import React from 'react';
import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer'
import contactHero from '../../images/contactHeroBg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

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
      <div className='flex gap-15 pl-15'>
        <div className='text-sm w-full space-y-3 p-4  '>
          <div className='mb-6'>
            <h3 className='block font-medium text-gray-700'>
              Send us a message
            </h3>
            <p>
              Have questions or need help with your order? fill out the form below and we will get back to you as soon as possible.
            </p>
          </div>
          <form>
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
              <textarea className='border border-gray-300 rounded-md p-5 w-full mt-2' />
            </div>
            <button className='bg-black text-white p-2 rounded-xl hover:translate-y-1 hover:bg-gray-700 cursor-pointer'>
              Send message
            </button>
          </form>
        </div>
        <div className='py-10 m-3 w-full '>
          <div className='mb-4 text-xs space-y-1'>
            <h3>
              Other ways to reach us:
            </h3>
            <p>
              You can connect to us through the channels below
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='flex gap-2 '>
              <div className='bg-red-100 p-3 flex h-full rounded items-center'>
                <FontAwesomeIcon icon={faEnvelope}
                  className=' text-2xl' />
              </div>
              <div className='text-xs space-y-1'>
                <p className='font-bold'>
                  Email Us
                </p>
                <p className='font-semibold'>
                  support@sneakers.com
                </p>
                <p>
                  We usually reply within 24 hours
                </p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='bg-red-100 p-3 flex h-full rounded items-center'>
                <FontAwesomeIcon icon={faPhone}
                  className=' text-2xl' />
              </div>
              <div className='text-xs space-y-1'>
                <p className='font-bold'>
                  Call Us
                </p>
                <p className='font-semibold'>
                  +234 90 2032 4848
                </p>
                <p>
                  Mon - Fri, 9AM - 6PM (WAT)
                </p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className='bg-red-100 p-3 flex h-full rounded items-center'>
                <FontAwesomeIcon icon={faPhone}
                  className=' text-2xl' />
              </div>
              <div className='text-xs space-y-1'>
                <p className='font-bold'>
                  Visit our Port folio
                </p>
                <p className='font-semibold'>
                  support@sneakers.com
                </p>
                <p>
                  We usually reply within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default contact;
