import NavBtns from './navTabs';
import SneakIcon from '../../images/sneakShop-icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link,  NavLink } from 'react-router-dom';
import CartBar from '../cartComponent/addToCart'
import { useCart } from '../../../context/cartContext';
import { useState } from 'react';

const NavBar = () => {
  const { cartItems } = useCart();

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className='flex justify-between px-20 bg-black/90 min-h-20 max-h-25 w-full'>
      
      <div className='flex items-center'>
        <img src={SneakIcon} alt="" className='w-25 rounded-xl' />
      </div>

      <div className='space-x-12.5 flex pt-10 text-sm'>
        {NavBtns.map((navBtn, index) => (
          <NavLink
            key={index}
            to={navBtn.path}
            className={({ isActive }) =>
              `cursor-pointer font-bold transition ${
                isActive
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            <p>{navBtn.tab}</p>
          </NavLink>
        ))}
      </div>

      <div className="text-gray-400 flex gap-7.5 items-center">
        <button>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='text-[20px] cursor-pointer hover:text-white transition'
          />
        </button>

        {/* Pass count to CartBar */}
        <CartBar cartCount={cartItems.length} />

    
          <button onClick={handleLogin}>
            <FontAwesomeIcon
              icon={faCircleUser}
              className='text-[25px] cursor-pointer hover:text-white transition'
            />
          </button>
      
      </div>
      {
        loggedIn && (
         <div className="absolute top-0 right-0 bg-white p-4 rounded shadow-lg h-screen w-3/12">
           <p>Welcome Back User</p>
          <p> You're signed in </p>
         </div>
        )
      }
    </div>
  );
};

export default NavBar;
