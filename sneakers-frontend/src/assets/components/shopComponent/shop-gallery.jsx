import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRotateLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/cartContext";
import axios from 'axios';


const ShopGallery = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { addToCart } = useCart();
  const [sneaker, setSneaker] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

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

  const folders = ["all", "male", "female"];
  const shoeBrands = ["adidas", "jordans", "nikeAirforce"];

  const filteredShoes = sneaker.filter((shoe) => {
    const genderMatch = activeFilter === "all" || shoe.gender === activeFilter;
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(shoe.brand);
    return genderMatch && brandMatch;
  });

  const clearFilters = () => {
    setActiveFilter("all");
    setSelectedBrands([]);
  };

  return (
    <div>
      <div className='xl:py-10 py-5 w-full bg-[#FDF6EC] min-h-screen xl:text-sm text-xs'>
        <h3 className="mb-6 xl:pl-20 pl-5 font-bold relative">
          Shop
        </h3>
        <div className="flex xl:pr-10 pr-5 justify-between">
          {/* Filters sidebar */}
          <div className='bg-white xl:ml-10 ml-5 xl:min-w-[15%] min-w-[30%] xl:h-65 h-50 xl:flex hidden'>
            <div className='font-semibold border-b xl:p-3 p-1 flex items-center justify-between'>
              <h6>Filters</h6>
              <FontAwesomeIcon
                icon={isClosed ? faAngleDown : faAngleRight}
                onClick={() => setIsClosed(!isClosed)}
              />
            </div>
            {isClosed && (
              <div className="p-2">
                <div className="flex items-center justify-between mb-2">
                  <h6>Brands</h6>
                  <FontAwesomeIcon
                    icon={isOpen ? faAngleRight : faAngleDown}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
                {!isOpen && shoeBrands.map((brand) => (
                  <div key={brand} className="flex xl:gap-2 gap-1 items-center">
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
                    <span className="text-start p-2 xl:text-sm text-xs capitalize">{brand}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="grid xl:w-[80%] w-full xl:pl-10 p-5">
            <div className="flex justify-between">
              <div className='space-x-4 text-white pb-4'>
                {folders.map((folder) => (
                  <button
                    key={folder}
                    onClick={() => setActiveFilter(folder)}
                    className={`xl:py-2 py-1 xl:px-6 px-2 rounded-xl cursor-pointer hover:bg-red-800 ${
                      activeFilter === folder
                        ? "bg-red-700 text-white"
                        : "bg-gray-400 text-white hover:bg-red-800"
                    }`}
                  >
                    {folder}
                  </button>
                ))}
              </div>
              <div>
                <FontAwesomeIcon
                  onClick={clearFilters}
                  icon={faArrowRotateLeft}
                  className="xl:text-xl text-xs hover:text-red-800"
                />
              </div>
            </div>
            <div className='grid xl:grid-cols-4 grid-cols-2 xl:gap-6 gap-2'>
              {loading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-gray-400 grid rounded-xl animate-pulse">
                      <div className="rounded-t-xl h-48 bg-gray-300" />
                      <div className="grid justify-center text-center pt-2 gap-2 px-4">
                        <div className="h-4 w-32 bg-gray-300 rounded mx-auto" />
                        <div className="h-4 w-16 bg-gray-300 rounded mx-auto" />
                      </div>
                      <div className="bg-gray-300 p-3 m-4 rounded-xl h-10" />
                    </div>
                  ))
                : filteredShoes.map((shoe) => (
                    <div key={shoe.id} className="flex flex-col bg-gray-400 min-h-30 rounded-xl shadow-xl">
                      <Link to={`/product/${shoe.id}`}>
                        <img src={shoe.image} alt={shoe.name} className="rounded-t-xl w-full h-50" />
                      </Link>
                      <div className="text-center pt-2">
                        <h6 className="font-semibold">{shoe.name}</h6>
                        <p>${shoe.price}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => addToCart({ ...shoe, quantity: 1 })}
                        className="bg-blue-400 text-white m-4 font-bold p-3 rounded-xl cursor-pointer hover:bg-blue-500"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopGallery;
