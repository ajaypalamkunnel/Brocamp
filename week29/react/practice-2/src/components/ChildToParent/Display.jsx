

import React, { Suspense, useState } from 'react'

const Display = () => {

    const [view,setView] = useState(false)

    const BulkeyComp = React.lazy(()=>import("../Bulky"))

  return (
    <div>

        {
            view&&(
                <Suspense fallback={<p>Loading....</p>}>
                    <BulkeyComp/>
                </Suspense>
            )
        }

        <button onClick={()=>setView(!view)}>load the component</button>


    </div>
  )
}

export default Display