"use client";

import React, { useState } from 'react';
import guides from '@/app/AwaisSheikh/guides';
import Myblogprojectdetail from './Myblogprojectdetail';

const Home = () => {
  // State to track selected blog and whether to show blog detail
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Handle click on the title to show the blog detail
  const handleTitleClick = (guide) => {
    setSelectedBlog(guide); // Set the selected blog
  };

  // Handle back button click to return to the blog list
  const handleBackClick = () => {
    setSelectedBlog(null); // Reset selected blog to null, showing the blog list again
    playBeep();
  };

  const playBeep = () => {
    const beep = new Audio("onclick.mp3");
    beep.play();
};

  return (
    <>
      {selectedBlog ? (
        // Show the blog detail when a blog is selected
        <Myblogprojectdetail blog={selectedBlog} onBack={handleBackClick} />
      ) : (
        // Show the list of blogs initially
        <>
          <h1 className='font-bold mb-2'>My Blog</h1>
          <div className="text-white min-h-screen p-1 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-0 relative">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className={`
                    ${index === 2 ? '-mt-10' : ''}  
                    ${index === 3 ? 'mt-2' : ''}  
                    ${index === 4 ? '-mt-10' : ''}  
                    ${index === 5 ? 'mt-2' : ''}  
                  `}
                >
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="object-contain mx-auto"
                  />
                  <h2 
                    className="text-[18px] font-bold mt-4 cursor-pointer hover:text-[#00a5f8] "
                    onClick={() => {handleTitleClick(guide); playBeep();}} // Click event to show details
                  >
                    {guide.title}
                  </h2>
                  <p className="text-sm bg-[#00a5f8] p-1 w-[55%] text-black">
                    {guide.date}
                  </p>
                  <p className="mt-2 tracking-wide text-gray-400 text-base text-[11px]">
                    {guide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;