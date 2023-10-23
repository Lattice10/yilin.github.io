import React from 'react'

function Home() {
  const homes = ['home','home','home','home','home','home','home','home','home','home','home']
  console.log(homes);
  return (
    <div>
      {homes.map((home,index) => {
        return <>
          <h1>{index} {home}</h1>
        </>
      })}
    </div>
  )
}

export default Home