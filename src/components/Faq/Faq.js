// import { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import { motion, AnimatePresence } from 'react-motion'; // Note: We're simulating motion functionality

// // Custom FAQ component with animations
// const Faq = () => {
//   // FAQ data
//   const faqs = [
//     {
//       question: "How do I create an account?",
//       answer: "To create an account, click on the 'Sign Up' button in the top right corner of our homepage. Fill in your details including name, email address, and password. Once submitted, you'll receive a confirmation email to verify your account."
//     },
//     {
//       question: "What payment methods do you accept?",
//       answer: "We accept all major credit cards including Visa, Mastercard, and American Express. We also support payments through PayPal, Apple Pay, and Google Pay for your convenience."
//     },
//     {
//       question: "How can I reset my password?",
//       answer: "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password. Make sure to check your spam folder if you don't see the email in your inbox."
//     },
//     {
//       question: "Do you offer refunds?",
//       answer: "Yes, we offer a 30-day money-back guarantee on all our products. If you're not satisfied with your purchase, please contact our customer support team at support@example.com with your order details to initiate the refund process."
//     },
//     {
//       question: "How can I contact customer support?",
//       answer: "Our customer support team is available 24/7. You can reach us through email at support@example.com, live chat on our website, or by phone at 1-800-123-4567. We aim to respond to all inquiries within 24 hours."
//     }
//   ];

//   // State to track which FAQ item is open
//   const [activeIndex, setActiveIndex] = useState(null);

//   // Toggle FAQ item
//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-12">
//       {/* Header with animation */}
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h1>
//           <p className="text-lg text-gray-600">Find answers to our most commonly asked questions below</p>
//           <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* FAQ Container */}
//         <div className="max-w-3xl mx-auto">
//           {faqs.map((faq, index) => (
//             <div 
//               key={index}
//               className={`mb-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
//                 activeIndex === index ? 'border-l-4 border-blue-500' : ''
//               }`}
//             >
//               {/* Question */}
//               <button
//                 className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <span className="font-medium text-lg">{faq.question}</span>
//                 {activeIndex === index ? 
//                   <ChevronUp className="text-blue-500" size={20} /> : 
//                   <ChevronDown className="text-gray-500" size={20} />
//                 }
//               </button>

//               {/* Answer with animation */}
//               {activeIndex === index && (
//                 <div className="px-4 pb-4 text-gray-600 bg-blue-50">
//                   <p>{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Contact Section */}
//         <div className="mt-16 p-6 bg-blue-600 text-white rounded-lg max-w-3xl mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
//           <p className="mb-6">Our team is here to help you with any other questions you might have.</p>
//           <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;