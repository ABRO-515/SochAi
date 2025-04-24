"use client"
import { useState } from 'react';

const faqs = [
  {
    question: "What is SochAi?",
    answer: "Our AI uses powerful models like OpenAI and DeepSeek to understand your queries and respond smartly. It's constantly learning from community answers too!",
  },
  {
    question: "Who can use SochAi?",
    answer: "Our AI uses powerful models like OpenAI and DeepSeek to understand your queries and respond smartly. It's constantly learning from community answers too!",
  },
  {
    question: "What kind of questions can I ask?",
    answer: "Our AI uses powerful models like OpenAI and DeepSeek to understand your queries and respond smartly. It's constantly learning from community answers too!",
  },
  {
    question: "Is SochAi free to use?",
    answer: "Our AI uses powerful models like OpenAI and DeepSeek to understand your queries and respond smartly. It's constantly learning from community answers too!",
  },
  {
    question: "How does the AI in SochAi work?",
    answer:
      "Our AI uses powerful models like OpenAI and DeepSeek to understand your queries and respond smartly. It's constantly learning from community answers too!",
  },
  {
    question: "How is my data protected?",
    answer: "Our AI uses powerful models like OpenAI and DeepSeek to understand your queries and respond smartly. It's constantly learning from community answers too!",
  },
  {
    question: "Where can I download the app?",
    answer: "Our AI uses powerful models like OpenAI and DeepSeek to understand your queries and respond smartly. It's constantly learning from community answers too!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#252525] py-16 px-6 md:px-20 text-white">
        <h2 className=" text-white text-left items-center text-4xl md:text-5xl font-light SF-Pro-Display-Regular italic mb-12">
     <span className="not-italic  SF-Pro-Bold" > Got&nbsp;</span>  
        
        <span className="text-red-500 SF-Pro-Bold not-italic">Questions? </span>We've Got Answers.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-[#313030] rounded-lg border border-[#4B4B4B] SF-Pro-Display-Regular px-5 py-8"
          >
            <div
              onClick={() => toggle(i)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-lg font-medium">{item.question}</p>
              <span className="text-2xl">
                {openIndex === i ? "✕" : "+"}
              </span>
            </div>
            {openIndex === i && item.answer && (
              <p className="mt-4 text-white/80 text-sm SF-Pro-Display-Regular leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
