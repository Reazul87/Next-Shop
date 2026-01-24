"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is your shipping policy and how long does delivery take?",
      answer:
        "We ship worldwide. Standard delivery takes 3–7 business days in most countries. Free shipping on orders over $50.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes! We ship to over 150 countries. Shipping rates are calculated at checkout.",
    },
    {
      question: "What is your return & refund policy?",
      answer:
        "30-day hassle-free returns. Items must be unused and in original packaging. Refunds processed within 5–10 business days.",
    },
    {
      question: "Are your products covered by warranty?",
      answer:
        "Yes — most electronics & wearables come with 1–2 year manufacturer warranty. Furniture has 1-year structural warranty.",
    },
    {
      question: "What should I do if my product arrives damaged?",
      answer:
        "Contact us within 48 hours with photos — we'll send a replacement or full refund.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use industry-standard 256-bit SSL encryption and work with trusted payment processors.",
    },
  ];


  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-4 md:py-6 bg-linear-to-r from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 tracking-tight mb-5 md:mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  border border-gray-200 rounded-xl 
                  bg-white overflow-hidden 
                  transition-all duration-200
                  ${isOpen ? "shadow-md ring-1 ring-gray-200" : "shadow-sm hover:shadow"}
                `}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className={`
                    w-full px-4 py-3 md:py-4 text-left flex items-center justify-between
                    transition-colors duration-200
                    ${isOpen ? "bg-gray-50" : "hover:bg-gray-50"}
                  `}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-[15px] md:text-lg font-medium text-gray-900 pr-4">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`
                      h-6 w-6 text-gray-500 shrink-0 transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 md:px-6 pb-2 pt-1 text-sm md:text-base text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}