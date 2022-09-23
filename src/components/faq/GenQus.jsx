import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import './GenQus.css'

const nums = [1,2,3,4,5,6,,7,8,9,10]

const GenQus = () => {
    const { color } = useTheme()
    const [isOpen, setIsOpen] = useState(0);
    console.log(isOpen)

    const openDrop = (numb) => {
        if(isOpen === numb) {
            setIsOpen(0)
        } else {
            setIsOpen(numb)
        }
    }

    return (
        <div className="gen-qus">
            <div className="content">
                <h1>General Questions</h1>
                <span style={{backgroundColor: color}} className="hr-line"></span>
                <div className="qus-wrap">
                    <div className="qus">
                        <span>How can I pay for my orders?</span>
                        <div onClick={() => openDrop(1)}>+</div>
                    </div>
                    <div className={isOpen === 1 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="qus-wrap">
                    <div className="qus">
                        <span>Can I pay by bank transfer?</span>
                        <div onClick={() => openDrop(2)}>+</div>
                    </div>
                    <div className={isOpen === 2 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="qus-wrap">
                    <div className="qus">
                        <span>What is Amazon Pay?</span>
                        <div onClick={() => openDrop(3)}>+</div>
                    </div>
                    <div className={isOpen === 3 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="qus-wrap">
                    <div className="qus">
                        <span>I want to change my account information?</span>
                        <div onClick={() => openDrop(4)}>+</div>
                    </div>
                    <div className={isOpen === 4 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="qus-wrap">
                    <div className="qus">
                        <span>How can I pay for my order?</span>
                        <div onClick={() => openDrop(5)}>+</div>
                    </div>
                    <div className={isOpen === 5 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className="content">
                <h1>General Questions</h1>
                <span style={{backgroundColor: color}} className="hr-line"></span>
                <div className="qus-wrap">
                    <div className="qus">
                        <span>How can I pay for my orders?</span>
                        <div onClick={() => openDrop(6)}>+</div>
                    </div>
                    <div className={isOpen === 6 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="qus-wrap">
                    <div className="qus">
                        <span>Can I pay by bank transfer?</span>
                        <div onClick={() => openDrop(7)}>+</div>
                    </div>
                    <div className={isOpen === 7 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="qus-wrap">
                    <div className="qus">
                        <span>What is Amazon Pay?</span>
                        <div onClick={() => openDrop(8)}>+</div>
                    </div>
                    <div className={isOpen === 8 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="qus-wrap">
                    <div className="qus">
                        <span>I want to change my account information?</span>
                        <div onClick={() => openDrop(9)}>+</div>
                    </div>
                    <div className={isOpen === 9 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="qus-wrap">
                    <div className="qus">
                        <span>How can I pay for my order?</span>
                        <div onClick={() => openDrop(10)}>+</div>
                    </div>
                    <div className={isOpen === 10 ? "ans-wrap open" : 'ans-wrap'}>
                        <div className="ans">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate.
                            </p>
                        </div>
                    </div>
                </div>

                
            </div>

        </div>
    );
}
 
export default GenQus;