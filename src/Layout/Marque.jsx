import React from 'react'
import Marquee from "react-fast-marquee";

const Marque = () => {
    const ADS = 'YOU ORDER, WE DELIVER'
  return (
 <div>
   <Marquee speed={100} style={{backgroundColor:'#ADD8E6', height:'4rem'}} className=' text-light'>
       <h1>{ADS} <span style={{backgroundColor:'#0000FF', borderTopRightRadius:30, height:'4rem'}}>FOR FREE 🛒</span></h1>
   </Marquee>
    </div>
  )
}

export default Marque