 import React, { useState } from 'react';
import { FaSearch, FaCartPlus, FaCheck } from 'react-icons/fa';

const dummyDomains = [
  { id: 1, name: 'example.com', price: 12.99 },
  { id: 2, name: 'mybusiness.org', price: 15.99 },
  { id: 3, name: 'techstart.net', price: 10.99 },
  { id: 4, name: 'creativehub.io', price: 25.99 },
  { id: 5, name: 'digitalworld.co', price: 18.99 },
  { id: 6, name: 'startup.ai', price: 45.99 },
  { id: 7, name: 'webstore.shop', price: 22.99 },
  { id: 8, name: 'portfolio.dev', price: 35.99 },
  { id: 9, name: 'innovation.tech', price: 28.99 },
  { id: 10, name: 'solution.pro', price: 19.99 },
];

const DomainSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDomains, setFilteredDomains] = useState([]);
  const [cart, setCart] = useState([]);

  const handleSearch = () => {
    const filtered = dummyDomains.filter(domain =>
      domain.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDomains(filtered);
  };

  const addToCart = (domain) => {
    if (!cart.some(item => item.id === domain.id)) {
      setCart([...cart, domain]);
    }
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <h3 className="text-center mb-4">Find Your Perfect Domain</h3>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="input-group input-group-sm mb-4 shadow-sm" style={{padding: '20px'}}>
              <span className="input-group-text bg-white" style={{padding: '10px'}}>
                <FaSearch className="text-muted" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search domains like yourbusiness.com"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{padding: '10px'}}
              />
              <button className="btn btn-primary" onClick={handleSearch} style={{padding: '10px'}}>
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredDomains.length > 0 && (
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Available Domains</h5>
            </div>
            <ul className="list-group list-group-flush">
              {filteredDomains.map(domain => (
                <li key={domain.id} className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <strong>{domain.name}</strong>
                    <div className="text-success small">Available</div>
                  </div>
                  <div className="d-flex align-items-center mt-2 mt-sm-0">
                    <span className="me-3 text-primary fw-bold">${domain.price}</span>
                    <button
                      className={`btn btn-sm ${cart.some(item => item.id === domain.id) ? 'btn-secondary' : 'btn-outline-success'}`}
                      onClick={() => addToCart(domain)}
                      disabled={cart.some(item => item.id === domain.id)}
                    >
                      {cart.some(item => item.id === domain.id) ? (
                        <><FaCheck className="me-1" />Added</>
                      ) : (
                        <><FaCartPlus className="me-1" />Add</>
                      )}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {filteredDomains.length === 0 && searchTerm && (
          <div className="text-center mt-4 text-muted">
            No domains found for "<strong>{searchTerm}</strong>"
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainSearch;
