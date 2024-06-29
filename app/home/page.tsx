import Post from '@/components/home/Post'
import React from 'react'

function Home() {
  return (
    <div>
      
      <div className=" py-24"> 
        <div className="items-center text-center font-bold text-5xl py-20">
          <h1>Add Your content here for Home</h1>
          <Post title={''} content={''} publishedAt={''}/>
        </div>
      </div>
      
    </div>
  )
}

export default Home