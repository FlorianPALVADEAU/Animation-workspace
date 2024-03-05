import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { text, curve, translate } from './anim';
import { routes } from '../../../index';

const anim = (variants) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    }
}

export default function PageTransition({children, backgroundColor}) {
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    })
    const [currentRoute, setCurrentRoute] = useState(window.location.pathname)

    useEffect( () => {
        setCurrentRoute(window.location.pathname)
        function resize(){
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])
    
    return (
    <div className='curve' style={{backgroundColor}}>
       <div style={{opacity: dimensions.width == null ? 1 : 0}} className='background'/>
       <motion.p className='route' {...anim(text)}>
            {routes[Object.keys(routes).filter((item) => item === currentRoute)[0]]}
        </motion.p>
       {dimensions.width != null && <SVG {...dimensions}/>}
        {
            children
        }
    </div>
    )
}

const SVG = ({height, width}) => {

    const initialPath = `
        M0 300 
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg {...anim(translate)} className={'svg'}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    )
}