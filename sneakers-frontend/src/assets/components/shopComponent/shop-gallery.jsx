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
  const [shoeBrandIsOpen, setShoeBrandIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [genderIsOpen, setGenderIsOpen] = useState(false)

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
      <div className='xl:py-10 py-5 xl:px-15 px-5 w-full bg-[#FDF6EC] min-h-screen xl:text-sm text-xs'>
        <div className="flex relative justify-between">
          <h3 className="mb-6 font-bold ">
            Shop
          </h3>

          <div
            className='bg-white/90 xl:w-2/12 w-5/12 rounded-lg fixed right-0 flex flex-col shadow-xl shadow-gray-500 '>
            <div
              onMouseOver={() => setIsClosed(!isClosed)}
              className='font-semibold xl:p-3 p-2 flex text-sm items-center cursor-pointer justify-between'>
              <h6>Filters</h6>
              <FontAwesomeIcon
                icon={isClosed ? faAngleDown : faAngleRight}

              />
            </div>
            {isClosed && (
              <div
                onMouseLeave={() => setIsClosed(false)}
                className="p-2 ">
                <div
                  onClick={() => setShoeBrandIsOpen(!shoeBrandIsOpen)}
                  className="flex items-center justify-between mb-2" >
                  <h6>Brands</h6>
                  <FontAwesomeIcon
                    icon={shoeBrandIsOpen ? faAngleRight : faAngleDown}
                  />
                </div>
                {!shoeBrandIsOpen && shoeBrands.map((brand) => (
                  <div key={brand} className="flex  gap-1 items-center">
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
                    <span className="text-start p-1 xl:text-sm text-xs capitalize">{brand}</span>
                  </div>
                ))}


                <div
                  onClick={() => setGenderIsOpen(!genderIsOpen)}
                  className="flex items-center justify-between my-3  cursor-pointer">
                  <h6>Gender</h6>
                  <FontAwesomeIcon
                    icon={shoeBrandIsOpen ? faAngleRight : faAngleDown}
                  />
                </div>
                {genderIsOpen && (
                  <div className='flex w-full gap-2 mb-6'>
                    {folders.map((folder) => (
                      <button
                        key={folder}
                        onClick={() => setActiveFilter(folder)}
                        className={`xl:py-2 py-1  px-2 text-xs rounded-xl cursor-pointer hover:bg-red-800 ${activeFilter === folder
                          ? "bg-red-700 text-white"
                          : "bg-gray-400 text-white hover:bg-red-800"
                          }`}
                      >
                        {folder}
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex">
                  <FontAwesomeIcon
                    onClick={clearFilters}
                    icon={faArrowRotateLeft}
                    className=" hover:text-red-800  text-center "
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Filters sidebar */}
          <div className='grid xl:grid-cols-5 grid-cols-2 xl:gap-6 gap-2 w-full'>
            {loading
              ? Array.from({ length: 12 }).map((_, i) => (
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
  );
};

export default ShopGallery;
