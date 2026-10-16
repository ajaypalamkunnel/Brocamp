import React, { lazy, Suspense, useState } from 'react'

const MyComp = lazy(()=>{
    return import('../utils/Cards')
})

const DemoLazy = () => {
    const [state,setState] = useState(false)
  return (
    <div>
        <h1>DemoLazy</h1>
        {
            state&&(
                <Suspense fallback= {<div>Loadingg....</div>}>
                    
                        <MyComp/>
                </Suspense>
                )

            
        }

        <button onClick={()=>{setState(true)}}>Click</button>
    </div>
  )
}

export default DemoLazy