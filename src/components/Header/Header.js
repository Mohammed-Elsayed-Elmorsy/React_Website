import { useState } from 'react'
import './header.css'
import { FaBars } from 'react-icons/fa'
import img from '../../images/logo.png'
const Header = () => {
    const [nav, setNav] = useState(false)
    return (
        <header>
            <div className='header-wrapper'>
                <div className='container'>
                    <div style={{ color: 'white' }} className='logo'>
                        <h2 className='m-0'>Mohammed</h2>
                        <p className='m-0'>Front End Devloper</p>
                        {/* <img src={img} alt="logo" width={100} /> */}
                    </div>
                    <nav className={nav ? 'show' : ''}>
                        <li>
                            <a href="#resedances">Residances</a>
                        </li>
                        <li>
                            <a href="#Value">our Value</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="#">Get Started</a>
                        </li>
                        <button>
                            <a href="#">Contact</a>
                        </button>
                    </nav>
                    <FaBars className='icon' onClick={() => setNav(!nav)} />
                </div>
            </div>
        </header>
    )
}

export default Header
