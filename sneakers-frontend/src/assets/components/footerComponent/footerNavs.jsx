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
    <div className="bg-zinc-900 py-12.5 text-gray-400 ">
      <div className="border-b " >
        <div className=" flex justify-between px-20 pb-15">
          <div className="grid grid-cols-2 gap-y-6 gap-x-15">
            {FtNavBtns.links.map((link, index) => (
              <h6 key={index} className="cursor-pointer hover:text-white transition">
                {link}
              </h6>
            ))}
          </div>
          <div className="flex flex-col items-start">
            <h6 className="mb-4 font-semibold">Follow Us</h6>
            <div className="flex space-x-4">
              {FtNavBtns.socials.map((icon, index) => (
                <FontAwesomeIcon key={index} icon={icon} size="2x" className="cursor-pointer hover:text-white transition" />
              ))}
            </div>
          </div>
          <div className=" grid w-[30%] ">
            <h6>
              Subscribe To Our Newsletter
            </h6>
            <div className=" bg-white rounded overflow-hidden mb-3">
              <form onSubmit={handleSubmit} className="flex pt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 py-2 px-4 outline-none text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 text-sm font-semibold tracking-wide transition">
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              {error && <p className="text-sm text-red-500" >{error}</p>}
              {message && <p className="text-sm text-green-500" >{message}</p>}
            </div>
            <div className="flex gap-x-4 " >
              {
                FtNavBtns.cards.map((card, index) => (
                  <img key={card} src={card} alt="" className=" h-10.5 bg-white rounded cursor-pointer" />
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-20  py-4 items-center">
        <div className=" tracking-widest]" >
          <h6>2026 <span className="text-red-400">SneakerShop.</span> All Rights Reserved</h6>
        </div>

        <div className="flex gap-x-10  ">
          {
            FtNavBtns.brandIcon.map((brand) => (
              <img key={brand} src={brand} alt="" className="w-15 rounded" />

            ))
          }
        </div>

      </div>

    </div>
  );
};

export default FooterNavs;

