"use client"
import React, { useState } from 'react';
import Carousel from "./Carousel/Carousel";
import Image from 'next/image';


const imagesItems = [
  <Image width={800} height={800} className="h-full w-full" src="/assets/images/Projects/Carousel/CaseComp.jpeg" alt="Case Comps." />,
  <Image width={800} height={800} className="h-full w-full" src="/assets/images/Projects/Carousel/MiscProjects.png" alt="Misc. Projects" />,
  <Image width={800} height={800} className="h-full w-full" src="/assets/images/Projects/Carousel/AIProjects.png" alt="AI Projects" />,
  <Image width={800} height={800} className="h-full w-full" src="/assets/images/Projects/Carousel/Hackathons.png" alt="Hackathons" />,

];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(imagesItems.length-1);

  return (
    <div
      className='w-4/5 dark:bg-secondary bg-secondary my-16 rounded-3xl'
      id="projects"
    >
      {/* Header */}
      <h1 className='text-font text-3xl'>Get to know my work</h1>

      {/* Carousel*/}
      <div className='flex items-center justify-center'>
        <Carousel 
          name={"poop"}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          items={imagesItems} 
        />
      </div>

      <div>

      </div>

    </div>
  )
}

export default Projects