import { FaAngleDown } from 'react-icons/fa'
import data from '../../utils/accordion'
import img from '../../images/hero-image.png'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './value.css'
const Value = () => {
    return (
        <section className='container justify-content-between gap-5 px-5 align-items-center mt-5 flex-lg-row flex-column' id='Value'>
            <div className='left ' style={{ marginBottom: '-59px' }}>
                <div className='image-container '>
                    <img src={img} alt="image" />
                </div>
            </div>
            <div className='right'>
                <div className='right-top'>
                    <h4 style={{ color: 'orange' }}>OUR VALUE</h4>
                    <h2 style={{ color: 'blueviolet', margin: '8px 0' }}>VALUE WE GAVE TO YOU</h2>
                    <p className='text-muted'>occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
                </div>
                <Accordion className='accordion border-0' allowZeroExpanded={false} allowMultipleExpanded={false} preExpanded={[1]} >
                    {data ? data.map((item, i) => {
                        return (
                            <AccordionItem className="accordion-item " uuid={i}>
                                <AccordionItemHeading className="accordion-head">
                                    <AccordionItemButton className="accordion-btn">
                                        <span>{item.icon}</span>
                                        <h6>{item.heading}</h6>
                                        <span><FaAngleDown /></span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='text-muted'>
                                        {item.detail}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    }) : ''}
                </Accordion>
            </div>
        </section>
    )
}

export default Value
