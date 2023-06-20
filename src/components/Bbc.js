import './bbc.css';
import bbc1 from './images/bbc1.jpg'
import bbc2 from './images/bbc2.jpg'

const Bbc = () => {
    return (
        <div className='bbc-parent'>
            <div className='bbc-child'>
                <div>
                    <img src={bbc1}></img>
                </div>
                <div className='bbc-h3'>
                    <h3>Don't think pandemic is over, Whitty warns</h3>
                </div>
                <div className='bbc-p'>
                    <p>I'm a block of text for the first card</p>
                </div>
                <div className='bbc-bottom'>
                    <p>10m | <b>Health</b></p>
                </div>
            </div>
            <div className='bbc-child'>
                <div>
                    <img src={bbc2}></img>
                </div>
                <div className='bbc-h3'>
                    <h3>Pay rise was set to be 2.1% - NHS chief</h3>
                </div>
                <div className='bbc-p'>
                    <p>I'm a block of text for the second card</p>
                </div>
                <div className='bbc-bottom'>
                    <p>10m | <b>UK Politics</b></p>
                </div>
            </div>
            <div className='bbc-child'>
                <div>
                    <img src={bbc1}></img>
                </div>
                <div className='bbc-h3'>
                    <h3>Charity criticises Morgan's comments about Meghan</h3>
                </div>
                <div className='bbc-p'>
                    <p>I'm a block of text for the third card</p>
                </div>
                <div className='bbc-bottom'>
                    <p>10m | <b>Ent and Arts</b></p>
                </div>
            </div>
            <div className='bbc-child'>
                <div>
                    <img src={bbc2}></img>
                </div>
                <div className='bbc-h3'>
                    <h3>Unilever drops word 'normal' from beauty products</h3>
                </div>
                <div className='bbc-p'>
                    <p>I'm a block of text for the forth card</p>
                </div>
                <div className='bbc-bottom'>
                    <p>10m | <b>Business</b></p>
                </div>
            </div>
        </div>
    );
}

export default Bbc;