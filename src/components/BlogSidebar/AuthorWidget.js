 import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { API_BASE_URL } from '../../api/config/apiConfig';

const AuthorWidget = ({ socialLinks = [], onLinkClick }) => {
  const [bannerImage, setBannerImage] = useState("");
  const [bannerText, setBannerText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogBanner = async () => {
      try {
        // const res = await axios.get("http://192.168.1.12:8000/api/blog-banner");
          const res = await axios.get(`${API_BASE_URL}/api/blog-banner`);
        const data = res.data?.blogBanner;

        if (res.data?.status && data) {
          setBannerImage(data.blog_banner);
          setBannerText(data.blog_banner_content);
        } else {
          console.warn("⚠️ Unexpected response:", res.data);
        }
      } catch (error) {
        console.error("❌ Error fetching blog banner:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogBanner();
  }, []);

  return (
    <div className="sidebar-widget author-widget">
      <div
        className="widget-content"
       style={{
  backgroundImage: bannerImage ? `url(${bannerImage})` : "none",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "25px",
  borderRadius: "10px",
  color: "#fff",
  minHeight: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)"
}}

      >
        <div className="image" style={{ marginBottom: "15px" }}>
          {loading ? (
            <Skeleton circle width={120} height={120} />
          ) : (
            <img
              src={bannerImage}
              alt="Author"
              style={{
                borderRadius: "50%",
                width: "120px",
                height: "120px",
                objectFit: "cover",
                
                border: "3px solid #fff"
              }}
            />
          )}
        </div>

        {/* <div className="name" style={{ fontWeight: 600, fontSize: "22px", marginBottom: "10px", color: "black" }}>
          {loading ? <Skeleton width={120} /> : "Blog Author" }
        </div> */}

        <div className="text" style={{ marginBottom: "15px", padding: "0 10px", color:"black" }}>
          {loading ? (
            <Skeleton count={3} />
          ) : (
            parse(bannerText.slice(0, 150) + "...")
          )}
        </div>

        <ul className="social-box" style={{ display: "flex", gap: "12px" }}>
          {loading
            ? <Skeleton width={100} height={20} />
            : socialLinks.map((link, index) => (
              <li key={index}>
                <Link onClick={onLinkClick} to={link.to} className={`fa ${link.icon}`} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorWidget;


