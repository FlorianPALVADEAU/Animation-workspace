import React, { useEffect, useState } from 'react'

function SkeletonComponent() {
    const [isLoading, setIsLoading] = useState(true)
    const href = "https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])
    
    return (
        <div className="content">
            <h1>Loader test for steven 😉</h1>
            {isLoading && <p>wait for it...</p>}
            <div className='skeletonContainer'>
            {
                isLoading ? (
                <div className="skeletonComponentWrapper">
                    <div className='skeletonImage'/>
                    <div className="skeletonComponentContent">
                        <div className="skeletonComponentTitle"></div>
                        <div className="skeletonComponentText"></div>
                        <div className="skeletonComponentText"></div>
                        <div className="skeletonComponentText"></div>
                        <div className="skeletonComponentText"></div>
                        <button className="skeletonComponentButton"></button>
                    </div>
                </div>
                ) :(
                <div className="componentWrapper">
                    <img src={href} alt="RealImage" className='image'/>
                    <div className="componentContent">
                        <h2 className="componentTitle">This is the real title</h2>
                        <p className="componentText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper ultrices magna, sit amet eleifend ex accumsan at. Aenean at leo nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis id leo at odio viverra volutpat. Morbi ac consequat metus, eu iaculis lectus. Sed pharetra, dui ut egestas cursus, lacus augue malesuada eros, vitae tempus neque diam vel erat. Mauris rutrum purus vel quam rutrum fringilla. Mauris dictum tellus quam, nec ullamcorper tellus ultrices vitae. Aliquam erat volutpat.
                        </p>
                        <button className="componentButton">Click Me!</button>
                    </div>
                </div>
                )
            }
            </div>
        </div>
    )
}

export default SkeletonComponent