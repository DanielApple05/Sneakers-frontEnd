import React, { useState, useEffect } from 'react';
import Header from '../assets/components/headerComponent/header';
import ShopGallery from '../assets/components/shopComponent/shop-gallery';
import Footer from '../assets/components/footerComponent/footer';

const Shop = () => {
  return (
    <>
      <Header />
        <ShopGallery />
      <Footer />
     </>
  );
}

export default Shop;
