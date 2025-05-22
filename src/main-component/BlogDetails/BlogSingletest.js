// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const BlogSingle = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://192.168.1.7:8000/api/blog-detail/${id}`)
//       .then(response => {
//         if (response.data.status && response.data.success) {
//           setBlog(response.data.blog);
//           console.log("API response =========>", response.data.blog);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching blog detail:', error);
//       })
//       .finally(() => setLoading(false));
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!blog) return <div>Blog not found.</div>;

//   const imageSrc = blog.image
//     ? `http://192.168.1.7:8000${blog.image}`
//     : null;

//   return (
//     <div className="blog-details">
//       <div className="auto-container">
//         <h2>{blog.title}</h2>

//         {imageSrc && (
//           <img
//             src={imageSrc}
//             alt={blog.title}
//             style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
//           />
//         )}

//         <p><strong>Posted:</strong> {new Date(blog.created_at).toLocaleDateString()}</p>

//         <div dangerouslySetInnerHTML={{ __html: blog.description }} />

//         {/* Optional: SEO Info */}
//         {blog.seo_description && (
//           <>
//             <h4 style={{ marginTop: '30px' }}>SEO Description</h4>
//             <div dangerouslySetInnerHTML={{ __html: blog.seo_description }} />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogSingle;
