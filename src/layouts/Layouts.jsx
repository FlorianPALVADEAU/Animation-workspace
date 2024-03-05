import {useRef} from 'react'
import Header from './Header/Header'
import StickyCursor from '../components/StickyCursor/StickyCursor'

function Layouts({children}) {
      const stickyElement = useRef(null)

    return (
        <>
            <Header ref={stickyElement} />
            <StickyCursor stickyElement={stickyElement}/>

                {children}
            {/* <Header/> */}
        </>
    )
}

export default Layouts