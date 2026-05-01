import Header from '../assets/components/headerComponent/header';
import bgHero from '/images/background-hero.png';
import '../App.css';
import jordans_2 from '/images/male-imgfolder/male-jordans2.png';
import Jordans_f from '/images/female-imgfolder/female-airforce.png';
import Footer from '../assets/components/footerComponent/footer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Index = () => {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchSneakers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/sneakers`);
        setSneakers(res.data);
      } catch (error) {
        console.log('Error fetching sneakers', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSneakers();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-b-4xl"
          style={{ backgroundImage: `url(${bgHero})` }}
        />
        <div />
        <div className="relative z-10  space-y-3 text-white px-20 py-10 ">
          <h5 className='font-bold'>
            Latest Collection
          </h5>
          <h1 className="text-white text-7xl font-bold ">
            Step Into Style
          </h1>
          <p className='tracking-widest font-bold'>
            Discover the hottest sneakers of the season
          </p>
          <Link to={"/shop"}>
            <button className='shop-btn tracking-widest'>
              Shop Now
            </button>
          </Link>
        </div>
      </section>
      <div className='bg-white px-20 py-10'>
        <h3 className='font-bold'>
          Best Sellers
        </h3>
            {loading ? (
          <p>Loading sneakers...</p>
        ) : (  <div className='flex w-full gap-10 mt-4'>
          {sneakers.slice(2, 6).map((shoe) => ( 
            <div key={shoe._id} className="w-[25%] bg-gray-400 grid rounded-xl text-lg">
              <Link to={`/product/${shoe.id}`}> <div>
                <img src={shoe.image} alt={shoe.name} className="rounded-t-xl h-full " />
              </div> </Link>
              <div className="grid justify-center text-center pt-2">
                <h6 className='font-semibold'>{shoe.name}</h6>
                <p className='text-[18px]'>${shoe.price}</p>
              </div>
              <button className="bg-blue-400 text-white font-bold p-3 m-4 rounded-xl hover:bg-blue-600 cursor-pointer text-sm">
                Add to Cart
              </button>
            </div>
          ))}
           </div>
        )}
        <div className='flex w-full justify-between  my-10 gap-10 h-100'>
          <div className='w-[50%] relative h-3/4 '>
            <img src={jordans_2} alt="" className="w-full h-full object-cover" />

            <div className="absolute top-5 left-10 font-semibold space-y-1">
              <p >
                Men's Collection
              </p>
              <p>
                UP TO 40% OFF
              </p>
              <button className='Shop-Men bg-red-600 px-8 rounded py-1  '>
                Shop Men
              </button>
            </div>
          </div>
          <div className='w-6/12 relative h-3/4 '>
            <img src={Jordans_f} alt="" className="w-full h-full object-cover" />
            <div className="absolute top-5 left-10 font-semibold space-y-1 ">
              <p >
                Women's Collection
              </p>
              <p>
                NEW ARRIVALS
              </p>

              <button className='Shop-Men bg-red-600 px-4 rounded py-1 '>
                Shop Women
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

