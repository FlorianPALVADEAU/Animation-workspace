import { useCursorStore } from '../../utils/CursorStore';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react'

function MagneticButton({children, disableCursorResize}) {
    const ref = useRef(null)
    const { setIsHoveringButton, setButtonDimensions } = useCursorStore();

    useEffect(() => {
        const xTo = gsap.quickTo(ref.current, 'x', {duration: 1, ease: 'elastic.out(1, 0.3)'});
        const yTo = gsap.quickTo(ref.current, 'y', {duration: 1, ease: 'elastic.out(1, 0.3)'});

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        }
        
        const mouseEnter = (e) => {
            const { width, height } = ref.current.getBoundingClientRect();
            if (!disableCursorResize) {
                setButtonDimensions(width, height);
                setIsHoveringButton(true);
            }
        }
        const mouseLeave = (e) => {
            setIsHoveringButton(false);
            setButtonDimensions(0, 0);
            xTo(0);
            yTo(0);
        }

        ref.current.addEventListener('mousemove', mouseMove);
        ref.current.addEventListener('mouseover', mouseEnter);
        ref.current.addEventListener('mouseleave', mouseLeave);

        return () => {
            ref.current.removeEventListener('mousemove', mouseMove);
            ref.current.removeEventListener('mouseover', mouseEnter);
            ref.current.removeEventListener('mouseleave', mouseLeave);
        }
    }, []);
    

  return (
    React.cloneElement(children, {ref})
  )
}

export default MagneticButton