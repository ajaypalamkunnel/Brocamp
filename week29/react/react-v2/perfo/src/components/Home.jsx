import React, { Suspense } from 'react'

const FetchedUsers = React.lazy(()=> import('./Users'))

const Home = () => {


  return (
    <div>

        <Suspense fallback={<div>Loading...</div>}>

            <FetchedUsers/>
        </Suspense>

    </div>
  )
}

export default Home