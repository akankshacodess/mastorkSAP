"use client";

import React from "react";
import Link from "next/link";

const CtaArea: React.FC = () => {
  return (
    <>
      <div className="cta-area bg-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              <div 
                className="cta-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Have a project in mind?</h3>
                <p>Let&apos;s get to work</p>
              </div>
            </div>

            <div
              className="col-lg-5 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="cta-btn-box">
                <Link href="Book a 1:1 Call" className="btn btn-primary">
                Book a 1:1 Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaArea;
