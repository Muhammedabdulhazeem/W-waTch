import './Item.css'
import { useTheme } from '../hooks/useTheme';
import HeadItem from '../components/item/HeadItem'
import LatestNewsItem from '../components/item/LatestNewsItem';
import MainItem from '../components/item/MainItem';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const links = ['DESCRIPTION', 'INFO', 'COLLECTION', 'REVIEW']

const Item = () => {
    const { color } = useTheme()
    const [subLink, setSubLink] = useState(0);
    return (
        <div className="item container">
            {/* HEAD */}
            <HeadItem />

            <div className="sub-links">
                {links.map((lnk, index) => (
                    <span
                      key={lnk}
                      onClick={() => setSubLink(index)}
                      style={{color: index === subLink ? color : '#333'}}
                    >{lnk}</span>
                ))}
                {/* <span>DESCRIPTION</span>
                <span>INFO</span>
                <span>COLLECTION</span>
                <span>REVIEW</span> */}
            </div>

            {/* LATEST NEWS */}
            <LatestNewsItem />

            <div className="suggestion">
                <p>Our Suggestions</p>
                <h1>You may also like</h1>
                <span style={{backgroundColor: color}}></span>
            </div>

            {/* MAIN */}
            <MainItem />
        </div>
    );
}
 
export default Item;