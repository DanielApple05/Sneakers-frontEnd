import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock, faAnchorLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import SignUpBgIcon from '../../images/signUpBg.png'
import { Link, useNavigate } from 'react-router-dom';

const signIn = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!isLogin && !fullName) {
      newErrors.fullName = "Full name is required.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate('/index')
    }
  };

  return (
    <div className="absolute inset-0 bg-no-repeat overflow-hidden bg-center bg-cover w-full place-content-center  "
      style={{ backgroundImage: `url(${SignUpBgIcon})` }}>
      <div className='flex justify-between w-full '>
        <div className='m-7 text-white w-6/12'>
          <div>
            <button className='shop-btn ' >
              Blog
            </button>
          </div>
          <div className='text-[70px] font-bold tracking-wider text-start  mt-20'>
            <p className='pl-10'>Step Into</p>
            <p className='text-amber-400 pl-20'>Your style </p>
            <p className='text-[14px] text-center mt-5 text-black'>Join thosands, finding their perfect sneakers...</p>
          </div>
        </div>
        <div className=' bg-white rounded-2xl min-w-4/12 mr-25 min-h-3/4 m-15 p-10 '>
          <div className='mb-3 space-y-2 '>
            <h3 className=''>
              {isLogin ? "Get back in" : "Join the sneaker community"}
            </h3>
            <p>
              {isLogin ? "Not a member?" : "Already a member?"}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-red-600 text-[12px] cursor-pointer ml-1"
              >
                {isLogin ? "join" : "Get back in"}
              </span>
            </p>
          </div>
          <div className='space-y-2 '>
            <form className='space-y-2' onSubmit={handleSubmit}>
              {!isLogin && (<div className='border border-gray-400 rounded p-1 flex items-center'>
                <FontAwesomeIcon icon={faUser} />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder='Full Name'
                  className='outline-none ml-3 w-full' />
              </div>)}
              {!isLogin && (errors.fullName && (
                <p className="text-red-500 text-[10px]">{errors.fullName}</p>
              ))}

              <div className='border border-gray-400 rounded p-1 flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email Address'
                  className='outline-none ml-3 w-full'
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-[10px]">{errors.email}</p>
              )}
              <div className='border border-gray-400 rounded p-1 flex items-center'>
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password' className='outline-none ml-3 w-full' />
              </div>
              {errors.password && (
                <p className="text-red-500 text-[10px]">{errors.password}</p>
              )}

              {!isLogin && (<div className='border border-gray-400 rounded p-1 flex items-center'>
                <FontAwesomeIcon icon={faAnchorLock} />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder='Confirm Password' className='outline-none ml-3 w-full' />
              </div>)}
              {!isLogin && (errors.confirmPassword && (
                <p className="text-red-500 text-[10px]">{errors.confirmPassword}</p>
              ))}
              <button
                type="submit"
                className='bg-red-600 rounded-lg text-center text-white py-2 w-full cursor-pointer'
              >
                {isLogin ? "Login" : "Create Account"}
              </button>
            </form>
            <div className='rounded-lg border border-gray-300 shadow-xl p-2  items-center justify-center flex'>
              <FontAwesomeIcon icon={faGoogle} className='text-yellow-500 text-xl ' />
              <h3 className='text-center ml-3 cursor-pointer'>
                Continue with  Google
              </h3>
            </div>
            <div className='rounded-lg text-center bg-black text-white shadow-xl p-2  items-center justify-center flex'>
              <FontAwesomeIcon icon={faApple} className='text-xl' />
              <h3 className='ml-3 cursor-pointer'>
                Continue with  Apple
              </h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default signIn;
