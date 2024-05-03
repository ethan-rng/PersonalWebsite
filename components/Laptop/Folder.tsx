"use client"
import React, { useState, useContext } from 'react'
import "./styles.css"
import Terminal from './Terminal';
import { hobbies } from '@/constants';
import { HobbyItemType } from '@/types';
import Markdown from './Markdown';
import Powerpoint from './Powerpoint';
import { OpenedFileContext } from '@/components/About';

interface FolderProps {
  setFolderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Folder = ({ setFolderOpen }: FolderProps ) => {
  const [openedFolders, setOpenedFolders] = useState<Set<string>>(new Set()); // Determine which folders are currently open in the "Fav. UI element"
  const ActiveFileContext = useContext(OpenedFileContext);

  // Adds or remove folders from openedFolders
  const handleFolderClick = (folderName: string) => {
    const newFolder = new Set(openedFolders);

    if (newFolder.has(folderName)) {
      newFolder.delete(folderName);
    } else {
      newFolder.add("about");
    }

    setOpenedFolders(newFolder);
    ActiveFileContext?.setCurrFolder(folderName);
  };

  const handleFileClick = (folderName: string, index: number) => {
    ActiveFileContext?.setCurrFolder(folderName);
    ActiveFileContext?.setCurrFileIndex(index);    
  };

  return (
    <div className='relative flex flex-row bg-white rounded-lg border-2 border-black/70 my-4 animate-maximize h-[95%]'>
      {/* FOLDERS LIST*/}
      <div className="bg-[#CFCFD1]/80 pr-8  text-black roboto p-2 flex flex-col ">
        <div>
          {/* Delete, Minimize, and Maximize */}
          <div className='flex flex-row items-center'>
            <div 
              className='rounded-full bg-red-400 h-2 sm:h-3 w-2 sm:w-3 mr-3' 
              onClick={() => {setFolderOpen(false)}}
            />
            <div 
              className='rounded-full bg-yellow-400 h-2 sm:h-3 w-2 sm:w-3 mr-3' 
              onClick={() => {setFolderOpen(false)}}
            />
            <div className='rounded-full bg-green-400 sm:h-3 h-2 sm:w-3 w-2 mr-3' />
          </div>


          <div className='pt-3 sm:pt-5 pb-2'> <b><u>Favorites</u></b> </div>
          <div>
            <div className='w-16 sm:w-64'>
              {/* ABOUT */}
              <div
                className='py-0.5'
                onClick={() => {handleFolderClick("about")}}
              >🗂️ About Me</div>
              <div className={`py-0.5 ${openedFolders.has("about") && "hidden"}`}>
                <div
                  className={`pl-4 sm:pl-8 py-0.5 ${(ActiveFileContext?.currFileIndex === 0 && ActiveFileContext?.currFolder === "about") && "rounded-lg bg-[#C3C3C5]/95"}`}
                  onClick={() => {handleFileClick("about", 0)}}
                >
                  README.md
                </div>
              </div>


              {/* SKILLS */}
              <div
                className='py-0.5'
                onClick={() =>{handleFolderClick("skills")}}
              >🗂️ Skills
              </div>
              <div className={`py-0.5 ${openedFolders.has("skills") && "hidden"}`}>
                <div
                  className={`pl-4 sm:pl-8 py-0.5 ${(ActiveFileContext?.currFileIndex === 0 && ActiveFileContext?.currFolder === "skills") && "rounded-lg bg-[#C3C3C5]/95"}`}
                  onClick={() => {handleFileClick("skills", 0)}}
                >
                  skills ⚙️.sh
                </div>
              </div>


              {/* HOBBIES */}
              <div
                className='py-0.5'
                onClick={() => {handleFolderClick("hobbies")}}
              >🗂️ Hobbies
              </div>
              <div className={`py-0.5 ${openedFolders.has("hobbies") && "hidden"}`}>
                {hobbies.map((item: HobbyItemType, index: number) => {
                  return (
                    <div
                    className={`pl-4 sm:pl-8 py-0.5 ${(ActiveFileContext?.currFileIndex === index && ActiveFileContext?.currFolder === "hobbies") && "rounded-lg bg-[#C3C3C5]/95"}`}
                    onClick={() => {handleFileClick("hobbies", index)}}
                      key={index}
                    >
                      {item.name}
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* FILES LIST */}
      <div className='w-full flex flex-col'>
        {/* Heading of Finder */}
        <div className='bg-[#F3F0EB]/80 roboto h-[8.6%] w-full flex flex-col items-center justify-center border-4 border-black-800'>
         
        </div>

        {/* File Generation */}
        <div
          className={` h-full relative flex items-center justify-center border-orange-300 border-0`}>
            {(ActiveFileContext?.currFolder === "about" ) && <Markdown />}
            {(ActiveFileContext?.currFolder === "skills" ) && <Terminal />}
            {(ActiveFileContext?.currFolder === "hobbies" && ActiveFileContext?.currFileIndex === 0) && <Powerpoint />}
            {(ActiveFileContext?.currFolder === "hobbies"  && ActiveFileContext?.currFileIndex  === 1) && <Powerpoint />}
            {(ActiveFileContext?.currFolder === "hobbies"  && ActiveFileContext?.currFileIndex  === 2) && <Powerpoint />}
        </div>


      </div>
      <div className="absolute inset-0 bg-black bg-opacity-[0.07] pointer-events-none" />
    </div>
  )
}

export default Folder