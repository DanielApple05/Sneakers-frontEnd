import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FtNavBtns from "./footerTab";


const FooterNavs = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Invalid Email");
      setMessage("");
      setEmail("")
      return;
    }
    if (email.includes("@")) {
      setMessage("You're Subscribed");
      setError("");
      return;
    }
  }

  return (
    <>
      <div className="bg-zinc-900 py-5 text-sm text-gray-400 ">
        
          <div className=" border-b xl:flex grid justify-between xl:px-20 px-10 xl:pb-10 pb-5 ">
            <div className="grid grid-cols-2 xl:gap-y-6 gap-y-2 xl:gap-x-15 gap-x-5">
              {FtNavBtns.links.map((link, index) => (
                <h6 key={index} className="cursor-pointer hover:text-white transition">
                  {link}
                </h6>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <h6 className="xl:mb-4 mb-2 xl:mt-0 mt-4 font-semibold">Follow Us</h6>
              <div className="flex space-x-4">
                {FtNavBtns.socials.map((icon, index) => (
                  <FontAwesomeIcon key={index} icon={icon}  className="cursor-pointer text-2xl hover:text-white transition " />
                ))}
              </div>
            </div>
            <div className=" grid xl:my-0 my-5 ">
              <h6 className="font-bold xl:my-0 my-2">
                Subscribe To Our Newsletter
              </h6>
                <form onSubmit={handleSubmit} className=" bg-white rounded overflow-hidden mb-3 flex py-2 ">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 outline-none text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="bg-red-700 hover:bg-red-800 text-white px-2 text-sm font-semibold tracking-wide transition rounded-l cursor-pointer hover:translate-x-1">
                    Subscribe
                  </button>
                </form>
              <div>
                {error && <p className="text-sm text-red-500" >{error}</p>}
                {message && <p className="text-sm text-green-500" >{message}</p>}
              </div>
              <div className="flex gap-x-4 " >
                {
                  FtNavBtns.cards.map((card, index) => (<div 
                  className="w-full"
                  key={card}  >
                    <img src={card} alt="" className=" w-full h-10 bg-white rounded cursor-pointer" />
                  </div>)) 
                }
              </div>
            </div>
          </div>
        <div className="flex justify-between xl:px-20 px-5 xl:text-sm text-xs py-2 items-center ">
          <div className=" tracking-widest w-full" >
            <h6>2026 <span className="text-red-400">SneakerShop.</span> All Rights Reserved</h6>
          </div>
          <div className="flex gap-x-5 xl:w-2/12 w-5/12 ">
            {
              FtNavBtns.brandIcon.map((brand) => ( <div className=" w-full " key={brand}>
                <img src={brand} alt="" className=" rounded" />
             </div> ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNavs;

