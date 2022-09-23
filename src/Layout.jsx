import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

import BlogDetail from './pages/BlogDetail';
import BlogListing from './pages/BlogListing';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Item from './pages/Item';

const Layout = () => {
    return (
        <div className="layout">           
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category' element={<Category />} />
                <Route path='/item' element={<Item />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/blog-detail' element={<BlogDetail />} />
                <Route path='/blog-list' element={<BlogListing />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Slider />
            <Footer />
        </div>
    );
}
 
export default Layout;