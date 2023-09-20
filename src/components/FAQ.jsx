import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      question: "Dummy Question 1",
      answer: "Dummy Answer 1",
    },
    {
      question: "Dummy Question 2",
      answer: "Dummy Answer 2",
    },
    {
      question: "Dummy Question 3",
      answer: "Dummy Answer 3",
    },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h2 onClick={() => setActiveIndex(index)}>{faq.question}</h2>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
