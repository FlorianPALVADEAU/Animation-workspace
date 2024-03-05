import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import '../../App.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HorizontalScroll3d() {
  gsap.registerPlugin(ScrollTrigger);
  const img = "https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const topLayer = useRef(null);
  const bottomLayer = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0,
    }, {
      translateX: "-420vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
        pin: true,
      }
    })
    const pin2 = gsap.fromTo(topLayer.current, {
      translateY: "-35%",
      height: "15%",
      marginTop: "2%",
    }, {
      marginTop: "0%",
      height: "35%",
      translateY: "0%",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "50 top",
        scrub: 0.6,
        pin: false,
      }
    })
    const pin3 = gsap.fromTo(bottomLayer.current, {
      translateY: "35%",
    }, {
      translateY: "-0%",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "50 top",
        scrub: 0.6,
        pin: false,
      }
    })
    return () => {
      pin.kill()
      pin2.kill()
      pin3.kill()
    }
  }, []);
  
  return (
    <>
        <div className="racesWrapper" ref={triggerRef}>
            <div className="test"ref={topLayer}>
                <h3>Horizontal Scrolling Effect</h3>
            </div>
            <div className="test2"ref={bottomLayer}></div>
            <div className="test3"></div>
            <div className="test4"></div>
            <div className="races" ref={sectionRef}>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
                <div className='scroll-section'>
                <img src={img} className={'img'} alt=''/>
                </div>
            </div>
        </div>
    </>
  );
}