import React, { useState, useEffect } from 'react';
import {
  BaseSkeleton,
  TextSkeleton,
  AvatarSkeleton,
  CardSkeleton, 
  ButtonSkeleton,
  ImageSkeleton,
  ListSkeleton,
  TableSkeleton,
  ContactInfoSkeleton,
  NavSkeleton,
  LogoSkeleton,
  FooterSkeleton
} from './skeleton-components';
// Note: You'll need to import Bootstrap CSS in your main file
// import 'bootstrap/dist/css/bootstrap.min.css';

// Demo component to showcase all skeleton components with Bootstrap styling
const SkeletonDemoPage = () => {
  // State to control loading state
  const [isLoading, setIsLoading] = useState(true);
  
  // Custom theme for demonstration
  const darkTheme = {
    baseColor: '#2a2a2a',
    highlightColor: '#3a3a3a',
    borderRadius: '0.5rem',
    duration: 2,
  };
  
  const blueTheme = {
    baseColor: '#cfe2ff', // Bootstrap primary light
    highlightColor: '#9ec5fe', // Bootstrap primary lighter
    borderRadius: '0.375rem',
    duration: 1.8,
  };

  // Toggle loading state every 3 seconds for demonstration
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(prevState => !prevState);
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="display-5 mb-3">Skeleton Loading Components Demo</h1>
          <div className="d-flex align-items-center mb-4">
            <p className="mb-0 me-3">
              <span className="badge bg-secondary">Status</span> {isLoading ? 'Loading...' : 'Loaded'}
            </p>
            <button 
              className="btn btn-primary" 
              onClick={() => setIsLoading(!isLoading)}
            >
              Toggle Loading State
            </button>
          </div>
        </div>
      </div>

      {/* Basic Skeletons */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="border-bottom pb-2 mb-4">Basic Skeletons</h2>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">BaseSkeleton</h3>
              <BaseSkeleton isLoading={isLoading} width={200} height={40}>
                <div className="bg-light border p-2">Loaded content</div>
              </BaseSkeleton>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">TextSkeleton</h3>
              <TextSkeleton isLoading={isLoading} lines={3}>
                <p>This is the loaded text content that appears when not loading.</p>
              </TextSkeleton>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Components */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="border-bottom pb-2 mb-4">Profile Components</h2>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">AvatarSkeleton</h3>
              <div className="text-center">
                <AvatarSkeleton isLoading={isLoading} size={80} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">ContactInfoSkeleton</h3>
              <ContactInfoSkeleton isLoading={isLoading} lines={3} theme={blueTheme} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Components */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="border-bottom pb-2 mb-4">Content Components</h2>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">CardSkeleton</h3>
              <CardSkeleton isLoading={isLoading} headerHeight={40} bodyLines={3} />
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">ImageSkeleton</h3>
              <ImageSkeleton isLoading={isLoading} width="100%" height={150} />
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">ButtonSkeleton</h3>
              <div className="text-center">
                <ButtonSkeleton isLoading={isLoading} width={120} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Components */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="border-bottom pb-2 mb-4">Data Components</h2>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">ListSkeleton</h3>
              <ListSkeleton isLoading={isLoading} items={4} itemHeight={30} />
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">TableSkeleton</h3>
              <TableSkeleton isLoading={isLoading} rows={3} columns={3} theme={darkTheme} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Components */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="border-bottom pb-2 mb-4">Navigation Components</h2>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">NavSkeleton (Horizontal)</h3>
              <NavSkeleton isLoading={isLoading} items={4} layout="horizontal" />
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">NavSkeleton (Vertical)</h3>
              <NavSkeleton isLoading={isLoading} items={4} layout="vertical" />
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title h5">LogoSkeleton</h3>
              <div className="text-center">
                <LogoSkeleton isLoading={isLoading} width={150} height={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Complex Components */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="border-bottom pb-2 mb-4">Complex Components</h2>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title h5">FooterSkeleton</h3>
              <FooterSkeleton isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Example */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="border-bottom pb-2 mb-4">Custom Usage Example</h2>
        </div>
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <AvatarSkeleton isLoading={isLoading} size={60} />
                </div>
                <div>
                  <BaseSkeleton isLoading={isLoading} width={150} height={24}>
                    <h3 className="h5 mb-1">John Doe</h3>
                  </BaseSkeleton>
                  <BaseSkeleton isLoading={isLoading} width={100} height={18}>
                    <p className="text-muted mb-0">Product Designer</p>
                  </BaseSkeleton>
                </div>
              </div>
              
              <div className="mb-3">
                <TextSkeleton isLoading={isLoading} lines={2}>
                  <p>John is a talented designer with over 5 years of experience in product design and UX research.</p>
                </TextSkeleton>
              </div>
              
              <div className="d-flex gap-2">
                <ButtonSkeleton isLoading={isLoading} width={100} height={36}>
                  <button className="btn btn-primary">Follow</button>
                </ButtonSkeleton>
                <ButtonSkeleton isLoading={isLoading} width={120} height={36}>
                  <button className="btn btn-outline-secondary">Message</button>
                </ButtonSkeleton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDemoPage;