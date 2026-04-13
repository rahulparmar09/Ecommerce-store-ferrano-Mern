import React from "react";
import { assets } from "./../assets/assets";

const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-white">

      {/* 3 Images Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        {/* Image 1 */}
        <div className="h-[400px] sm:h-[550px] overflow-hidden rounded-3xl">
          <img
            src="https://digitalscholar.in/wp-content/uploads/2022/09/seo-tips-for-fashion-e-commerce-website.jpg"
            alt="Hero 1"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Image 2 */}
        <div className="h-[400px] sm:h-[550px] overflow-hidden rounded-3xl">
          <img
            src={assets.hero_2_img}
            alt="Hero 2"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Image 3 */}
        <div className="h-[400px] sm:h-[550px] overflow-hidden rounded-3xl">
          <img
            src={assets.hero_img}
            alt="Hero 3"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </div>
  );
};

export default Hero;