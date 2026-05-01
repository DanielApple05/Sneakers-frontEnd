import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRotateLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/cartContext";
import axios from 'axios';


const ShopGallery = () => {
    const API_URL = import.meta.env.VITE_API_URL; 
const [sneaker, setSneaker] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSneakers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/sneakers`);
        setSneaker(res.data);
      } catch (error) {
        console.log('Error fetching sneakers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSneakers();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const allShoes = sneaker;
  const folders = ["all", "male", "female"];
  const shoeBrands = ["adidas", "jordans", "nikeAirforce"];
  const filteredShoes = allShoes.filter((shoe) => {
 const genderMatch =
      activeFilter === "all" || shoe.gender === activeFilter;
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(shoe.brand);
    return genderMatch && brandMatch;
  });
  const clearFilters = () => {
    setActiveFilter("all");
    setSelectedBrands([]);
  };

  return (
    <div className=' py-10 w-full bg-[#FDF6EC] min-h-screen'>
      <h2 className="mb-6 text-[30px] pl-20 font-bold relative ">
        Shop
      </h2>
      <div className="flex pr-10 justify-between ">
        <div className='bg-white ml-10 w-[15%] h-65'>
          <div className='font-semibold border-b p-3 flex items-center justify-between'>
            <h6 className=''>
              Filters
            </h6>
            <FontAwesomeIcon icon={isClosed ? faAngleDown : faAngleRight} onClick={() => setIsClosed(!isClosed)} />
          </div>
          {isClosed && <div className="grid p-3 ">
            <div className="flex items-center justify-between mb-2">
              <h6>Brands</h6>
              <FontAwesomeIcon icon={isOpen ? faAngleRight : faAngleDown} onClick={() => setIsOpen(!isOpen)} />
            </div>
            {!isOpen && shoeBrands.map((brand) => (
              <div key={brand} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => {
                    if (selectedBrands.includes(brand)) {
                      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                    } else {
                      setSelectedBrands([...selectedBrands, brand]);
                    }
                  }}
                />
                <span className="text-start p-2 text-sm capitalize">{brand}</span>
              </div>
            ))}
          </div>}
        </div>
        <div className="grid w-[80%] pl-10 min-h-screen">
          <div className="flex justify-between ">
            <div className='space-x-4 text-white pb-4'>
              {folders.map((folder) => (
                <button key={folder} onClick={() => setActiveFilter(folder)} className={` py-2 px-6 rounded-xl cursor-pointer hover:bg-red-800  ${activeFilter === folder
                  ? "bg-red-700 text-white"
                  : "bg-gray-400 text-white hover:bg-red-800"
                  }`}>{folder}</button>))}
            </div>
            <div>
              <FontAwesomeIcon onClick={clearFilters} icon={faArrowRotateLeft} className={`text-xl  hover:text-red-800`} />
            </div>
          </div>
          <div className='grid grid-cols-4 gap-6 '>
            {filteredShoes.map((shoe) => (
              <div key={shoe.id} className="flex flex-col h-86 bg-gray-400 rounded-xl shadow-xl relative">
                {
                  loading ? (
                    <p className="text-center py-20">Loading...</p>
                  ) : ( <Link to={`/product/${shoe.id}`}>
                  <img src={shoe.image} className="rounded-t-xl relative w-full h-50" /> </Link>)
                }
                <div className="text-center pt-2">
                  <h6 className="font-semibold">{shoe.name}</h6>
                  <p>${shoe.price}</p>
                </div>
                <button type="button" className="bg-blue-400 text-white m-4 font-bold p-3 rounded-xl cursor-pointer hover:bg-blue-500">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopGallery;
