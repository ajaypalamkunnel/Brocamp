

import React, { lazy, Suspense, useState } from 'react'

const About = lazy(()=>import("./About"))

const Home = () => {

    const [show,setShow] = useState(false)

  return (
    <div>

        <h4>Home</h4>

        <button onClick={()=>setShow(!show)}>load about</button>

        <Suspense fallback={<p>loading...</p>}>

        {show&&<About/>}

        </Suspense>

    </div>
  )
}

export default Home