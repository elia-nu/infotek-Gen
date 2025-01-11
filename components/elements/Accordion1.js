'use client'
import { useState } from 'react';
import useStore from '../../store/store';

export default function Accordion1() {
    const [activeItem, setActiveItem] = useState(1);
    const { faq } = useStore();

    const handleClick = (index) => {
      setActiveItem(index);
    };

    return (
        <>
            <div className="accordion" id="accordion">
                {faq && faq[0]?.qa?.map((item, index) => (
                    <div key={item._id || index} className="accordion-item mb-3 wow fadeInUp" data-wow-delay={`.${(index + 3)}s`}>
                        <h5 className="accordion-header" onClick={() => handleClick(index + 1)}>
                            <button 
                                className={activeItem === index + 1 ? "accordion-button" : "accordion-button collapsed"} 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#faq${index + 1}`} 
                                aria-expanded={activeItem === index + 1 ? "true" : "false"} 
                                aria-controls={`faq${index + 1}`}
                            >
                                {item.question}
                            </button>
                        </h5>
                        <div 
                            id={`faq${index + 1}`} 
                            className={activeItem === index + 1 ? "accordion-collapse show" : "accordion-collapse collapse"} 
                            data-bs-parent="#accordion"
                        >
                            <div className="accordion-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
