//  // File: src/components/Gallery.js
// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, ArrowRight, ExternalLink, Code, Server, Database, Cloud, Shield, Layout, Search, X } from 'lucide-react';
// import ProjectModal from './ProjectModal.js';
// import VedioGallery from './VedioGallery.js';
// // No need to import CSS file anymore, we'll use Bootstrap classes

// const Gallery = () => {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [visibleItems, setVisibleItems] = useState([]);
//   const [loadedItems, setLoadedItems] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [lightboxItem, setLightboxItem] = useState(null);

//   // Define color mappings for Bootstrap
//   const colorMap = {
//     blue: 'primary',
//     purple: 'purple', // Custom color to be added in additional styles
//     green: 'success',
//     red: 'danger',
//     yellow: 'warning',
//     indigo: 'indigo', // Custom color to be added in additional styles
//   };

//   // Gallery items data with image URLs
//   const items = [
//     {
//       id: 1,
//       title: "Web Development",
//       category: "development",
//       description: "Custom web applications built with cutting-edge technologies",
//       icon: <Code className="text-white" size={36} />,
//       color: "blue",
//       image: "https://tse3.mm.bing.net/th?id=OIP.ZLBbm_s_FO2eL0jrFfZ_LAHaHa&pid=Api&P=0&h=220", // Placeholder image
//       details: "Our web development team creates custom solutions tailored to your business needs using React, Angular, Vue.js, and other modern frameworks."
//     },
//     {
//       id: 2,
//       title: "Cloud Solutions",
//       category: "infrastructure",
//       description: "Scalable cloud infrastructure for growing businesses",
//       icon: <Cloud className="text-white" size={36} />,
//       color: "purple",
//       image: "https://tse3.mm.bing.net/th?id=OIP.ZLBbm_s_FO2eL0jrFfZ_LAHaHa&pid=Api&P=0&h=220", // Placeholder image
//       details: "We provide comprehensive cloud solutions using AWS, Azure, and Google Cloud to help businesses scale efficiently."
//     },
//     {
//       id: 3,
//       title: "Database Management",
//       category: "data",
//       description: "Efficient database design and optimization services",
//       icon: <Database className="text-white" size={36} />,
//       color: "green",
//       image: "https://tse3.mm.bing.net/th?id=OIP.ZLBbm_s_FO2eL0jrFfZ_LAHaHa&pid=Api&P=0&h=220", // Placeholder image
//       details: "Our database experts design, implement, and optimize database systems that ensure data integrity and performance."
//     },
//     {
//       id: 4,
//       title: "Server Administration",
//       category: "infrastructure",
//       description: "Expert server maintenance and administration",
//       icon: <Server className="text-white" size={36} />,
//       color: "red",
//       image: "https://tse3.mm.bing.net/th?id=OIP.ZLBbm_s_FO2eL0jrFfZ_LAHaHa&pid=Api&P=0&h=220", // Placeholder image
//       details: "We provide 24/7 server monitoring, maintenance, and administration to keep your infrastructure running smoothly."
//     },
//     {
//       id: 5,
//       title: "Cybersecurity",
//       category: "security",
//       description: "Comprehensive security solutions to protect your digital assets",
//       icon: <Shield className="text-white" size={36} />,
//       color: "yellow",
//       image: "https://tse3.mm.bing.net/th?id=OIP.ZLBbm_s_FO2eL0jrFfZ_LAHaHa&pid=Api&P=0&h=220", // Placeholder image
//       details: "Our security team implements robust protocols to protect your business from threats and ensure compliance with regulations."
//     },
//     {
//       id: 6,
//       title: "UI/UX Design",
//       category: "design",
//       description: "User-centric design creating exceptional digital experiences",
//       icon: <Layout className="text-white" size={36} />,
//       color: "indigo",
//       image: "https://tse3.mm.bing.net/th?id=OIP.ZLBbm_s_FO2eL0jrFfZ_LAHaHa&pid=Api&P=0&h=220", // Placeholder image
//       details: "We design intuitive interfaces that enhance user experience and drive engagement with your digital products."
//     },
//     {
//       id: 7,
//       title: "Mobile App Development",
//       category: "development",
//       description: "Cross-platform mobile applications for iOS and Android",
//       icon: <Code className="text-white" size={36} />,
//       color: "blue",
//       image: "https://tse3.mm.bing.net/th?id=OIP.ZLBbm_s_FO2eL0jrFfZ_LAHaHa&pid=Api&P=0&h=220", // Placeholder image
//       details: "Our mobile development team creates responsive and feature-rich applications for all mobile platforms."
//     },
//     {
//       id: 8,
//       title: "IT Consulting",
//       category: "consulting",
//       description: "Strategic technology guidance for business growth",
//       icon: <Cloud className="text-white" size={36} />,
//       color: "purple",
//       image: "https://tse3.mm.bing.net/th?id=OIP.ZLBbm_s_FO2eL0jrFfZ_LAHaHa&pid=Api&P=0&h=220", // Placeholder image
//       details: "Our consultants provide expert advice on technology investments that align with your business objectives."
//     },
//     {
//       id: 9,
//       title: "Network Infrastructure",
//       category: "infrastructure",
//       description: "Reliable network design and implementation",
//       icon: <Server className="text-white" size={36} />,
//       color: "red",
//       image: "https://tse3.mm.bing.net/th?id=OIP.ZLBbm_s_FO2eL0jrFfZ_LAHaHa&pid=Api&P=0&h=220", // Placeholder image
//       details: "We design and implement secure, scalable network infrastructures that support your business operations."
//     }
//   ];

//   // Initialize visible items
//   useEffect(() => {
//     setVisibleItems(items);
//     setLoadedItems(true);
//   }, []);

//   // Filter and search functionality
//   useEffect(() => {
//     let filtered = items;
    
//     // Filter by category
//     if (activeCategory !== 'all') {
//       filtered = filtered.filter(item => item.category === activeCategory);
//     }
    
//     // Filter by search term
//     if (searchTerm.trim() !== '') {
//       const lowercasedSearch = searchTerm.toLowerCase();
//       filtered = filtered.filter(item => 
//         item.title.toLowerCase().includes(lowercasedSearch) || 
//         item.description.toLowerCase().includes(lowercasedSearch)
//       );
//     }
    
//     // Reset animation
//     setLoadedItems(false);
    
//     // Show filtered items with delay for animation
//     setTimeout(() => {
//       setVisibleItems(filtered);
//       setLoadedItems(true);
//     }, 300);
//   }, [activeCategory, searchTerm]);

//   const openModal = (item) => {
//     setSelectedItem(item);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setTimeout(() => setSelectedItem(null), 300);
//   };

//   const openLightbox = (item) => {
//     setLightboxItem(item);
//     setLightboxOpen(true);
//     // Disable body scroll when lightbox is open
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setLightboxOpen(false);
//     // Re-enable body scroll when lightbox is closed
//     document.body.style.overflow = 'auto';
//     setTimeout(() => setLightboxItem(null), 300);
//   };

//   // Handle escape key for lightbox
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape' && lightboxOpen) {
//         closeLightbox();
//       }
//     };
    
//     window.addEventListener('keydown', handleEscape);
//     return () => window.removeEventListener('keydown', handleEscape);
//   }, [lightboxOpen]);

//   // Style for the fade-in animation
//   const fadeInStyle = {
//     transition: 'opacity 0.3s, transform 0.3s',
//     opacity: loadedItems ? 1 : 0,
//     transform: loadedItems ? 'translateY(0)' : 'translateY(20px)'
//   };

//   return (
//     <>
//     <div className="container py-5">
//       {/* Header */}
//       {/* <header className="text-center mb-5 py-4 bg-dark bg-opacity-75 text-white rounded">
//         <div className="container">
//           <h1 className="display-4 fw-bold">Our Services Gallery</h1>
//           <p className="lead">
//             Explore our comprehensive range of IT solutions designed to transform your business
//           </p>
//         </div>
//       </header> */}

//       {/* Our Gallery Section */}
//       <div className="mb-5">
//         <h2 className="text-center mb-4">Our Gallery</h2>
        
//         {/* Search Bar */}
//         <div className="row justify-content-center mb-4">
//           <div className="col-md-6">
//             <div className="input-group">
//               <span className="input-group-text bg-white border-end-0">
//                 <Search size={20} />
//               </span>
//               <input
//                 type="text"
//                 placeholder="Search services..."
//                 className="form-control border-start-0"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Category filters */}
//         <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
//           {['all', 'development', 'infrastructure', 'data', 'security', 'design', 'consulting'].map(category => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`btn ${activeCategory === category ? 'btn-dark' : 'btn-light'}`}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Gallery grid */}
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           {visibleItems.length > 0 ? (
//             visibleItems.map((item, index) => (
//               <div 
//                 key={item.id}
//                 className="col"
//                 style={{ 
//                   ...fadeInStyle,
//                   transitionDelay: `${index * 100}ms` 
//                 }}
//               >
//                 <div className="card h-100 shadow-sm">
//                   {/* Card image that opens lightbox on click */}
//                   <div 
//                     className="card-img-top overflow-hidden"
//                     style={{ cursor: 'pointer', height: '200px' }}
//                     onClick={() => openLightbox(item)}
//                   >
//                     <img 
//                       src={item.image} 
//                       alt={item.title} 
//                       className="w-100 h-100 object-fit-cover" 
//                     />
//                     <div className="overlay-container">
//                       <div className="overlay-text">
//                         <i className="bi bi-zoom-in fs-3"></i>
//                         <p className="m-0 mt-2">View Full Image</p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Service icon and title */}
//                   <div className="card-body d-flex flex-column">
//                     <div className="d-flex align-items-center mb-3">
//                       <div className={`icon-bg bg-${colorMap[item.color]} bg-opacity-75 rounded-circle p-2 me-3`}>
//                         {React.cloneElement(item.icon, { size: 24 })}
//                       </div>
//                       <h5 className="card-title mb-0">{item.title}</h5>
//                     </div>
//                     {/* <p className="card-text text-muted">{item.description}</p> */}
//                     <button 
//                       onClick={() => openModal(item)}
//                       className={`btn btn-link text-${colorMap[item.color]} p-0 mt-auto d-flex align-items-center`}
//                       style={{ textDecoration: 'none' }}
//                     >
//                       Learn more 
//                       <ExternalLink 
//                         size={16} 
//                         className="ms-2" 
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center p-5 bg-light bg-opacity-50 rounded">
//               <p>No services found matching your criteria.</p>
//               <button 
//                 onClick={() => {
//                   setActiveCategory('all');
//                   setSearchTerm('');
//                 }}
//                 className="btn btn-primary"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Pagination */}
//       {visibleItems.length > 0 && (
//         <nav aria-label="Page navigation" className="my-5">
//           <ul className="pagination justify-content-center">
//             <li className="page-item">
//               <a className="page-link" href="#" aria-label="Previous">
//                 <ArrowLeft size={20} />
//               </a>
//             </li>
//             {[1, 2, 3].map(num => (
//               <li key={num} className={`page-item ${num === 1 ? 'active' : ''}`}>
//                 <a className="page-link" href="#">{num}</a>
//               </li>
//             ))}
//             <li className="page-item">
//               <a className="page-link" href="#" aria-label="Next">
//                 <ArrowRight size={20} />
//               </a>
//             </li>
//           </ul>
//         </nav>
//       )}

//       {/* CTA Section */}
//       <div className="bg-primary bg-opacity-75 bg-gradient text-white rounded p-5 text-center mt-5">
//         <div className="container">
//           <h2 className="h1 mb-3">Ready to transform your IT infrastructure?</h2>
//           <p className="lead mb-4">
//             Connect with our experts to discuss how our services can help your business grow
//           </p>
//           <button className="btn btn-light btn-lg px-4 fw-bold">
//             Contact Us Today
//           </button>
//         </div>
//       </div>

//       {/* Project Modal */}
//       {selectedItem && (
//         <ProjectModal 
//           isOpen={modalOpen} 
//           onClose={closeModal} 
//           project={selectedItem} 
//         />
//       )}

//       {/* Lightbox Modal */}
//       {lightboxItem && (
//         <div 
//           className={`lightbox-container ${lightboxOpen ? 'show' : ''}`}
//           onClick={closeLightbox}
//         >
//           <div 
//             className="lightbox-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button 
//               className="lightbox-close"
//               onClick={closeLightbox}
//             >
//               <X size={24} />
//             </button>
//             <img 
//               src={lightboxItem.image} 
//               alt={lightboxItem.title} 
//               className="lightbox-image"
//             />
//             <div className="lightbox-caption">
//               <h3>{lightboxItem.title}</h3>
//               {/* <p>{lightboxItem.description}</p> */}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Custom CSS for lightbox, hover effects and additional colors */}
//       <style jsx>{`
//         /* Additional Bootstrap-friendly colors */
//         .bg-purple {
//           background-color: #9b59b6 !important;
//         }
//         .bg-indigo {
//           background-color: #5352ed !important;
//         }
//         .text-purple {
//           color: #9b59b6 !important;
//         }
//         .text-indigo {
//           color: #5352ed !important;
//         }
        
//         /* Icon background */
//         .icon-bg {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 40px;
//           height: 40px;
//         }
        
//         /* Hover effects */
//         .card:hover {
//           transform: translateY(-5px);
//           transition: transform 0.3s;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
//         }
        
//         /* Image overlay container */
//         .overlay-container {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background-color: rgba(0, 0, 0, 0.6);
//           opacity: 0;
//           transition: all 0.3s ease;
//         }
        
//         .card-img-top:hover .overlay-container {
//           opacity: 1;
//         }
        
//         .overlay-text {
//           color: white;
//           text-align: center;
//         }
        
//         /* Object fit utility */
//         .object-fit-cover {
//           object-fit: cover;
//         }
        
//         /* Lightbox styles */
//         .lightbox-container {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.9);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 2000;
//           opacity: 0;
//           visibility: hidden;
//           transition: opacity 0.3s, visibility 0.3s;
//         }
        
//         .lightbox-container.show {
//           opacity: 1;
//           visibility: visible;
//         }
        
//         .lightbox-content {
//           position: relative;
//           max-width: 90%;
//           max-height: 90%;
//           transform: scale(0.95);
//           transition: transform 0.3s;
//         }
        
//         .lightbox-container.show .lightbox-content {
//           transform: scale(1);
//         }
        
//         .lightbox-close {
//           position: absolute;
//           top: -40px;
//           right: 0;
//           background: none;
//           border: none;
//           color: white;
//           font-size: 24px;
//           cursor: pointer;
//           z-index: 2001;
//         }
        
//         .lightbox-image {
//           display: block;
//           max-width: 100%;
//           max-height: 80vh;
//           margin: 0 auto;
//           box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
//         }
        
//         .lightbox-caption {
//           color: white;
//           text-align: center;
//           padding: 20px 0;
//         }
//       `}</style>
//     </div>

//     <VedioGallery />
//     </>
//   );
// };

// export default Gallery;


// File: src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowLeft, ArrowRight, ExternalLink, Code, Server, Database, Cloud, Shield, Layout, Search, X } from 'lucide-react';
import ProjectModal from './ProjectModal.js';
import VedioGallery from './VedioGallery.js';
import GallerySkeleton from './GallerySkeleton.js';
import { API_BASE_URL } from '../../api/config/apiConfig';
import BubbleSection from './BubbleSection.js';
import SectionTitle from '../SectionTitle/SectionTitle.js';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [error, setError] = useState(null);

  // Define color mappings for Bootstrap
  const colorMap = {
    blue: 'primary',
    purple: 'purple', // Custom color to be added in additional styles
    green: 'success',
    red: 'danger',
    yellow: 'warning',
    indigo: 'indigo', // Custom color to be added in additional styles
  };

  // Define icons mapping
  const iconMap = {
    'Web Development': <Code className="text-white" size={36} />,
    'Infrastructure': <Server className="text-white" size={36} />,
    'Cloud Solutions': <Cloud className="text-white" size={36} />,
    'Database': <Database className="text-white" size={36} />,
    'Security': <Shield className="text-white" size={36} />,
    'Design': <Layout className="text-white" size={36} />,
    'default': <Code className="text-white" size={36} />
  };

  // Fetch gallery items from the API
   
  useEffect(() => {
  const fetchGalleryItems = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${API_BASE_URL}/api/get-gallery`);
      console.log('Gallery data response =======>:', response.data.Gallerys);

      const data = response.data;

      if (data.status && data.success && data.Gallerys) {
        const formattedItems = data.Gallerys.map((item, index) => {
          const category = item.filter_category?.toLowerCase() || 'development';
          const color = Object.keys(colorMap)[index % Object.keys(colorMap).length];

          return {
            id: item.id,
            title: item.filter_category || 'Service',
            category: category,
            description: `${item.filter_category} services for your business`,
            icon: iconMap[item.filter_category] || iconMap['default'],
            color: color,
            image: item.image,
            details: `Our ${item.filter_category} services are designed to meet your business requirements and help you achieve your goals.`,
            sorting: item.sorting || 0
          };
        });

        formattedItems.sort((a, b) => a.sorting - b.sorting);

        setAllItems(formattedItems);
        setVisibleItems(formattedItems);
      } else {
        throw new Error('Invalid data structure received from API');
      }
    } catch (err) {
      console.error('Error fetching gallery data:', err);
      setError(err.message);

      setAllItems(getFallbackItems());
      setVisibleItems(getFallbackItems());
    } finally {
      setLoading(false);
      setTimeout(() => setLoadedItems(true), 300);
    }
  };

  fetchGalleryItems();
}, []);


  // Filter and search functionality
  useEffect(() => {
    if (allItems.length === 0) return;
    
    let filtered = allItems;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      const lowercasedSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(lowercasedSearch) || 
        item.description.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    // Reset animation
    setLoadedItems(false);
    
    // Show filtered items with delay for animation
    setTimeout(() => {
      setVisibleItems(filtered);
      setLoadedItems(true);
    }, 300);
  }, [activeCategory, searchTerm, allItems]);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  const openLightbox = (item) => {
    setLightboxItem(item);
    setLightboxOpen(true);
    // Disable body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Re-enable body scroll when lightbox is closed
    document.body.style.overflow = 'auto';
    setTimeout(() => setLightboxItem(null), 300);
  };

  // Handle escape key for lightbox
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxOpen]);

  // Style for the fade-in animation
  const fadeInStyle = {
    transition: 'opacity 0.3s, transform 0.3s',
    opacity: loadedItems ? 1 : 0,
    transform: loadedItems ? 'translateY(0)' : 'translateY(20px)'
  };

  // Get unique categories for filter buttons
  const getUniqueCategories = () => {
    if (allItems.length === 0) {
      return ['all', 'development', 'infrastructure', 'data', 'security', 'design'];
    }
    
    const categories = ['all', ...new Set(allItems.map(item => item.category))];
    return categories;
  };

  // Function to get fallback items if API fails
  const getFallbackItems = () => {
    return [
      {
        id: 1,
        title: "Web Development",
        category: "development",
        description: "Custom web applications built with cutting-edge technologies",
        icon: <Code className="text-white" size={36} />,
        color: "blue",
        image: "/api/placeholder/400/300",
        details: "Our web development team creates custom solutions tailored to your business needs using React, Angular, Vue.js, and other modern frameworks."
      },
      {
        id: 2,
        title: "Cloud Solutions",
        category: "infrastructure",
        description: "Scalable cloud infrastructure for growing businesses",
        icon: <Cloud className="text-white" size={36} />,
        color: "purple",
        image: "/api/placeholder/400/300",
        details: "We provide comprehensive cloud solutions using AWS, Azure, and Google Cloud to help businesses scale efficiently."
      },
      {
        id: 3,
        title: "Database Management",
        category: "data",
        description: "Efficient database design and optimization services",
        icon: <Database className="text-white" size={36} />,
        color: "green",
        image: "/api/placeholder/400/300",
        details: "Our database experts design, implement, and optimize database systems that ensure data integrity and performance."
      }
    ];
  };

  return (
    <>
    <div className="container py-5">
      {/* Our Gallery Section */}
      <div className="mb-5">
        {/* <h2 className="text-center mb-4">Our Gallery</h2> */}
          <SectionTitle subTitle={'Our Gallery'}  />
        
         

        {/* Category filters */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {getUniqueCategories().map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn ${activeCategory === category ? 'btn-dark' : 'btn-light'}`}
              disabled={loading}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        {loading ? (
          <GallerySkeleton count={6} />
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {visibleItems.length > 0 ? (
              visibleItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="col"
                  style={{ 
                    ...fadeInStyle,
                    transitionDelay: `${index * 100}ms` 
                  }}
                >
                   <div className="card h-100 shadow-sm">
                <div
                  className="card-img-top overflow-hidden position-relative h-[300px] cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/400/300";
                    }}
                  />
                  <div className="overlay-container">
                    <div className="overlay-text">
                      <i className="bi bi-zoom-in fs-3"></i>
                      <p className="m-0 mt-2">View Full Image</p>
                    </div>
                  </div>
                </div>
              </div>

                </div>
              ))
            ) : (
              <div className="col-12 text-center p-5 bg-light bg-opacity-50 rounded">
                <p>{error ? `Error: ${error}` : 'No services found matching your criteria.'}</p>
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchTerm('');
                  }}
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Pagination */}
      {/* {!loading && visibleItems.length > 0 && (
        <nav aria-label="Page navigation" className="my-5">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <ArrowLeft size={20} />
              </a>
            </li>
            {[1, 2, 3].map(num => (
              <li key={num} className={`page-item ${num === 1 ? 'active' : ''}`}>
                <a className="page-link" href="#">{num}</a>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <ArrowRight size={20} />
              </a>
            </li>
          </ul>
        </nav>
      )} */}

      {/* CTA Section */}
       <BubbleSection />

      {/* Project Modal */}
      {selectedItem && (
        <ProjectModal 
          isOpen={modalOpen} 
          onClose={closeModal} 
          project={selectedItem} 
        />
      )}

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div 
          className={`lightbox-container ${lightboxOpen ? 'show' : ''}`}
          onClick={closeLightbox}
        >
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="lightbox-close"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <img 
              src={lightboxItem.image} 
              alt={lightboxItem.title} 
              className="lightbox-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/api/placeholder/400/300";
              }}
            />
            {/* <div className="lightbox-caption">
              <h3>{lightboxItem.title}</h3>
              <p>{lightboxItem.description}</p>
            </div> */}
          </div>
        </div>
      )}

      {/* Custom CSS for lightbox, hover effects and additional colors */}
      <style jsx>{`
        /* Additional Bootstrap-friendly colors */
        .bg-purple {
          background-color: #9b59b6 !important;
        }
        .bg-indigo {
          background-color: #5352ed !important;
        }
        .text-purple {
          color: #9b59b6 !important;
        }
        .text-indigo {
          color: #5352ed !important;
        }
        
        /* Icon background */
        .icon-bg {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
        }
        
        /* Hover effects */
        .card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
        }
        
        /* Image overlay container */
        // .overlay-container {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   background-color: rgba(0, 0, 0, 0.6);
        //   opacity: 0;
        //   transition: all 0.3s ease;
        // }
        
        .card-img-top:hover .overlay-container {
          opacity: 1;
        }
        
        .overlay-text {
          color: white;
          text-align: center;
        }
        
        /* Object fit utility */
        .object-fit-cover {
          object-fit: cover;
        }
        
        /* Lightbox styles */
        .lightbox-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s;
        }
        
        .lightbox-container.show {
          opacity: 1;
          visibility: visible;
        }
        
        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          transform: scale(0.95);
          transition: transform 0.3s;
        }
        
        .lightbox-container.show .lightbox-content {
          transform: scale(1);
        }
        
        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          z-index: 2001;
        }
        
        .lightbox-image {
          display: block;
          max-width: 100%;
          max-height: 80vh;
          margin: 0 auto;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
        }
        
        .lightbox-caption {
          color: white;
          text-align: center;
          padding: 20px 0;
        }

        .card {
  border: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.card-img-top {
  height: 300px;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card-img-top img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; /* Removes any inline spacing */
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-img-top:hover .overlay-container {
  opacity: 1;
}

.overlay-text {
  color: white;
  text-align: center;
}

/* To ensure equal card sizing in grid layouts */
.row {
  display: flex;
  flex-wrap: wrap;
}

.row > [class*="col"] {
  display: flex;
}
      `}</style>
    </div>

    <VedioGallery />
    </>
  );
};

export default Gallery;