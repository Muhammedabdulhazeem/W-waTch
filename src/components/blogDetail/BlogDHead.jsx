import './BlogDHead.css'
import { useTheme } from '../../hooks/useTheme';
import detail0 from '../../assets/images/detail5.jpg'


const BlogDHead = () => {
    const { color } = useTheme()

    return (
        <div className="head">
            <h1>Make the most out of your <br /> space with these tips</h1>
            <span>Is your home small but nice, or do you have a lot of space in your home but you don't
                know what to do <br /> with it? For every home and every room, you need to think big!
            </span>
            <div style={{backgroundColor: color}} className="head-color">
                <div className="half">
                    <img src={detail0} alt="watch" />
                </div>
            </div>
        </div>
    );
}
 
export default BlogDHead;