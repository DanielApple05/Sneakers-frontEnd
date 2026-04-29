import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';
import { useCart } from "../../../context/cartContext";
import axios from 'axios';

const SingleProductPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();

  const [sneaker, setSneaker] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSneaker = async () => {
      setLoading(true);
      try {
        // Fetch single sneaker
        const res = await axios.get(`http://localhost:5000/api/sneakers/${id}`);
        setSneaker(res.data);
        setMainImage(res.data.image);

        // Fetch related products
        const allRes = await axios.get('http://localhost:5000/api/sneakers');
        setRelatedProducts(allRes.data.slice(0, 5));
      } catch (error) {
        console.log('Error fetching sneaker:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSneaker();
  }, [id]);

  useEffect(() => {
    if (sneaker) {
      setTotal(sneaker.price * quantity);
    }
  }, [quantity, sneaker]);

  const addValue = () => setQuantity(prev => prev + 1);
  const subValue = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  if (loading) return <p className="p-4 text-center">Loading sneaker...</p>;
  if (!sneaker) return <p className="p-4 text-red-500">Sneaker not found!</p>;

  return (
    <div className="">
      <Header />
      <div>
        <div className="max-w-2xl mx-auto bg-[#f5d19f] p-6 shadow-lg my-10 rounded text-gray-700">
          <div className="flex gap-x-5">
            <div className="w-full">
              <div>
                <img src={mainImage} alt={sneaker.name} className="w-full mb-4 rounded-xl transition-opacity duration-300" />
              </div>
              <div className="flex justify-between">
                {sneaker.imageThumbnails.map((thumb, index) => (
                  <div key={index}>
                    <img
                      src={thumb}
                      alt={`Thumbnail ${index}`}
                      className={`w-16 h-16 object-cover rounded-lg cursor-pointer hover:border-2 ${mainImage === thumb ? "border-2" : ""}`}
                      onClick={() => setMainImage(thumb)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[12px] w-12/12 grid mr-5">
              <ul><li className="text-2xl font-bold">{sneaker.name}</li></ul>
              <h3 className="font-medium capitalize">{sneaker.brand}</h3>
              <p>{sneaker.description}</p>
              <p className="text-lg font-semibold">{sneaker.currency} {sneaker.price}</p>
              <div className="flex justify-between items-center">
                <div className="h-8 w-20 flex justify-between font-bold text-sm cursor-pointer gap-x-0.5">
                  <button onClick={subValue} className="bg-gray-300 rounded border border-gray-200 w-10">-</button>
                  <button onClick={addValue} className="bg-gray-300 w-10 rounded border border-gray-200">+</button>
                </div>
                <div className="mr-2 bg-amber-400 flex rounded-xl items-center justify-between p-1 gap-x-3 cursor-pointer">
                  <p>Add to cart</p>
                  <button
                    onClick={() => addToCart({ ...sneaker, quantity })}
                    className="cursor-pointer text-xl relative"
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="text-gray-600" />
                    <span className="absolute top-0 left-0 text-sm font-semibold text-green-400">{quantity}</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-between capitalize items-center">
                <p>Category: {sneaker.category}</p>
                <p>Gender: {sneaker.gender}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center space-y-7 border-gray-500 py-7 border-y-2 mb-4">
          <h3 className="font-bold">Related Products</h3>
          <div className="flex gap-x-7 items-center justify-center">
            {relatedProducts.map((sneaks) => (
              <div key={sneaks.id} className="bg-amber-100 space-y-4 pb-2 rounded-xl">
                <Link to={`/product/${sneaks.id}`}>
                  <div>
                    <img src={sneaks.image} alt={sneaks.name} className="h-50 rounded-t-xl cursor-pointer w-full" />
                  </div>
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

