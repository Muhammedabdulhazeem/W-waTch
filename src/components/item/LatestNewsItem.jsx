import './LatestNewsItem.css'
import { useTheme } from '../../hooks/useTheme';
import editor from '../../assets/images/editor.png'


const LatestNewsItem = () => {
    const { color } = useTheme()

    return (
        <div className="latest-news">
            <div className="left">
                <br />
                <div className="content">
                    <p>Description</p>
                    <h1>Bjorg ch<h5 style={{fontWeight: '500', display: 'inline', margin: '0'}}>air.</h5></h1>
                    <span style={{backgroundColor: color}} className="hr-line-one"></span>
                    <span className='text'>Brighten up your living areas this Winter with top tips from our interior design team.</span><br /><br />
                    <span className='text'>Brighten up your living areas this Winter with top tips from our interior design team.</span><br /><br />
                    <span className='text'>Brighten up your living areas this Winter with top tips from our interior design team.</span>
                </div>
            </div>

            <div className="middle"></div>

            <div className="right">
                <br />
                <div className="content">
                    <h2>5 ideas for <br /> choosing the <br /> perfect</h2>
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
 
export default LatestNewsItem;