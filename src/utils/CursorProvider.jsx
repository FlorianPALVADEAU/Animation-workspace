import React, { createContext, useState, useEffect, useRef } from 'react';
import useMousePosition from './useMousePosition';
import '../app.scss';
import { motion, useMotionValue, useSpring, transform, animate } from 'framer-motion';
import StickyCursor from '../components/StickyCursor/StickyCursor';

export const CursorContext = createContext();

function CursorProvider({ children }) {
    
    return (
        <CursorContext.Provider value={{ }}>
            {children}
        </CursorContext.Provider>
    );
}

export default CursorProvider;
