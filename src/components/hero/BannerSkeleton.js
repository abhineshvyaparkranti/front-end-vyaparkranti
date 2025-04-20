import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';

const BannerSkeleton = () => {
  return (
    <div className="slide">
      <div
        className="hero-inner"
        style={{
          background: 'linear-gradient(to bottom right, #2a3cb0, #8dc9ff)',
          padding: '60px 0',
          minHeight: '600px',
        }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            {/* Left Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h1 className="main-title">
                   <SkeletonTheme baseColor="#d9d9d9" highlightColor="#f0f0f0" duration={1.5}>
                <Skeleton height={70} width="70%" />
                </SkeletonTheme>
                </h1>
                <div className="subtitle" style={{ marginTop: 20 }}>
                 <SkeletonTheme baseColor="#d9d9d9" highlightColor="#f0f0f0" duration={1.5}>
                <Skeleton height={70} width="70%" />
                </SkeletonTheme>
                </div>
                <div className="btns-box" style={{ marginTop: 30, display: 'flex', gap: 16 }}>
                  <Skeleton height={50} width={180} />
                  <Skeleton height={50} width={180} />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image" style={{ marginTop: 30 }}>
                  <Skeleton height={300} width="100%" />
                </div>
                <div className="images-icons" style={{ display: 'flex', gap: 20, marginTop: 20 }}>
                  <Skeleton height={80} width={80} circle />
                  <Skeleton height={80} width={80} circle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSkeleton;
