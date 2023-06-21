import './res.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { FaCoins } from 'react-icons/fa'
import { SliderSett } from '../../utils/SliderSett'
const Slider = () => {
    return (
        <div className='container d-block my-5' id='resedances'>
            <div style={{ padding: '0 35px ', marginBottom: '-20px' }}>
                <span style={{ color: "#ebae34", fontWeight: 'bold' }}>Best Choices</span>
                <h3>Popular Redidences</h3>
            </div>
            <Swiper className='my-3' {...SliderSett} style={{ position: 'relative', padding: "45px 25px" }}>
                <SliderBtns />
                {data.map((item, i) => {
                    return (
                        <SwiperSlide key={i} >
                            <div className='item'>
                                <div className='image'>
                                    <img src={item.image} alt="alt" />
                                </div>
                                <div>
                                    <span style={{ margin: '5px 0', display: 'block' }}><FaCoins style={{ color: '#ebae34' }} /> {item.price} </span>
                                    <h3>{item.name}</h3>
                                    <p style={{ color: 'grey' }}>{item.detail}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

const SliderBtns = () => {
    const Swiper = useSwiper()
    return (
        <div className='btns' style={{ position: 'absolute', right: '15px', top: '0px' }}>
            <button onClick={() => Swiper.slidePrev()}>&lt;</button>
            <button onClick={() => Swiper.slideNext()}>&gt;</button>
        </div>
    )
}

export default Slider
