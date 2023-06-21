import React from 'react'
import { FaAddressCard } from 'react-icons/fa'

const ContactComponet = ({ name, icon }) => {
    return (
        <>
            <div className=''>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                        style={{
                            width: '40px ', display: 'inline-block',
                            backgroundColor: '#EEE',
                            height: '40px',
                            textAlign: 'center',
                            lineHeight: '40px',
                            color: 'orangered'
                        }}>{icon}</span>
                    <div className='d-flex flex-column'>
                        <span>{name}</span>
                        <time>25:47:/23</time>
                    </div>
                </div>
                <button style={{
                    border: '1px solid #DDD',
                    padding: '5px 7px',
                    margin: '10px 0 0'
                }}>{name}</button>
            </div>
        </>
    )
}

export default ContactComponet
