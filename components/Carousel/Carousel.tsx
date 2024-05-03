import React, { useState } from 'react';

import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';
import "./styles.css"
import { IoIosArrowBack } from 'react-icons/io';

export interface CarouselProps {
  name: string;
  activeIndex: number;
  setActiveIndex: (newActiveIndex: number) => void; 
  items: React.ReactNode[];
}

export default function Carousel({ name, activeIndex, setActiveIndex, items }: CarouselProps) {

  function handleNextItemBtn(prev: number) {
    const newIndex = prev + 1 < items.length ? prev + 1 : 0;
    setActiveIndex(newIndex);
  }

  function handlePrevItemBtn(prev: number) {
    const newIndex: number = prev - 1 >= 0 ? prev - 1 : items.length - 1;
    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel-container my-16 w-full max-h-full">
        
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={() => {handleNextItemBtn(activeIndex)}}
        >
          <IoIosArrowBack />
        </button>

        {items?.map((item, index) => (
          <CarouselItem
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            {item}
          </CarouselItem>
        ))}


        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={() => {handlePrevItemBtn(activeIndex)}}
        >
          <IoIosArrowBack
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </button>
        
        <div className=''>
          <CarouselIndicator
            activeIndex={activeIndex}
            length={items.length}
            onSetActiveIndex={(activeIndex) => {
              setActiveIndex(activeIndex);
            }}
          />
        </div>
    </div>
  );
}
