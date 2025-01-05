import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Loading = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-[#181127] text-white min-h-screen">
    {/* Spinner */}
    <div className="w-12 h-12 border-8 border-t-8 border-gray-300 border-t-[#FB5DA5] rounded-full animate-spin"></div>

    {/* Skeleton Loader for Text */}
    <div className="mt-5">
      <Skeleton width="200px" height="30px" />
    </div>
    <div className="mt-3">
      <Skeleton width="250px" height="20px" />
    </div>
    <div className="mt-3">
      <Skeleton width="150px" height="20px" />
    </div>

    {/* Loading text */}
    <p className="mt-5 text-lg font-medium opacity-80 animate-pulse">Loading, please wait...</p>
  </div>
);

export default Loading;
