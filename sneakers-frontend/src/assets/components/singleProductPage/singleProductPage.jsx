import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';
import { useCart } from "../../../context/cartContext";
import axios from 'axios';

const SingleProductPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { addToCart } = useCart();
  const { id } = useParams();
  const [sneaker, setSneaker] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSneaker = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/sneakers/${id}`);
        setSneaker(res.data);
        setMainImage(res.data.image);

        const allRes = await axios.get(`${API_URL}/sneakers`);
        setRelatedProducts(allRes.data.slice(0, 5));
      } catch (error) {
        console.log('Error fetching sneaker:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSneaker();
  }, [id]);

  const addValue = () => setQuantity(prev => prev + 1);
  const subValue = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  if (loading) return <p className="p-4 text-center">Loading sneaker...</p>;
  if (!sneaker) return <p className="p-4 text-red-500">Sneaker not found!</p>;

  return (
    <div>
      <Header />
      <div className="p-4 grid gap-5">
        <div className="xl:max-w-2xl max-w-full mx-auto bg-[#f5d19f] p-6 shadow-lg xl:my-10 my-0 rounded text-gray-700 xl:flex grid gap-5">
          {/* Images */}
          <div className="w-full">
            <img src={mainImage} alt={sneaker.name} className="w-full mb-4 rounded-xl transition-opacity duration-300" />
            <div className="flex justify-between">
              {sneaker.imageThumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index}`}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer hover:border-2 ${mainImage === thumb ? "border-2" : ""}`}
                  onClick={() => setMainImage(thumb)}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="text-[12px] w-12/12 grid mr-5 gap-y-2">
            <p className="text-2xl font-bold">{sneaker.name}</p>
            <h3 className="font-medium capitalize">{sneaker.brand}</h3>
            <p>{sneaker.description}</p>
            <p className="text-lg font-semibold">{sneaker.currency}{sneaker.price}</p>

            {/* Total */}
            {quantity > 0 && (
              <p className="text-sm text-gray-600">
                Total: {sneaker.currency}{(sneaker.price * quantity).toFixed(2)}
              </p>
            )}

            {/* Quantity & Add to Cart */}
            <div className="flex justify-between items-center">
              <div className="h-8 flex items-center font-bold text-sm gap-x-1">
                <button onClick={subValue} className="bg-gray-300 rounded border border-gray-200 w-8 h-8">-</button>
                <span className="w-8 text-center">{quantity}</span>
                <button onClick={addValue} className="bg-gray-300 rounded border border-gray-200 w-8 h-8">+</button>
              </div>

              <button
                onClick={() => addToCart({ ...sneaker, quantity })}
                className="mr-2 bg-amber-400 flex rounded-xl items-center justify-between p-2 gap-x-3 cursor-pointer font-semibold hover:bg-amber-500"
              >
                Add to Cart
              </button>
            </div>

            <div className="flex justify-between capitalize items-center">
              <p>Category: {sneaker.category}</p>
              <p>Gender: {sneaker.gender}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="text-center space-y-7 border-gray-500 py-7 border-y-2 mb-4">
          <h3 className="font-bold">Related Products</h3>
          <div className="xl:flex grid grid-cols-2 gap-7 items-center justify-center">
            {relatedProducts.map((sneaks) => (
              <div key={sneaks.id} className="bg-amber-100 space-y-4 pb-2 rounded-xl">
                <Link to={`/product/${sneaks.id}`}>
                  <img src={sneaks.image} alt={sneaks.name} className="h-50 rounded-t-xl cursor-pointer w-full" />
                </Link>
                <div className="font-semibold m-3">
                  <p>{sneaks.name}</p>
                  <h4>{sneaks.currency}{sneaks.price}</h4>
                </div>
              </div>
            ))}
          </div>
          <Link to="/shop">
            <button className="border-2 border-amber-200 p-2 bg-amber-100 cursor-pointer hover:bg-[#f5d19f] hover:border-black hover:font-medium">
              Show More
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;

