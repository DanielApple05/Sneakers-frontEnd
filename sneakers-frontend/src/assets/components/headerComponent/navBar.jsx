import NavBtns from './navTabs';
import SneakIcon from '../../images/sneakShop-icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom';
import CartBar from '../cartComponent/addToCart'
import { useCart } from '../../../context/cartContext';
import { useState } from 'react';
import SideDashboard from './sideDashboard';
import { jwtDecode } from 'jwt-decode';

const NavBar = () => {
  const { cartItems } = useCart();

  const token = localStorage.getItem('token');
  const user = token ? jwtDecode(token) : null;
  const firstLetter = user?.username?.charAt(0).toUpperCase();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isUser, setIsUser] = useState(!!user);
  const showDashboard = () => {
    setLoggedIn(true);
  };

  const hideDashboard = () => {
    setLoggedIn(false);
  };

  return (
    <div className='flex justify-between px-20 bg-black/90 min-h-20 max-h-25 w-full relative'>

      <div className='flex items-center'>
        <img src={SneakIcon} alt="" className='w-25 rounded-xl' />
      </div>

      <div className='space-x-12.5 flex pt-10 text-sm'>
        {NavBtns.map((navBtn, index) => (
          <NavLink
            key={index}
            to={navBtn.path}
            className={({ isActive }) =>
              `cursor-pointer font-bold transition ${isActive
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

        <div
          onClick={() => showDashboard(true)}
          className='text- cursor-pointer hover:text-white transition' >
          {isUser ?
            <button className=' bg-red-500 rounded-full px-2 cursor-pointer'
            >{firstLetter}</button> : <FontAwesomeIcon
              className='text-[25px]'
              icon={faCircleUser}
            />
          } </div>
      </div>
      {
        loggedIn && (
            <SideDashboard hideDashboard={hideDashboard} user={user} />
        )
      }
    </div>
  );
};

export default NavBar;
