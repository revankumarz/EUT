import React from 'react';
import { useSearch } from '../../context/SearchContext';

const blogPosts = [
  {
    id: 1,
    title: 'Soil Secrets: Discover The Perfect Mix For Your Green Friends',
    image: '/images/blog1.png',
  },
  {
    id: 2,
    title: "The Peace Lily: NASA's Little Air-Purifying Superstar 🌿 🚀",
    image: '/images/blog2.png',
  },
  {
    id: 3,
    title: "Meet Sanjeevani: A Plant That's As Legendary As Ramayana Itself",
    image: '/images/blog3.png',
  },
];

function Blogs() {
  const { searchQuery } = useSearch();

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="container my-5 py-5">
      <h3 className="text-center mb-5 fw-normal" style={{ color: '#333' }}>Blog: Top 10 Plants</h3>
      
      {filteredPosts.length > 0 ? (
        <div className="row g-4 justify-content-center">
          {filteredPosts.map((post) => (
            <div key={post.id} className="col-12 col-md-4">
              <div className="card h-100 border shadow-sm blog-card-new">
                <div className="overflow-hidden" style={{ height: '220px' }}>
                  <img 
                    src={post.image} 
                    className="card-img-top h-100 w-100 object-fit-cover" 
                    alt={post.title} 
                  />
                </div>
                <div className="card-body p-4 d-flex flex-column text-center">
                  <h5 className="card-title fw-semibold mb-4 fs-6" style={{ color: '#444', minHeight: '3rem' }}>
                    {post.title}
                  </h5>
                  <a 
                    href="#!" 
                    className="mt-auto text-decoration-none fw-medium"
                    style={{ color: '#ef4f5f' }}
                  >
                    Read now <i className="bi bi-chevron-right small"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-muted">No blog posts match your search.</p>
        </div>
      )}

      <style>{`
        .blog-card-new { 
          transition: transform 0.3s ease; 
          border-radius: 4px;
        }
        .blog-card-new:hover { 
          transform: translateY(-5px); 
        }
        .blog-card-new img { 
          transition: transform 0.5s ease; 
        }
        .blog-card-new:hover img { 
          transform: scale(1.05); 
        }
      `}</style>
    </section>
  );
}

export default Blogs;
