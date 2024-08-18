'use client';
import { Collapse } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Panel } = Collapse;

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border rounded-md ">
    <div
      onClick={onClick}
      className="flex justify-between items-center cursor-pointer p-4 text-xl text-[#555555]"
    >
      {title}
      <span
        className={`transform transition-transform duration-300 ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
      >
        <DownCircleOutlined style={{ color: '#63A03E', fontSize: '25px' }} />
      </span>
    </div>
    {isOpen && (
      <div className="p-4 border">
        <p>{content}</p>
      </div>
    )}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const items = [
    { title: 'What is RazcoFood?', content: 'RazcoFood is a leading food delivery service offering a wide range of meals from various cuisines directly to your doorstep.' },
    { title: 'How can I place an order?', content: 'You can place an order through our website or mobile app by browsing our menu, selecting your items, and proceeding to checkout.' },
    { title: 'What payment methods are accepted?', content: 'We accept major credit cards, debit cards, and online payment platforms such as PayPal and Apple Pay.' },
    { title: 'Is there a delivery fee?', content: 'Yes, a small delivery fee is applied to each order. The fee may vary depending on your location and the time of day.' },
    { title: 'How can I contact customer support?', content: 'You can contact our customer support team via the live chat on our website, email, or phone for any assistance.' },
  ];

  return (
    <div className="space-y-4 container mx-auto my-12">
      <h1 className='text-5xl font-bold text-[#555656] text-center my-12'>Frequently Asked Questions</h1>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
