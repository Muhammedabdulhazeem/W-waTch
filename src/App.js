import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Theme from './components/theme/Theme';
import { useAuth } from './hooks/useAuth';
import Layout from './Layout';

import BlogDetail from './pages/BlogDetail';
import BlogListing from './pages/BlogListing';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Item from './pages/Item';
import Profile from './pages/Profile';
import Signup from './pages/Signup';


function App() {
  const { authIsReady, user} = useAuth()

  return (
    <div className="App">
      <Modal />
        <Navbar />
        <Routes>
          <Route path='/*' element={<Layout />} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/'/>} />
          <Route path='/profile' element={user ? <Profile /> : <Navigate to='/signup'/>} />
          <Route path='/cart' element={user ? <Cart /> : <Navigate to='/signup'/>} />
        </Routes>
      <Theme />

    </div>
  );
}

export default App;


      // <Navbar />
      // <Routes>
      //   <Route path='/' element={<Home />} />
      //   <Route path='/category' element={<Category />} />
      //   <Route path='/item' element={<Item />} />
      //   <Route path='/faq' element={<Faq />} />
      //   <Route path='/blog-detail' element={<BlogDetail />} />
      //   <Route path='/blog-list' element={<BlogListing />} />
      //   <Route path='/contact' element={<Contact />} />
      // </Routes>
      // <Slider />
      // <Footer />