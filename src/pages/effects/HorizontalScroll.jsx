import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import '../../App.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HorizontalScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const img = "https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  
  const [racesWidth, setRacesWidth] = useState(null);
  const [amountToScroll, setAmountToScroll] = useState(0);

  function getScrollAmount() {
    setAmountToScroll(racesWidth - window.innerWidth)
    return -(amountToScroll)
  }
  useEffect(() => {
    const races = triggerRef.current;
    if (races) {
      setRacesWidth(races.offsetWidth);
    }
  }, []);
  useEffect(() => {
    if (racesWidth) {
      setAmountToScroll(racesWidth - window.innerWidth);
    }
  }, [racesWidth]);

  useEffect(() => {
    const tween = gsap.to(triggerRef.current, {
      x: getScrollAmount,
      duration:  3,
      ease: 'none',
    });
    ScrollTrigger.create({
      trigger: '.racesWrapper',
      start: 'top 10%',
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub:  1,
      invalidateOnRefresh: true,
    });
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((ST) => ST.kill());
    }
  }, [amountToScroll]);
  
  return (
    <>
        <div className="racesWrapper" ref={triggerRef}>
            <h3>Horizontal Scrolling Effect</h3>
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
                <h4>Works Also With Text!</h4>
                </div>
                <div className='scroll-section'>
                <h4>What's up</h4>
                </div>
            </div>
        </div>
    </>
  );
}