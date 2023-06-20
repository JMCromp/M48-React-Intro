import './netflix.css';
import net1 from './images/net1.jpg'
import net2 from './images/net2.jpg'

const Netflix = () => {

    return (
        <div className='netflix-parent'>
            <div className='netflix-child'>
                <img src={net1}></img>
            </div>
            <div className='netflix-child'>
                <img src={net2}></img>
            </div>
            <div className='netflix-child'>
                <img src={net1}></img>
            </div>
            <div className='netflix-child'>
                <img src={net2}></img>
            </div>
            <div className='netflix-child'>
                <img src={net1}></img>
            </div>
        </div>
    );
}

export default Netflix;