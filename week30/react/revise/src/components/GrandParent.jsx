

import React from 'react'

const GrandParent = () => {

    console.log("grand parent ")
  return (
    <div>GrandParent</div>
  )
}

export default React.memo(GrandParent)