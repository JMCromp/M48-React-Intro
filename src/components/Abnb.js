import './abnb.css';
import abnb1 from './images/abnb1.jpg'
import abnb2 from './images/abnb2.jpg'

const Abnb = () => {

    return (
        <div className='abnb-parent'>
            <div className='abnb-child'>
                <div>
                    <img src={abnb1}></img>
                </div>
                <div>
                    <p>Entire homes</p>
                </div>
            </div>
            <div className='abnb-child'>
                <div>
                    <img src={abnb2}></img>
                </div>
                <div>
                    <p>Unique stays</p>
                </div>
            </div>
            <div className='abnb-child'>
                <div>
                    <img src={abnb1}></img>
                </div>
                <div>
                    <p>Cabins and cottages</p>
                </div>
            </div>
            <div className='abnb-child'>
                <div>
                    <img src={abnb2}></img>
                </div>
                <div>
                    <p>Pets allowed</p>
                </div>
            </div>
        </div>
    );
}

export default Abnb;