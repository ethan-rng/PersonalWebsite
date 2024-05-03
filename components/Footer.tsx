"use client"
import React from 'react';
import { FooterItems } from '@/constants';
import Link from 'next/link';
import { Image } from '@chakra-ui/react';
import { FooterType } from '@/types';

const Footer = () => {
    return (
        <div
            id="contact"
            className="w-4/5 h-full sm:flex sm:flex-row sm:justify-stretch flex flex-col justify-stretch pb-2 terminal-font "
        >
            {/* Vertical Line */}
            <div />

            {/* Let's Connect and Copyright */}
            <div className="flex flex-col w-1/2 text-tertiary text-1xl sm:text-3xl py-6">
                <h1> Let's Connect :) </h1>
                <h1> Copyright © {new Date().getFullYear()} Ethan Rong </h1>
            </div>

            {/* Social Icons */}
            <div className="flex justify-end w-1/2 items-center ">
                {FooterItems.map((item: FooterType, index: number) => {
                    return (
                        <div key={index} className="mx-2 sm:ml-4 hidden sm:block">
                            <Link href={item.link} className='border-0 border-purple-300'>
                                {item.component({ fill: item.dark })}
                                
                            </Link>
                        </div>

                    );
                })}
            </div>
        </div >
    );
};

export default Footer