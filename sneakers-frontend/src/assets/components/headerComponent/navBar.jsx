import NavBtns from './navTabs';
import SneakIcon from '../../images/sneakShop-icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass, faX, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom';
import CartBar from '../cartComponent/openCart'
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
  const [mobileView, setMobileView] = useState(false)
  const [isUser, setIsUser] = useState(!!user);
  const showDashboard = () => {
    setLoggedIn(true);
  };

  const hideDashboard = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <div className='flex justify-between xl:px-20 px-5 bg-black/90 min-h-15 xl:max-h-20 max-h-15 w-full relative'>

        <div className='xl:flex items-center hidden '>
          <img src={SneakIcon} alt="" className='w-25 rounded-xl' />
        </div>
        <div className='xl:flex pt-6 text-sm space-x-12 hidden '>
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
        <div className='xl:hidden flex flex-col pt-5 '>
          <FontAwesomeIcon
            icon={mobileView ? faX : faBars}
            onClick={() => setMobileView(!mobileView)}
            className='text-[20px] text-gray-500 cursor-pointer hover:text-white transition pb-5 '
          />
        </div>
        <div className="text-gray-400 flex gap-7 items-center ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className='text-[20px] cursor-pointer hover:text-white transition'
          />
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
      {
        mobileView && (
          <div className=' grid pl-5 bg-black/90 z-50 relative '>
            {NavBtns.map((navBtn, index) => (
              <NavLink
                key={index}
                to={navBtn.path}
                className={({ isActive }) =>
                  `cursor-pointer font-bold transition ${isActive
                    ? "border-r-2 border-white text-white"
                    : "text-gray-400 hover:text-white"
                  }`
                }
              >
                <p>{navBtn.tab}</p>
              </NavLink>
            ))}
          </div>
        )}

    </div>
  );
};

export default NavBar;
