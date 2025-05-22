// src/components/ServiceList.js
// import React from "react";
// import { Link } from "react-router-dom";

// const ServiceList = ({ services = [], onClick, limit = 6 }) => {
//   return (
//     <div className="sidebar-widget">
//       <ul className="service-list">
//         {services.slice(0, limit).map((service, index) => (
//           <li key={index}>
//             <Link onClick={onClick} to={`/service-single/${service.slug}`}>
//               <span className="color-layer"></span>
//               {service.sTitle}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ServiceList;

 import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Services from '../../api/Services';
import { API_BASE_URL } from '../../api/config/apiConfig';

const ServiceSection = ({ services = [], onClick, limit = 6 }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [apiServices, setApiServices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DEFAULT_ICON = 'flaticon-businessman';

  const removeTags = useCallback((htmlString) => {
    if (!htmlString || typeof htmlString !== 'string') return '';
    if (!htmlString.includes('<') && !htmlString.includes('>')) return htmlString;
    return htmlString.replace(/<[^>]*>?/g, '').replace(/&nbsp;/g, ' ').trim();
  }, []);

  const fetchServiceData = useCallback(async () => {
    const cachedData = sessionStorage.getItem('serviceData');
    const cachedTimestamp = sessionStorage.getItem('serviceDataTimestamp');

    if (cachedData && cachedTimestamp) {
      const now = new Date().getTime();
      const cacheTime = parseInt(cachedTimestamp);
      if (now - cacheTime < 5 * 60 * 1000) {
        try {
          const parsedData = JSON.parse(cachedData);
          setApiServices(parsedData);
          setLoading(false);
          return;
        } catch (e) {
          console.error('Error parsing cached data', e);
        }
      }
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      if (loading) {
        console.warn('API request timeout, using fallback data');
        setLoading(false);
        setError('API request timeout. Using default content.');
      }
    }, 5000);

    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/get-service`, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      if (Array.isArray(response.data) && response.data.length > 0) {
        const processedServices = response.data.map((service, index) => {
          let serviceImages = [];
          try {
            if (service.service_image) {
              serviceImages = JSON.parse(service.service_image);
            }
          } catch (e) {
            console.warn('Error parsing service images:', e);
          }

          return {
            slug: service.slug,
            sTitle: service.service_name || 'Service',
            des: removeTags(service.short_desc) || 'Service description',
            Icon: (Services[index % Services.length] || {}).Icon || DEFAULT_ICON,
            slug: service.slug.toString(),
            banner_image: service.banner_image,
            service_images: serviceImages,
            service_details: service.service_details || '',
            originalData: service,
          };
        });

        setApiServices(processedServices);
        sessionStorage.setItem('serviceData', JSON.stringify(processedServices));
        sessionStorage.setItem('serviceDataTimestamp', new Date().getTime().toString());
      }

      setLoading(false);
    } catch (err) {
      clearTimeout(timeoutId);
      console.error('Error fetching service data:', err);

      if (cachedData) {
        try {
          const parsedData = JSON.parse(cachedData);
          setApiServices(parsedData);
          setError("Using cached data - couldn't refresh from server");
        } catch (e) {
          setError('Failed to load service data. Using default content.');
        }
      } else {
        setError('Failed to load service data. Using default content.');
      }

      setLoading(false);
    }
  }, [loading, removeTags]);

  useEffect(() => {
    fetchServiceData();
  }, [fetchServiceData]);

  const displayServices = apiServices || Services;

  return (
    <div className="sidebar-widget">
      <ul className="service-list">
        {(displayServices || []).slice(0, limit).map((service, index) => (
          <li key={index}>
            {/* <Link onClick={onClick || ClickHandler} to={`/services`}>
              <span className="color-layer"></span>
              {service.sTitle}
            </Link> */}
              <Link 
              onClick={ClickHandler} 
              to={`/service-single/${service.slug}`}
              state={{ serviceData: service }}
          >
              {service.sTitle}
          </Link>
          </li>
        ))}
      </ul>
      {loading && <Skeleton count={6} height={20} />}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ServiceSection;