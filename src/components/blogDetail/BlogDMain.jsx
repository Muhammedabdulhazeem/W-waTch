import './BlogDMain.css'
import { useTheme } from '../../hooks/useTheme';
import editor from '../../assets/images/editor.png'
import detail1 from '../../assets/images/detail1.jpg'
import detail6 from '../../assets/images/detail6.jpg'
import detail3 from '../../assets/images/detail3.jpg'


const BlogDMain = () => {
    const { color, showModal } = useTheme()

    return (
        <div className="main">
            <div className="left">
                <div className="content">
                    <h2>Grouping is the basic</h2>
                    <span>
                        Do you like small accessories, but you are afraid that it will make your room look messy? 
                        If yes, it's best to group. You can apply it <br /> everywhere. Place small groups on your 
                        dining table, side table, tv cabinet or in a closet. Don't place small accessories separately <br /> 
                        everywhere, but put a candleholder, vase and small plant together as a group. This brings calm to your interior. 
                        This way, you can combine <br /> different styles and create unity.
                    </span>
                    <div className='pic' onClick={() => showModal({bool: true, src: detail1})}>
                        <img src={detail1} alt="watch" />
                    </div>
                </div>

                <div className="content">
                    <h2>Grouping is the basic</h2>
                    <span>
                        Do you like small accessories, but you are afraid that it will make your room look messy? 
                        If yes, it's best to group. You can apply it <br /> everywhere. Place small groups on your 
                        dining table, side table, tv cabinet or in a closet. Don't place small accessories separately <br /> 
                        everywhere, but put a candleholder, vase and small plant together as a group. This brings calm to your interior. 
                        This way, you can combine <br /> different styles and create unity.
                    </span>
                    <div className='pic' onClick={() => showModal({bool: true, src: detail6})}>
                        <img src={detail6} alt="watch" />
                    </div>
                </div>
                    
                    <div style={{backgroundColor: color}} className="to-do">
                    <span>What do you do to benefit the space you have to its <br />
                        maximum extent? Share it with us with #MIfurniture!
                    </span>
                    </div>

                <div className="content">
                    <h2>Grouping is the basic</h2>
                    <span>
                        Do you like small accessories, but you are afraid that it will make your room look messy? 
                        If yes, it's best to group. You can apply it <br /> everywhere. Place small groups on your 
                        dining table, side table, tv cabinet or in a closet. Don't place small accessories separately <br /> 
                        everywhere, but put a candleholder, vase and small plant together as a group. This brings calm to your interior. 
                        This way, you can combine <br /> different styles and create unity.
                    </span>
                    <div className='pic' onClick={() => showModal({bool: true, src: detail3})}>
                        <img src={detail3} alt="watch" />
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="comment">
                    <span>Comment</span>
                    <span></span>
                </div>
                <textarea style={{resize: 'none'}} placeholder='comment'></textarea>
                <button style={{backgroundColor: color}}>COMMENT</button>
                <div className="designer">
                    <div className="img">
                        <img src={editor} alt="editor" />
                    </div>
                    <div className='text'>
                        <span className='name'>John Doe</span>
                        <span className='job'>Interior Designer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BlogDMain;