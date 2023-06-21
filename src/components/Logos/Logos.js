import React from 'react'
import img from '../../images/equinix.png'
import img2 from '../../images/tower.png'
import img3 from '../../images/realty.png'
import img4 from '../../images/prologis.png'
const Logos = () => {
    return (
        <div className='container row gap-5 mx-auto justify-content-between align-items-center my-5 '>
            <img className='col-11 col-md-5 col-lg-2' src={img} alt="" />
            <img className='col-11 col-md-5 col-lg-2' src={img2} alt="" />
            <img className='col-11 col-md-5 col-lg-2' src={img3} alt="" />
            <img className='col-11 col-md-5 col-lg-2' src={img4} alt="" />
        </div>
    )
}

export default Logos
