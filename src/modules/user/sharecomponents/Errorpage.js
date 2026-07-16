import React from 'react'
import bgVideo from '../../../img/bg.mp4'

function Errorpage() {
  return (
    <div>
      <video autoPlay loop muted playsInline className="bg-video">
  <source src={bgVideo} type="video/mp4" />
</video>
    <div className=' container-fluid text-white error'>
        <div className='row' justify-content-center align-center>
            <div className='col-6'>
                <h1>ERROR</h1>
               <h2>404</h2>
               <p>Page not found</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Errorpage
