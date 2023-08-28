import React from 'react'
import airplane from '../../assets/580b585b2edbce24c47b2d0d.png'
import video from '../../assets/clouds_-_1154 (360p).mp4'
const Home = () => {
  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
       
        <div className="homeImages flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop className='video'></video>
          </div>

          <img src={airplane} className='plane'/>
        </div>
    </div>
  )
}

export default Home