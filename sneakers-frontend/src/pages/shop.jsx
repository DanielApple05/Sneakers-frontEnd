import React from 'react';
import Header from '../assets/components/headerComponent/header';
import ShopGallery from '../assets/components/shopComponent/shop-gallery';
import Sneakers from '../assets/components/sneakerData';
import Footer from '../assets/components/footerComponent/footer'

const shop = () => {
  return (
    <div>
      <Header/>
      <ShopGallery sneaker={Sneakers} />
      <Footer/>
    </div>
  );
}
export default shop;
