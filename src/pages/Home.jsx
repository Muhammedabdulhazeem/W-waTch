import './Home.css'

import FurnitureBox from '../components/FurnitureBox';
import Head from '../components/Home/Head';
import SaleOff from '../components/Home/SaleOff';
import JoinUs from '../components/Home/JoinUs';
import LatestNews from '../components/Home/LatestNews';

const Home = () => {
    return (
        <div className='home container'>
            <Head />
            <SaleOff />
            <JoinUs />
            <LatestNews />
        </div>
    );
}
 
export default Home;