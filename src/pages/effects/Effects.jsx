import React from 'react'
import MagneticButton from './MagneticButton'
import HorizontalScroll from './HorizontalScroll'
import HorizontalScroll3d from './HorizontalScroll3d'
import '../../App.css'

function Effects() {
  return (
    <>
        {/* <HorizontalScroll/> */}
        {/* <HorizontalScroll3d/> */}
        <div className="magneticContainer">
          <h3>Magnetic Button Effect</h3>
          <div className="buttonWrapper">
            <MagneticButton>
              <button>Hover me!</button>
            </MagneticButton>
            <MagneticButton>
              <button>Hover me!</button>
            </MagneticButton>
            <MagneticButton>
              <button>Hover me!</button>
            </MagneticButton>
            <MagneticButton>
              <button>Hover me!</button>
            </MagneticButton>
          </div>
        </div>
    </>
  )
}

export default Effects