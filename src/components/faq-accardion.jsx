import React from 'react';
import { FaqItem } from './faq-item';

export const FaqAccordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    
    console.log(faqs); 
    return (
        <div className="w-full">
            {faqs.map((faq, index) => (
    <FaqItem
        key={index}
        question={faq.question}
        links={[faq.link1, faq.link2, faq.link3, faq.link4, faq.link5].filter(Boolean)} 
        isOpen={openIndex === index}
        toggleAccordion={() => toggleAccordion(index)}
    />
))}
        </div>
    );
};