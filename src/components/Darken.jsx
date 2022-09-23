import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import './Darken.css'


const Darken = () => {
    const [fillColor, setFillColor] = useState(false)
    const {color} = useTheme()


    return (
        <div className="darken">
            <div className="icon-wrap">
                <div onClick={() => {setFillColor(!fillColor)}} className="like">
                    <svg class="w-6 h-6" fill={fillColor? color : 'white'} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" 
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                            clip-rule="evenodd">
                        </path>
                    </svg>
                </div>
                <div className="cart-icon">
                    <svg class="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                    </path></svg>
                </div>
            </div>
        </div>
    );
}
 
export default Darken;