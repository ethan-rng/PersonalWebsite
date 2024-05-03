import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FooterType, ImageType } from '@/types';
import { FooterItems, heroImage } from '@/constants';

const Hero = () => {
  return (
    <div
      className="flex flex-row items-center justify-center dark:bg-blue-200 bg-darkSecondary w-4/5 h-[65vh] rounded-t-3xl mt-24 "
      id="home"
    >
      <div className='ml-10 h-full flex items-center pt-16 justify-start flex-col w-1/3 mr-14'>
        <div className='textFont font-bold'>
          Welcome to my site,<br />
          I am Ethan Rong - a Software Engineer based in Toronto.
        </div>

        <div className='text-white/60 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias accusantium quia reiciendis. <br />
          Perferendis alias, aspernatur impedit, quas sint fugit tempora quae qui nisi libero fugiat rem sunt odit maiores?

        </div>


        <div className='flex flex-col justify-start items-end border-2 border-red-300 w-full h-full'>
          <div className='flex justify-start w-full text-center '>
            <Link 
              href="/assets/documents/Ethan_Rong.pdf" 
              className="text-tertiary text-2xl hoverEffect"
            >
              Resume
            </Link>
          </div>

          <div className='flex flex-row mt-6 justify-start w-full '>
            {FooterItems.map((item: FooterType, index: number) => {
              return (
                <div key={index} className='sm:mr-4'>
                  <Link href={item.link}>
                    {item.component({ fill: "#FFFFFF", size: "35"})}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='flex flex-row'>
        {heroImage.map((item: ImageType, index: number) => {
          return (
            <div className='animate-slideleft'>
              <Image
                className='pr-8'
                alt={item.light}
                src={item.light}
                width={400}
                height={600}
              />
            </div>
          )
        })}

      </div>


    </div>
  )
}

export default Hero

