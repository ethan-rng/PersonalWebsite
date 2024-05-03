import type { ReactElement } from 'react';

// For Logo and Hero Page
export type ImageType = {
    light: string
    dark: string
} 

// NavBar
export type NavBarType = {
    text: string;
    link: string;
}


// About Type
export type AboutType = {
    header: string;
    description: string;
}

// TerminalItemType
export type TerminalItemType = {
    name: string;
    image: string;
    rating: string;
    description?: string;
}

// TerminalPageType
export type TerminalPageType = {
    name: string;
    items: TerminalItemType[];
}

// HobbyItemType
export type HobbyItemType = {
    name: string;
    varName: string;
    images: string[];
    description: string;
}


// Carousel Card Type
export type CarouselCardType = {
    name: string;
    image: ReactElement;
    description: string;
}


// Footer Type
export type FooterType = {
    platform: string;
    link: string;
    light: string;
    dark: string;
    component: React.FC<any>;
}

// Footer React Functional Component
export type SVGType = {
    fill: string;
    className: string;
    size: string;
}