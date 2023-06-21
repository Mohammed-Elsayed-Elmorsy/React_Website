import './hero.css'
import { FaCompass, FaPlus } from 'react-icons/fa'
import img from '../../images/hero-image.png'
const Hero = () => {
    return (
        <div className="container" >
            <div className='inner'>
                <div className='info'>
                    <h2>
                        Discover Most  Siutable Property
                    </h2>
                    <p>a verse or passage of Scripture chosen especially for the subject

                        of a sermon or for authoritative support (as for a doctrine)
                    </p>
                    <div className='search' style={{ position: 'relative' }}>
                        <FaCompass className='iconcompass' />
                        <input type="text" />
                        <span style={{ padding: '10px', display: 'inline-block' }}>Search</span>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <span>9,000 <FaPlus style={{ color: 'greenyellow' }} /></span>
                            <p>Premium Products</p>
                        </div>
                        <div>
                            <span>12,000 <FaPlus style={{ color: 'greenyellow' }} /></span>
                            <p>People</p>
                        </div>
                        <div>
                            <span>1,000 <FaPlus style={{ color: 'greenyellow' }} /></span>
                            <p>Rewards</p>
                        </div>

                    </div>
                </div>
                <div className='image-container'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
