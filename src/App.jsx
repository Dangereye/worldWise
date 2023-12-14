// React router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';

// Components
import PageNav from './components/PageNav';

export default function App() {
  return (
    <BrowserRouter>
      <PageNav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
