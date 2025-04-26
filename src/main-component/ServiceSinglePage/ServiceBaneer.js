//src/components/ServiceList.js
// import React from "react";
// import { Link } from "react-router-dom";
// import shape from '../../images/background/pattern-19.jpg';

// const ServiceBaneer = ( ) => {
//   return (
//    <div className="broucher-widget">
//     <div className="widget-content" style={{ backgroundImage: `url(${shape})` }}>
        
       
//         <div className="text">Business is a marketing discipline focused on growing visibility in organic (non-paid) technic required.</div>
        
//     </div>
// </div>
//   );
// };

// export default ServiceBaneer;
  
 
import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { API_BASE_URL } from "../../api/config/apiConfig";

const ServiceBaneer = () => {
  const [bannerImage, setBannerImage] = useState("");
  const [bannerContent, setBannerContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        // const response = await axios.get("http://192.168.1.12:8000/api/service-banner");
         const response = await axios.get(`${API_BASE_URL}/api/service-banner`);
        const data = response.data?.serviceBanner;
        if (response.data?.status && data) {
          setBannerImage(data.service_banner);
          setBannerContent(data.service_banner_content);
        } else {
          console.warn("⚠️ Invalid response structure:", response.data);
        }
      } catch (error) {
        console.error("❌ Error fetching service banner:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  return (
    <div className="broucher-widget">
      <div
        className="widget-content"
        style={{
          backgroundImage: bannerImage ? `url(${bannerImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "50px 30px",
          color: "#fff",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="text"
          style={{
            fontWeight: 600,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px 15px",
            color: "white",
            borderRadius: "8px",
            maxWidth: "800px",
            width: "100%",
          }}
        >
          {loading ? (
            <Skeleton count={3} height={20} />
          ) : (
            parse(bannerContent.slice(0, 150) + "...")
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceBaneer;
