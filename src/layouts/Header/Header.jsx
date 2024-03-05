import React, { forwardRef } from 'react'
import '../../App.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = forwardRef((props, ref) =>{
  return (
    <>
      <BurgerMenu ref={ref}/>
      <header>
          <div className="headings">
              <h1>Florian Palvadeau</h1>
              <h4>Front-end developer</h4>
          </div>
          <div className="cta">
              <button>Discover my ressources !</button>
              <div className="arrow">↓</div>
          </div>
      </header>
    </>
  )
})

export default Header