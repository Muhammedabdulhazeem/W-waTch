import './LatestNews.css'
import { useTheme } from '../../hooks/useTheme';
import editor from '../../assets/images/editor.png'
import arrowRight from '../../assets/icons/arrow-right.svg'
import { Link } from 'react-router-dom';

const LatestNews = () => {
    const {color} = useTheme()

    return (
        <div className="latest-news">
            <div className="left">
                <br />
                <div className="content">
                    <p>Trending</p>
                    <h1>Latest News</h1>
                    <span style={{backgroundColor: color}} className="hr-line-one"></span>
                    <span className='text'>Brighten up your living areas this Winter with top <br /> tips from our interior design team.</span>
                    <Link to='/blog-list'>
                    <div style={{backgroundColor: color}}>
                        <span>EXPLORE ALL ARTICLES</span>
                        <div>
                            <img src={arrowRight} alt="arrow" />
                        </div>
                    </div>
                    </Link>
                </div>
            </div>

            <div className="middle"></div>

            <div className="right">
                <br />
                <div className="content">
                    <h2>Living room <br /> and lighting <br /> ideas that will <br /> inspire you <br /> this Winter.</h2>
                    <span style={{backgroundColor: color}} className="hr-line-2"></span>
                    <span className="texts">Choosing the right mattress is not so <br /> simple. We all sleep in a different way <br /> and we all want our mattress to adapt <br /> perfectly to our body.</span>
                    <div className="editor">
                        <div className="img">
                            <img src={editor} alt="editor" />
                        </div>
                        <span>Editorial staff</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LatestNews;