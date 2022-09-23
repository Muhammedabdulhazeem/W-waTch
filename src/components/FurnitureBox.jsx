import './FurnitureBox.css'

const FurnitureBox = ({height, text, width, background, top, left, right, bottom, display='block'}) => {
    return (
        <div 
          className='f-box'
          style={{height: height, width: width, background: background}}
        >
            <span
              style={{top: top, left: left, right: right, bottom: bottom, display: display}}
            >{text}</span>
        </div>
    );
}
 
export default FurnitureBox;