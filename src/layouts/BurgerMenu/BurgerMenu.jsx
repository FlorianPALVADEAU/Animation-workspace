import React, { useRef, useState, useEffect, forwardRef, useContext } from 'react';
import '../../app.scss';
import gsap from 'gsap';
import MagneticButton from '../../pages/effects/MagneticButton';
import { CursorContext } from '../../utils/CursorProvider';

const BurgerMenu = forwardRef(function Index(props, ref) {
    const clickRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [componentDidMount, setComponentDidMount] = useState(false);
    const [, setDimensions] = useState({height:  0, width:  0});

    useEffect(() => {
        setComponentDidMount(true);
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        resize();
        window.addEventListener('resize', resize);
        return () => {window.removeEventListener('resize', resize)};
    }, []);

    useEffect(() => {
        if (clickRef.current) {
            if (open) {
                gsap.fromTo(clickRef.current, {
                    duration:  0.75,
                    left: `100vw`,
                    ease: "power3.inOut",
                    display: "block",
                }, {
                    left: `-0vw`,
                });
            } else {
                gsap.fromTo(clickRef.current, {
                    duration:  0.75,
                    left: `0vw`,
                    ease: "power3.inOut",
                }, {
                    left: `100vw`,
                });
            }
        }
    }, [open]);

    return (
        <>
                <div className={`burgerMenu ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                    <MagneticButton disableCursorResize={true}>
                        <div className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                            <span></span>
                            <div className="bounds" ref={ref}></div>
                        </div>
                    </MagneticButton>
                </div>
            {
                componentDidMount && (
                    <div className={`overlay ${open ? 'open' : ''}`} ref={clickRef}>
                        <nav className={`menu ${open ? 'open' : ''}`}>
                            <span></span>
                            <ul>
                                <MagneticButton disableCursorResize><li><a href="/">Home</a></li></MagneticButton>
                                <MagneticButton disableCursorResize><li><a href="/transitions">Transitions</a></li></MagneticButton>
                                <MagneticButton disableCursorResize><li><a href="/animations">Animations</a></li></MagneticButton>
                                <MagneticButton disableCursorResize><li><a href="/effects">Effects</a></li></MagneticButton>
                            </ul>
                        </nav>
                    </div>
                )
            }
        </>
    );
});

export default BurgerMenu;
