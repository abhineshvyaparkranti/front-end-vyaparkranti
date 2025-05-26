//  import React, { useState, useEffect } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Required for Reactstrap
// import './PackageComparison.css';

// const PackageComparison = ({ packages, isOpen, toggle, preSelectedPackages = [] }) => {
//     const [selectedPackages, setSelectedPackages] = useState([]);
//     const [availablePackages, setAvailablePackages] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Initialize available packages when the component mounts or packages prop changes
//         if (packages && packages.length > 0) {
//             setAvailablePackages(packages);
            
//             // Use pre-selected packages if provided
//             if (preSelectedPackages && preSelectedPackages.length > 0) {
//                 setSelectedPackages([...preSelectedPackages]);
//             } 
//             // Otherwise pre-select the first two packages if available
//             else if (packages.length >= 2) {
//                 setSelectedPackages([packages[0], packages[1]]);
//             } else if (packages.length === 1) {
//                 setSelectedPackages([packages[0]]);
//             }
//         }
//     }, [packages, preSelectedPackages, isOpen]);

//     const handlePackageSelection = (packageItem) => {
//         // Toggle selection of a package
//         if (selectedPackages.some(pkg => pkg.id === packageItem.id)) {
//             // Deselect if already selected
//             setSelectedPackages(selectedPackages.filter(pkg => pkg.id !== packageItem.id));
//         } else {
//             // Add to selection if fewer than 2 packages are selected
//             if (selectedPackages.length < 2) {
//                 setSelectedPackages([...selectedPackages, packageItem]);
//             } else {
//                 // Replace the first package if 2 are already selected
//                 setSelectedPackages([selectedPackages[1], packageItem]);
//             }
//         }
//     };

//     const extractFeaturesFromDetails = (details) => {
//         if (!details) return [];
        
//         // Split by periods, commas, line breaks, or bullet points
//         const features = details
//             .split(/[.,;\n•]/g)
//             .map(item => item.trim())
//             .filter(item => item.length > 0);
            
//         return features;
//     };

//     // Combine features from both packages for comparison
//     const getCombinedFeatures = () => {
//         if (selectedPackages.length === 0) return [];
        
//         const allFeatures = new Set();
        
//         selectedPackages.forEach(pkg => {
//             const features = extractFeaturesFromDetails(pkg.package_details);
//             features.forEach(feature => allFeatures.add(feature));
//         });
        
//         return Array.from(allFeatures);
//     };

//     // Check if a package has a feature
//     const hasFeature = (packageItem, feature) => {
//         if (!packageItem || !packageItem.package_details) return false;
        
//         // Simple string matching - could be improved with more sophisticated matching
//         return packageItem.package_details.toLowerCase().includes(feature.toLowerCase());
//     };

//     // Handle the purchase of a compared package
//     const handlePurchase = (packageItem) => {
//         navigate('/checkout', { 
//             state: { 
//                 selectedPackage: {
//                     id: packageItem.id,
//                     title: packageItem.title,
//                     price: packageItem.price,
//                     details: packageItem.package_details
//                 }
//             }
//         });
//         toggle(); // Close modal after navigating
//     };

//     return (
//         <Modal isOpen={isOpen} toggle={toggle} size="lg" className="package-comparison-modal">
//             <ModalHeader toggle={toggle}>Compare Packages</ModalHeader>
//             <ModalBody>
//                 {availablePackages.length === 0 ? (
//                     <div className="text-center py-4">
//                         <p>No packages available for comparison.</p>
//                     </div>
//                 ) : (
//                     <>
//                         <div className="package-selection mb-4">
//                             <h5>Select Packages to Compare (max 2)</h5>
//                             <div className="package-selection-list">
//                                 {availablePackages.map(pkg => (
//                                     <div 
//                                         key={pkg.id} 
//                                         className={`package-selection-item ${selectedPackages.some(p => p.id === pkg.id) ? 'selected' : ''}`}
//                                         onClick={() => handlePackageSelection(pkg)}
//                                     >
//                                         <div className="package-selection-name">{pkg.title}</div>
//                                         <div className="package-selection-price">${pkg.price}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
                        
//                         {selectedPackages.length > 0 && (
//                             <div className="comparison-table-container">
//                                 <Table bordered className="comparison-table">
//                                     <thead>
//                                         <tr>
//                                             <th>Feature</th>
//                                             {selectedPackages.map(pkg => (
//                                                 <th key={pkg.id}>
//                                                     <div className="text-center">
//                                                         <h5>{pkg.title}</h5>
//                                                         <div className="price">${pkg.price}</div>
//                                                         <Button 
//                                                             color="warning" 
//                                                             className="mt-2 buy-btn"
//                                                             onClick={() => handlePurchase(pkg)}
//                                                         >
//                                                             Buy Now
//                                                         </Button>
//                                                     </div>
//                                                 </th>
//                                             ))}
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {/* Base features */}
//                                         <tr>
//                                             <td>Category</td>
//                                             {selectedPackages.map(pkg => (
//                                                 <td key={`${pkg.id}-category`} className="text-center">
//                                                     {pkg.category}
//                                                 </td>
//                                             ))}
//                                         </tr>
                                        
//                                         {/* Package-specific features */}
//                                         {getCombinedFeatures().map((feature, index) => (
//                                             <tr key={index}>
//                                                 <td>{feature}</td>
//                                                 {selectedPackages.map(pkg => (
//                                                     <td key={`${pkg.id}-${index}`} className="text-center">
//                                                         {hasFeature(pkg, feature) ? (
//                                                             <span className="feature-included">✓</span>
//                                                         ) : (
//                                                             <span className="feature-excluded">✕</span>
//                                                         )}
//                                                     </td>
//                                                 ))}
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </Table>
//                             </div>
//                         )}
//                     </>
//                 )}
//             </ModalBody>
//             <ModalFooter>
//                 <Button color="secondary" onClick={toggle}>Close</Button>
//             </ModalFooter>
//         </Modal>
//     );
// };

// export default PackageComparison;


import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Required for Reactstrap
import './PackageComparison.css';

const PackageComparison = ({ packages, isOpen, toggle, preSelectedPackages = [] }) => {
    const [selectedPackages, setSelectedPackages] = useState([]);
    const [availablePackages, setAvailablePackages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize available packages when the component mounts or packages prop changes
        if (packages && packages.length > 0) {
            setAvailablePackages(packages);
            
            // Use pre-selected packages if provided
            if (preSelectedPackages && preSelectedPackages.length > 0) {
                setSelectedPackages([...preSelectedPackages]);
            } 
            // Otherwise pre-select the first two packages if available
            else if (packages.length >= 2) {
                setSelectedPackages([packages[0], packages[1]]);
            } else if (packages.length === 1) {
                setSelectedPackages([packages[0]]);
            }
        }
    }, [packages, preSelectedPackages, isOpen]);

    const handlePackageSelection = (packageItem) => {
        // Toggle selection of a package
        if (selectedPackages.some(pkg => pkg.id === packageItem.id)) {
            // Deselect if already selected
            setSelectedPackages(selectedPackages.filter(pkg => pkg.id !== packageItem.id));
        } else {
            // Add to selection if fewer than 2 packages are selected
            if (selectedPackages.length < 2) {
                setSelectedPackages([...selectedPackages, packageItem]);
            } else {
                // Replace the first package if 2 are already selected
                setSelectedPackages([selectedPackages[1], packageItem]);
            }
        }
    };

    // Parse package details into structured format
    const parsePackageDetails = (details) => {
        if (!details) return {};
        
        const parsedDetails = {};
        
        // Split by line breaks and process each line
        const lines = details.split(/\r?\n/);
        
        lines.forEach(line => {
            const trimmedLine = line.trim();
            if (trimmedLine && trimmedLine.includes(':')) {
                const colonIndex = trimmedLine.indexOf(':');
                const fieldName = trimmedLine.substring(0, colonIndex).trim();
                const fieldValue = trimmedLine.substring(colonIndex + 1).trim();
                
                if (fieldName && fieldValue) {
                    parsedDetails[fieldName] = fieldValue;
                }
            }
        });
        
        return parsedDetails;
    };

    // Get all unique field names from selected packages
    const getAllFieldNames = () => {
        if (selectedPackages.length === 0) return [];
        
        const allFieldNames = new Set();
        
        selectedPackages.forEach(pkg => {
            const parsedDetails = parsePackageDetails(pkg.package_details);
            Object.keys(parsedDetails).forEach(fieldName => {
                allFieldNames.add(fieldName);
            });
        });
        
        return Array.from(allFieldNames).sort();
    };

    // Get field value for a specific package
    const getFieldValue = (packageItem, fieldName) => {
        const parsedDetails = parsePackageDetails(packageItem.package_details);
        return parsedDetails[fieldName] || '-';
    };

    // Handle the purchase of a compared package
    const handlePurchase = (packageItem) => {
        navigate('/checkout', { 
            state: { 
                selectedPackage: {
                    id: packageItem.id,
                    title: packageItem.title,
                    price: packageItem.price,
                    details: packageItem.package_details
                }
            }
        });
        toggle(); // Close modal after navigating
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="xl" className="package-comparison-modal">
            <ModalHeader toggle={toggle}>Compare Packages</ModalHeader>
            <ModalBody>
                {availablePackages.length === 0 ? (
                    <div className="text-center py-4">
                        <p>No packages available for comparison.</p>
                    </div>
                ) : (
                    <>
                        <div className="package-selection mb-4">
                            <h5>Select Packages to Compare (max 2)</h5>
                            <div className="package-selection-list">
                                {availablePackages.map(pkg => (
                                    <div 
                                        key={pkg.id} 
                                        className={`package-selection-item ${selectedPackages.some(p => p.id === pkg.id) ? 'selected' : ''}`}
                                        onClick={() => handlePackageSelection(pkg)}
                                    >
                                        <div className="package-selection-name">{pkg.title}</div>
                                        <div className="package-selection-price">Rs. {pkg.price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {selectedPackages.length > 0 && (
                            <div className="comparison-table-container">
                                <Table bordered className="comparison-table">
                                    <thead>
                                        <tr>
                                            <th style={{ minWidth: '250px' }}>Feature</th>
                                            {selectedPackages.map(pkg => (
                                                <th key={pkg.id}>
                                                    <div className="text-center">
                                                        <h5>{pkg.title}</h5>
                                                        <div className="price">Rs. {pkg.price}</div>
                                                        <div className="mb-2">
                                                            <small className="text-muted">({pkg.category} - {pkg.package_class})</small>
                                                        </div>
                                                        <Button 
                                                            color="warning" 
                                                            className="mt-2 buy-btn"
                                                            onClick={() => handlePurchase(pkg)}
                                                        >
                                                            Buy Now
                                                        </Button>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Package details comparison */}
                                        {getAllFieldNames().map((fieldName, index) => (
                                            <tr key={index}>
                                                <td><strong>{fieldName}</strong></td>
                                                {selectedPackages.map(pkg => {
                                                    const value = getFieldValue(pkg, fieldName);
                                                    return (
                                                        <td key={`${pkg.id}-${index}`} className="text-center">
                                                            <span className={value === '-' ? 'text-muted' : ''}>
                                                                {value}
                                                            </span>
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </>
                )}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

export default PackageComparison;