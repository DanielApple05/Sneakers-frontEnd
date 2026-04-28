import { Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/index';
import Shop from './pages/shop';
import SignUp from './assets/components/signUp/signIn';
import SingleProductPage from './assets/components/singleProductPage/singleProductPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/index" element={<Index />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
    </Routes>
  );
};

export default App;

