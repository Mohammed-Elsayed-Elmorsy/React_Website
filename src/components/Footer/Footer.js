import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-dark p-3 text-light' >
            <div className='container align-items-center justify-content-between p-5 flex-column flex-md-row gap-4 text-center' >
                <div>
                    <h2 className='m-0'>Mohammed ELmorsY</h2>
                    <p className='m-0'>FRONT END DEVELOPER</p>
                    <p className='m-0'>All Rights Preserved &copy; <span style={{ color: '#0d6efd' }}>2023</span></p>
                </div>
                <div className='contact-us'>
                    <h2 className=''>CONTACT US</h2>
                    <ul className='p-0 d-flex gap-3 justify-content-between '>
                        <li>
                            <FaFacebook className='border p-1' style={{ color: '#0d6efd', fontSize: '30px' }} />
                        </li>
                        <li>
                            <FaYoutube className='border p-1' style={{ color: '#dc3545', fontSize: '30px' }} />
                        </li>
                        <li>
                            <FaLinkedin className='border p-1' style={{ color: '#0d6efd', fontSize: '30px' }} />
                        </li>
                        <li>
                            <FaGithub className='border p-1' style={{ color: '#fd7e14', fontSize: '30px' }} />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
