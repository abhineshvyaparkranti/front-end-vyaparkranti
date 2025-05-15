// import React from 'react';
// import { FaEnvelope } from 'react-icons/fa';

// function EmailLink({ email }) {
//   const handleMailtoClick = (e) => {
//     e.preventDefault();
    
//     // Create the mailto URL with the email address
//     const mailtoUrl = `mailto:${email}`;
    
//     // Use window.location.href to open the default mail client
//     window.location.href = mailtoUrl;
//   };

//   return (
//     <a
//       href={`mailto:${email}`}
//       className="sidebar-btn-bodypart text-white"
//       onClick={handleMailtoClick}
//       style={{ backgroundColor: '#652e6f' }}
//     >
//       <FaEnvelope className="icon-bodypart" />
//       <span className="label-bodypart">{email}</span>
//     </a>
//   );
// }

// export default EmailLink;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaEnvelope } from 'react-icons/fa';

// const EmailLink = ({ mailto, label }) => {
//     return (
//         <Link
//             to='#'
//             onClick={(e) => {
//                 window.location.href = mailto;
//                 e.preventDefault();
//             }}
//             style={{ backgroundColor: '#652e6f' }}
//         >
//             {label}
//             <FaEnvelope className="icon-bodypart" />
//       <span className="label-bodypart">{email}</span>
//         </Link>
//     );
// };

// export default EmailLink;