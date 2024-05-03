import { ImageType, NavBarType, AboutType, TerminalPageType, TerminalItemType, HobbyItemType, CarouselCardType, FooterType } from "../types"
import Image from 'next/image';
import type { ReactElement } from 'react';

// NavBar
export const logoImage: ImageType = {
    light: "/assets/images/Logos/lightLogo.png",
    dark: "/assets/images/Logos/darkLogo.png",
}
export const NavBarItems: NavBarType[] = [
    { text: "Home", link: "/#home" },
    { text: "About", link: "/#about" },
    { text: "Experience", link: "/#experience" },
    { text: "Projects", link: "/#projects" },
    { text: "Resume", link: "/assets/documents/Ethan_Rong.pdf" },
]


// DEFINING HERO PAGE
export const heroImage: ImageType[] = [
    {light: "/assets/images/Hero/hero1.JPG", dark: "/assets/images/Hero/hero1.JPG"},
    {light: "/assets/images/Hero/hero2.JPG", dark: "/assets/images/Hero/hero2.JPG"},
]

// DEFINING ABOUT
// About Page Elements
export const aboutMe: AboutType[] = [
    {header: "About", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
    {header: "Skills", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
    {header: "Hobbies", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
]

// LAPTOP COMPONENT
// ReadMe UI Elements
export const README_Header: string = "READ_ME DOCUMENTATION";
export const README_Intro: string = "Hi There and Welcome To My Digital Workspace! To Start, Click On Any of The Files On The Left Under Favorites.";
export const README_Skills: string = "This is a collection of some of the skills I have acquired over the years. I've also included some of the technologies I am currently learning.";
export const README_Hobbies: string = "Come check out some of my hobbies I have outside of software on the left. I've recently gotten some new hobbies so let's see if we have any hobbies in common!";

// Laptop UI Elements
export const laptop: string = "/assets/images/About/laptopMacOS.png"
export const finder: string = "/assets/images/About/finder.png"

// Skills UI Element
export const terminalText1: string = 'bash "/Users/ethan/Desktop/skills ⚙️.sh"'
export const terminalText2: string = 'bash "/Users/ethan/Desktop/devSkills.sh"'
export const terminalText3: string = 'bash "/Users/ethan/Desktop/aiSkills.sh"'

const languages: TerminalItemType[] = [
    { name: "Python", image: "/assets/images/About/Terminal/python.svg", description: "My first and fav. programming language",rating: "[///////////////]" },
    { name: "Javascript", image: "/assets/images/About/Terminal/javascript.svg", description: "A dynamic language and my go-to for web dev", rating: "[////////////...]" },
    { name: "Java", image: "/assets/images/About/Terminal/java.svg", description: "The coding language I use most at school", rating: "[///////////....]" },
];
const devTools: TerminalItemType[] = [
    { name: "Typescript", image: "/assets/images/About/Terminal/typescript.svg", description: "Enhances code readability in projects", rating: "[//////////.....]" },
    { name: "Next.js", image: "/assets/images/About/Terminal/nextJS.svg", description: "My favorite framework for React applications", rating: "[///////////....]" },
    { name: "MERN Stack", image: "/assets/images/About/Terminal/MERN.png", description: "MongoDB, ExpressJS, React, NodeJS", rating: "[/////////////..]" },
];
const aiTools: TerminalItemType[] = [
    { name: "Pandas", image: "/assets/images/About/Terminal/pandas.svg", description: "My bread and butter for data analysis in Python", rating: "[///////////////]" },
    { name: "Tensorflow", image: "/assets/images/About/Terminal/tensorflow.svg", description: "By far my favorite tool for building AI models", rating: "[/////////////..]" },
    { name: "Jupyter/Collab", image: "/assets/images/About/Terminal/jupyter.svg", description: "Essential for any of my data science projects", rating: "[/////////////..]" },
];

export const TerminalPages: TerminalPageType[] = [
    { name: "languages📙.sh", items: languages },
    { name: "devTools 👨‍💻.sh", items: devTools },
    { name: "aiTools 🤖.sh", items: aiTools },
]

// Hobby UI Element
const foodImgs: string[] = []
const gymImgs: string[] = []
const travelImgs: string[] = []
const foodDescrip: string = ""
const gymDescrip: string = ""
const travelDescrip: string = ""

export const hobbies: HobbyItemType[] = [
    {name: "Food 🍕.pptx", varName: "1", images: foodImgs, description: foodDescrip},
    {name: "Da Gym 🏋️.pptx", varName: "2", images: gymImgs, description: gymDescrip},
    {name: "Travelling 🛫.pptx", varName: "3", images: travelImgs, description: travelDescrip},
];


// Define a type for each object in your image items array
type ImageItem = {
    name: string;
    imageElement: ReactElement;  // Corrected type for JSX element
  };
  
  // Assuming card1, card2, card3, card4 are defined and correctly imported
 


// Footer
import Email from "../public/assets/icons/Email";
import Instagram from "../public/assets/icons/Instagram";
import Github from "../public/assets/icons/Github";
import Discord from "../public/assets/icons/Discord";
import Linkedin from "../public/assets/icons/Linkedin";

export const FooterItems: FooterType[] = [
    { platform: "Email", link: "mailto:ethan.rong@gmail.com", light: "tertiary", dark: "darkTertiary", component: Email},
    { platform: "Instagram", link: "https://www.instagram.com/ethan.rng/", light: "tertiary", dark: "darkTertiary", component: Instagram},
    { platform: "GitHub", link: "https://github.com/ethan-rng", light: "tertiary", dark: "darkTertiary", component: Github},
    { platform: "Discord", link: "https://discordapp.com/users/theallknowing.", light: "tertiary", dark: "darkTertiary", component: Discord},
    { platform: "LinkedIn", link: "https://www.linkedin.com/in/ethanrong2004/", light: "tertiary", dark: "darkTertiary", component: Linkedin},
]

