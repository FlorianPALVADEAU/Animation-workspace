import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import '../../../App.css';


export default function ParagraphEvidence({paragraph, displayBehavior}) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.8", "start 0.35"]
    })

    const words = paragraph.split(" ")

    return (
        <motion.p 
            ref={container}         
            className="paragraph"
            style={displayBehavior === "paragraph" ? {opacity: scrollYProgress} : {}}
        >
            {
                displayBehavior === "paragraph" ? (
                    paragraph
                ) : (
                    words.map( (word, i) => {
                    const start = i / words.length
                        const end = start + (1 / words.length)
                        return <Word key={i} progress={scrollYProgress} range={[start, end]} displayBehavior={displayBehavior}>{word}</Word>
                    })
                )
            }
        </motion.p>
    )
}

const Word = ({children, progress, range, displayBehavior}) => {
    const opacity = useTransform(progress, range, [0, 1])

    const amount = range[1] - range[0]
    const step = amount / children.length

    return (
        displayBehavior === "word" ? (
            <span className="word">
                <span className="shadow">{children}</span>
                <motion.span style={{opacity: opacity}}>{children}</motion.span>
            </span>
        ) : (
            <span className="word">
                {
                children.split("").map((char, i) => {
                    const start = range[0] + (i * step);
                    const end = range[0] + ((i + 1) * step)
                    return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
                })
                }
            </span>
        )
    )
}

const Char = ({children, progress, range}) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span>
            <span className="shadow">{children}</span>
            <motion.span style={{opacity: opacity}}>{children}</motion.span>
        </span>
    )
}