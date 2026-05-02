import React from 'react';
import Header from '../headerComponent/header'

const contact = () => {
  return (
    <div>
      <Header />
      <div>
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
