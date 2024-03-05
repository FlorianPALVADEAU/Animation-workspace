import { useRef, useEffect, useContext } from 'react';
import './App.css';
import MaskCursor from './pages/effects/MaskCursor/MaskCursor';
import { CursorContext } from './utils/CursorProvider';
import useMousePosition from './utils/useMousePosition';

export default function AppTest() {
  // const { position } = useContext(CursorContext);

  return (
    <>
      <MaskCursor />
      {/* <div>La position du curseur : {position.x}, {position.y}</div> */}
    </>
  );
}