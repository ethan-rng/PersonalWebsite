"use client"
import React, { useState, createContext } from 'react';
import Laptop from './Laptop/Laptop';
import { aboutMe } from "@/constants"
import { AboutType } from '@/types';
import ArrowDown from "@/public/assets/icons/ArrowDown";
import ArrowUp from "@/public/assets/icons/ArrowUp";

type FileType = {
    currFolder: string;
    currFileIndex: number;
    setCurrFolder: (newColderName: string) => void;
    setCurrFileIndex: (newFileIndex: number) => void;
}
const OpenedFileContext = createContext<FileType | undefined>(undefined);


const About = () => {
    const [folderOpen, setFolderOpen] = useState<boolean>(false);
    const [folder, setFolder] = useState<string>('about');
    const [fileIndex, setFileIndex] = useState<number>(0);

    const contextValue: FileType = {
        currFolder: folder,
        currFileIndex: fileIndex,
        setCurrFolder: setFolder,
        setCurrFileIndex: setFileIndex,
    }

    return (
        <div className='proxima-nova w-4/5 flex flex-row justify-start rounded-b-3xl p-5 dark:bg-secondary bg-darkTertiary' id="about">
            {/* About Content */}
            <div className='w-1/3'>
                <h1 className='textFont'>About Me</h1>
                {aboutMe.map((item: AboutType, index: number) => {
                    return (
                        <div key={index} className='flex flex-col text-2xl'>
                            <div className='py-6'>
                                <div
                                    className='flex flex-row justify-between '
                                    onClick={() => contextValue.setCurrFolder("")}
                                >
                                    {item.header}
                                    {contextValue.currFolder === item.header.toLowerCase() ? <ArrowUp /> : <ArrowDown />}
                                </div>

                                <div className='text-lg'>
                                    {(contextValue.currFolder === item.header.toLowerCase() && folderOpen) &&
                                        <>
                                            {item.description}
                                        </>
                                    }
                                </div>
                            </div>

                            {/* No Vertical Bar for Hobbies */}
                            {item.header != "Hobbies" && <div className='bg-[#D2D2D7] py-[0.05rem] px-32 rounded-full' />}
                        </div>
                    )
                })}
            </div>

            {/* Laptop Component */}
            <OpenedFileContext.Provider value={contextValue}>
                <Laptop folderOpen={folderOpen} setFolderOpen={setFolderOpen} />
            </OpenedFileContext.Provider>
        </div>
    )
}

export default About
export { OpenedFileContext };
export type { FileType };
