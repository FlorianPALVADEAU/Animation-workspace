import React, { useEffect, useState } from 'react'
import '../../../app.scss'
import useMousePosition from '../../../utils/useMousePosition'
import { motion } from 'framer-motion'
import { useCursorStore } from '../../../utils/CursorStore'

function MaskCursor({maskContent, content}) {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  const { displaying, setDisplaying } = useCursorStore();
  return (
    <div 
      className='maskCursorWrapper' 
      onMouseEnter={() => {setDisplaying('a')}} 
      onMouseLeave={() => {setDisplaying('b')}}
    >
      <motion.div 
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
        style={{visibility: !displaying ? 'visible' : 'hidden'}}
      >
        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          {/* {maskContent} */}
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      <div className="content">
        {/* <p>{content}</p> */}
        <p>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
    </div>
  )
}

export default MaskCursor