import React from "react";
import { Link } from "react-router-dom";
import Image from './Image'

const FeaturedPosts = () => {
  return (
    <div className="bg-[#ede9fe] px-6 py-10 rounded-3xl shadow-sm font-sans">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 flex-shrink-0">
          <Image
            src="/featured1.jpeg"
            className="rounded-3xl object-cover w-full h-[300px] sm:h-[350px] lg:h-[400px] shadow-md"
          />
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <h1 className="font-semibold text-indigo-800">01.</h1>
            <Link className="text-indigo-600 hover:underline">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <Link
            to="/test"
            className="text-2xl md:text-3xl font-bold text-gray-800 hover:underline leading-snug"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            distinctio!
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          {[2, 3, 4].map((num) => (
            <div
              key={num}
              className="flex gap-4 items-start mb-3 last:mb-0"
            >
              <Image
                src={`/featured${num}.jpeg`}
                className="rounded-2xl object-cover"
                w='298'
              />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <h1 className="font-semibold text-indigo-800">
                    0{num}.
                  </h1>
                  <Link className="text-indigo-600 hover:underline">
                    Web Design
                  </Link>
                  <span>2 days ago</span>
                </div>
                <Link
                  to="/test"
                  className="text-md md:text-lg font-semibold text-gray-800 hover:underline leading-tight"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
