// footerTab.jsx
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import visaPay from '../../images/visa-icon.png';
import masterPay from '../../images/mastercard-icon.png';
import ex_Pay from '../../images/american-EX-icon.png';
import applePAy from '../../images/applePay-icon.png';
import payPal from '../../images/paypal-icon.png';
import brandLogo1 from '../../images/Brand-Logo-1.jpg';
import brandLogo2 from '../../images/brand-logo-2.jpg';
import brandLogo3 from '../../images/brand-logo-3.jpg';

const footerTab = {
  links: [
    "Customer Service",
    "Contact Us",
    "Shipping Info",
    "Returns & Exchanges",
    "FAQs",
    "About Us",
    "Our Story",
    "Careers",
    "Privacy Policies",
    "Terms & Conditions",
  ],
  socials: [
    faFacebookSquare,
    faTwitterSquare,
    faInstagramSquare,
    faYoutubeSquare,
  ],
  cards: [
    visaPay,
    masterPay,
    ex_Pay,
    applePAy,
    payPal,
  ],
  brandIcon: [
    brandLogo1,
    brandLogo2,
    brandLogo3,
  ],

};

export default footerTab;
