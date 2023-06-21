import './contact.css'
import img from '../../images/r2.png'
import ContactComponet from '../ConatactComponent/ContactComponet'
import { FaAddressBook, FaComment, FaEnvelope, FaPhone } from 'react-icons/fa'
const Contact = () => {
    return (
        <div className='ContactComponet px-5 container gap-5 my-5' id='contact'>
            <div className='left'>
                <h4 style={{ color: 'orange' }}>CONTACT US</h4>
                <h2 style={{ color: 'blueviolet', margin: '8px 0' }}>EASY TO CONTACT US</h2>
                <p className='text-muted'>occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
            </div>
            <div className='right-contact'>
                <ContactComponet icon={<FaPhone />} name={'call'} />
                <ContactComponet icon={<FaComment />} name={'Chat'} />
                <ContactComponet icon={<FaEnvelope />} name={'Message'} />
                <ContactComponet icon={<FaAddressBook />} name={'Video call'} />
            </div>
        </div>
    )
}

export default Contact
